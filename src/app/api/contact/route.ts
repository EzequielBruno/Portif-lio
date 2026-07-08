const contactEmail = "ezequieldbruno@gmail.com";
const formSubmitEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;

type ContactRequest = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  honey?: string;
};

function hasRequiredFields(data: ContactRequest) {
  return Boolean(
    data.name?.trim() &&
      data.email?.trim() &&
      data.subject?.trim() &&
      data.message?.trim(),
  );
}

export async function POST(request: Request) {
  const data = (await request.json()) as ContactRequest;

  if (data.honey) {
    return Response.json({ ok: true });
  }

  if (!hasRequiredFields(data)) {
    return Response.json(
      { error: "Preencha todos os campos obrigatórios." },
      { status: 400 },
    );
  }

  const response = await fetch(formSubmitEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      _subject: `Novo contato pelo portfólio: ${data.subject}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    return Response.json(
      { error: "Não foi possível enviar sua mensagem agora." },
      { status: response.status },
    );
  }

  return Response.json({ ok: true });
}
