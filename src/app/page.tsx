import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Services />
        <Process />
        <Experience />
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 p-8 text-center text-white shadow-2xl shadow-cyan-500/10 sm:p-12">
            <p className="text-2xl font-bold leading-relaxed sm:text-4xl">“Meu objetivo é usar dados, tecnologia e visão de processo para transformar problemas operacionais em oportunidades de melhoria.”</p>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
