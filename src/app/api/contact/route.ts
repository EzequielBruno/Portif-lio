const contactEmail = process.env.CONTACT_TO_EMAIL ?? "ezequieldbruno@gmail.com";
const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail =
  process.env.CONTACT_FROM_EMAIL ?? "Portfólio <onboarding@resend.dev>";
const resendEndpoint = "https://api.resend.com/emails";

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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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

  if (!resendApiKey) {
    return Response.json(
      {
        error:
          "Envio de e-mail não configurado. Defina RESEND_API_KEY nas variáveis de ambiente.",
      },
      { status: 500 },
    );
  }

  const name = data.name!.trim();
  const email = data.email!.trim();
  const subject = data.subject!.trim();
  const message = data.message!.trim();

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "portfolio-contact-form/1.0",
    },
    body: JSON.stringify({
      from: resendFromEmail,
      to: [contactEmail],
      reply_to: email,
      subject: `Novo contato pelo portfólio: ${subject}`,
      html: `
        <h2>Novo contato pelo portfólio</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
      `,
      text: `Novo contato pelo portfólio\n\nNome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`,
    }),
  });

  if (!response.ok) {
    const resendError = (await response.json().catch(() => null)) as {
      message?: string;
    } | null;

    return Response.json(
      {
        error:
          resendError?.message ?? "Não foi possível enviar sua mensagem agora.",
      },
      { status: response.status },
    );
  }

  return Response.json({ ok: true });
}
