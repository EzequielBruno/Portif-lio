"use client";

import { FormEvent, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const contactEmail = "ezequieldbruno@gmail.com";

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
  honey: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  honey: "",
};

export function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField(field: keyof ContactForm, value: string) {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Não foi possível enviar sua mensagem.");
      }

      setForm(initialForm);
      setStatus("success");
      setStatusMessage("Mensagem enviada com sucesso! Retornarei em breve.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua mensagem agora.",
      );
    }
  }

  const isSending = status === "sending";

  return (
    <section id="contato" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contato"
          title="Vamos conversar sobre dados, BI e soluções digitais"
          description="Preencha o formulário para enviar sua mensagem diretamente pela página."
        />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white dark:border-white/10">
            <h3 className="text-2xl font-bold">Ezequiel Bruno</h3>
            <p className="mt-4 text-slate-300">
              Disponível para oportunidades profissionais, projetos de BI,
              automação, relatórios, análise de indicadores e sistemas web
              internos.
            </p>
            <div className="mt-8 grid gap-3">
              <a
                href="https://www.linkedin.com/in/ezequiel-deivid-bruno-044707170/"
                className="hover:text-cyan-300"
              >
                LinkedIn: ezequiel-deivid-bruno
              </a>
              <a
                href="https://github.com/EzequielBruno"
                className="hover:text-cyan-300"
              >
                GitHub: EzequielBruno
              </a>
              <a href="https://wa.me/5534974000856" className="hover:text-cyan-300">
                WhatsApp: (34) 97400-0856
              </a>
              <a href={`mailto:${contactEmail}`} className="hover:text-cyan-300">
                E-mail: {contactEmail}
              </a>
            </div>
          </aside>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900"
          >
            <input
              tabIndex={-1}
              autoComplete="off"
              value={form.honey}
              onChange={(event) => updateField("honey", event.target.value)}
              className="hidden"
              aria-hidden="true"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold">
                Nome
                <input
                  required
                  disabled={isSending}
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10"
                  placeholder="Seu nome"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                E-mail
                <input
                  required
                  disabled={isSending}
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10"
                  placeholder="seu@email.com"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Assunto
              <input
                required
                disabled={isSending}
                value={form.subject}
                onChange={(event) => updateField("subject", event.target.value)}
                className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10"
                placeholder="Projeto, oportunidade ou parceria"
              />
            </label>
            <label className="mt-5 grid gap-2 text-sm font-semibold">
              Mensagem
              <textarea
                required
                disabled={isSending}
                rows={5}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className="rounded-2xl border border-slate-200 bg-transparent px-4 py-3 outline-none focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-60 dark:border-white/10"
                placeholder="Conte brevemente como posso ajudar"
              />
            </label>
            <button
              type="submit"
              disabled={isSending}
              className="mt-6 rounded-full bg-cyan-500 px-7 py-3 font-bold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Enviando..." : "Enviar mensagem"}
            </button>
            {statusMessage ? (
              <p
                className={`mt-4 text-sm font-semibold ${
                  status === "success" ? "text-emerald-600" : "text-red-500"
                }`}
              >
                {statusMessage}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
