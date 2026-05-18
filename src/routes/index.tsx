import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mestre Jabi — Médium Vidente em Portimão | Consultas Presenciais" },
      {
        name: "description",
        content:
          "Mestre Jabi, médium vidente com décadas de experiência. Leitura dos búzios, astrologia e limpeza espiritual. Consultas presenciais em Portimão, Algarve.",
      },
      { property: "og:title", content: "Mestre Jabi — Médium Vidente em Portimão" },
      { property: "og:description", content: "Consultas espirituais presenciais em Portimão." },
    ],
  }),
});

const WHATSAPP = "351927730411";
const WHATSAPP_DISPLAY = "+351 927 730 411";
const PHONE = "+351965722117";
const PHONE_DISPLAY = "+351 965 722 117";
const EMAIL = "mestrejabi.oficial@gmail.com";
const WA_LINK = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Olá Patrícia, gostaria de marcar uma consulta presencial com o Mestre Jabi."
)}`;

const services = [
  { icon: "🐚", title: "Leitura dos Búzios", desc: "Técnica ancestral africana que revela mensagens dos Orixás sobre passado, presente e futuro." },
  { icon: "♡", title: "Problemas de Amor", desc: "Orientação espiritual para separações, desentendimentos e dificuldades nas relações afetivas." },
  { icon: "👁", title: "Mau-Olhado & Inveja", desc: "Identificação e neutralização de energias negativas que bloqueiam o seu caminho." },
  { icon: "✦", title: "Limpeza Espiritual", desc: "Rituais de purificação energética com técnicas tradicionais." },
  { icon: "⚖", title: "Desavenças Familiares", desc: "Intervenção espiritual para restaurar equilíbrio, diálogo e união familiar." },
  { icon: "★", title: "Leitura Astrológica", desc: "Análise do mapa natal e posições planetárias para revelar tendências e oportunidades." },
];

const zodiac = [
  ["♈", "Áries", "21 Mar – 19 Abr"], ["♉", "Touro", "20 Abr – 20 Mai"],
  ["♊", "Gémeos", "21 Mai – 20 Jun"], ["♋", "Caranguejo", "21 Jun – 22 Jul"],
  ["♌", "Leão", "23 Jul – 22 Ago"], ["♍", "Virgem", "23 Ago – 22 Set"],
  ["♎", "Balança", "23 Set – 22 Out"], ["♏", "Escorpião", "23 Out – 21 Nov"],
  ["♐", "Sagitário", "22 Nov – 21 Dez"], ["♑", "Capricórnio", "22 Dez – 19 Jan"],
  ["♒", "Aquário", "20 Jan – 18 Fev"], ["♓", "Peixes", "19 Fev – 20 Mar"],
];

const faqs = [
  { q: "Como funciona a consulta?", a: "A consulta começa com uma conversa para compreender a sua situação. Depois, é realizada a leitura através dos búzios, astrologia ou outras técnicas espirituais. O processo é sempre confidencial e respeitoso." },
  { q: "As consultas são presenciais ou online?", a: "As consultas são exclusivamente presenciais, em Portimão, Algarve. Não realizamos consultas online — o atendimento presencial é essencial para a leitura e o trabalho espiritual." },
  { q: "Como faço a marcação?", a: "As marcações são feitas via WhatsApp pelo número +351 927 730 411 (Patrícia Antunes, administradora do site) ou por email. Para falar diretamente com o Mestre Jabi, ligue para +351 965 722 117." },
  { q: "Quanto tempo dura uma consulta?", a: "Uma consulta típica dura entre 45 minutos a 1 hora, dependendo da complexidade da situação e das técnicas utilizadas." },
  { q: "Qual é o valor da consulta?", a: "Os valores variam conforme o tipo de serviço. Contacte a Patrícia Antunes via WhatsApp ou email para conhecer os preços específicos e agendar a sua consulta." },
  { q: "A consulta é confidencial?", a: "Sim, absolutamente. Toda informação partilhada durante a consulta é tratada com total confidencialidade e respeito." },
];

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="font-display text-xl text-gradient-gold font-semibold tracking-wide">
            Mestre Jabi
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition">Sobre</a>
            <a href="#servicos" className="hover:text-primary transition">Serviços</a>
            <a href="#astrologia" className="hover:text-primary transition">Astrologia</a>
            <a href="#testemunhos" className="hover:text-primary transition">Testemunhos</a>
            <a href="#faq" className="hover:text-primary transition">FAQ</a>
            <a href="#contacto" className="hover:text-primary transition">Contacto</a>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-glow hover:opacity-90 transition">
            Marcar Consulta
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/20 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6">Bem-vindo ao Mundo Espiritual</p>
          <h1 className="font-display text-6xl md:text-8xl font-medium text-gradient-gold mb-6 leading-tight">
            Mestre Jabi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-display italic">
            Médium Vidente com décadas de experiência nas tradições espirituais africanas
          </p>
          <p className="text-sm text-primary/80 mb-10 tracking-wide">
            ✦ Consultas exclusivamente presenciais em Portimão ✦
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener" className="inline-flex items-center gap-2 bg-gold-gradient text-primary-foreground px-7 py-3.5 rounded-full font-medium shadow-glow hover:scale-105 transition">
              <span>💬</span> Marcar via WhatsApp
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 bg-card border border-gold/30 text-foreground px-7 py-3.5 rounded-full font-medium hover:border-primary transition">
              <span>📧</span> Enviar Email
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-card border border-border text-foreground px-7 py-3.5 rounded-full font-medium hover:border-primary transition">
              <span>📞</span> Ligar ao Mestre
            </a>
          </div>
          <div className="mt-12 inline-flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><span className="text-primary">✓</span> Total Confidencialidade</span>
            <span className="inline-flex items-center gap-1.5"><span className="text-primary">✓</span> Décadas de Experiência</span>
            <span className="inline-flex items-center gap-1.5"><span className="text-primary">✓</span> Atendimento Presencial</span>
          </div>
        </div>
      </section>

      {/* ADMIN / BOOKING NOTICE — credibility block */}
      <section className="py-16 px-6 border-y border-border/50 bg-card/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Administração do Site</p>
            <h2 className="font-display text-4xl mb-4">Marcações com a Patrícia Antunes</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este site é administrado pela <strong className="text-foreground">Patrícia Antunes</strong>, responsável
              por gerir todas as marcações e dar apoio a quem nos contacta. Se tiver alguma dúvida,
              precisar de ajuda para marcar a sua consulta ou encontrar dificuldades no site,
              fale diretamente com ela.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As marcações são feitas exclusivamente por <strong className="text-foreground">WhatsApp</strong> ou
              <strong className="text-foreground"> email</strong>. Para falar diretamente com o Mestre Jabi,
              utilize o número de telemóvel indicado.
            </p>
          </div>
          <div className="bg-card-gradient border border-gold/30 rounded-2xl p-8 shadow-card">
            <div className="space-y-5">
              <a href={WA_LINK} target="_blank" rel="noopener" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center text-xl shrink-0">💬</div>
                <div>
                  <p className="text-xs text-primary uppercase tracking-wider">WhatsApp · Marcações</p>
                  <p className="text-lg font-medium group-hover:text-primary transition">{WHATSAPP_DISPLAY}</p>
                  <p className="text-xs text-muted-foreground">Patrícia Antunes — Administradora</p>
                </div>
              </a>
              <a href={`tel:${PHONE}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary border border-gold/30 flex items-center justify-center text-xl shrink-0">📞</div>
                <div>
                  <p className="text-xs text-primary uppercase tracking-wider">Telefone Direto</p>
                  <p className="text-lg font-medium group-hover:text-primary transition">{PHONE_DISPLAY}</p>
                  <p className="text-xs text-muted-foreground">Falar diretamente com o Mestre Jabi</p>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-secondary border border-gold/30 flex items-center justify-center text-xl shrink-0">📧</div>
                <div>
                  <p className="text-xs text-primary uppercase tracking-wider">Email</p>
                  <p className="text-base font-medium group-hover:text-primary transition break-all">{EMAIL}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card-gradient border border-gold/30 shadow-card flex items-center justify-center">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_30%,oklch(0.82_0.14_82/0.4),transparent_60%)]" />
            <div className="relative text-9xl">🔮</div>
            <div className="absolute bottom-4 left-4 right-4 text-center text-xs text-muted-foreground font-display italic">
              Mestre Jabi · Portimão
            </div>
          </div>
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Quem é</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">O Mestre Jabi</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Médium vidente com décadas de experiência nas tradições espirituais africanas.
              Nascido e criado com profundo respeito pelos ensinamentos dos Orixás e pela sabedoria ancestral,
              dedica a sua vida a ajudar quem procura orientação e clareza.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Através da leitura dos búzios, da astrologia e de técnicas espirituais tradicionais,
              ajuda as pessoas a compreenderem o seu caminho, a resolverem bloqueios e a encontrarem
              equilíbrio nas suas vidas. Cada consulta é tratada com total confidencialidade e respeito.
            </p>
            <ul className="space-y-2.5">
              {[
                "Décadas de experiência espiritual",
                "Leitura precisa dos búzios",
                "Atendimento presencial em Portimão",
                "Total confidencialidade garantida",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="text-primary text-lg">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-24 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Os Meus Serviços</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Cada consulta é única e personalizada</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card-gradient border border-border hover:border-gold/30 rounded-2xl p-7 transition group">
                <div className="w-14 h-14 rounded-xl bg-gold-gradient flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition">{s.icon}</div>
                <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ASTROLOGIA */}
      <section id="astrologia" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Conhecimento dos Astros</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Astrologia & Sistemas Espirituais</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-14">
            {[
              ["Astrologia Ocidental", "Estudo das posições planetárias no nascimento para revelar traços de personalidade, tendências e o destino."],
              ["Jogo de Búzios", "Técnica ancestral africana de adivinhação. Os búzios são lançados e a sua posição revela mensagens dos Orixás."],
              ["Ocultismo & Vidência", "Acesso a informações sobre passado, presente e futuro através de conhecimentos profundos do ocultismo."],
              ["Limpeza Energética", "Rituais de purificação para remover bloqueios, mau-olhado e energias negativas que impedem o progresso."],
            ].map(([t, d]) => (
              <div key={t} className="border border-border rounded-xl p-6 bg-card/40">
                <h3 className="font-display text-2xl mb-2 text-primary">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <h3 className="font-display text-2xl text-center mb-8">Os 12 Signos do Zodíaco</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {zodiac.map(([icon, name, date]) => (
              <div key={name} className="border border-border rounded-xl p-4 text-center hover:border-gold/30 hover:bg-card/40 transition">
                <div className="text-3xl text-primary mb-1">{icon}</div>
                <div className="font-display text-lg">{name}</div>
                <div className="text-[11px] text-muted-foreground">{date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTEMUNHOS */}
      <section id="testemunhos" className="py-24 px-6 bg-card/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Testemunhos</p>
          <h2 className="font-display text-4xl md:text-5xl mb-12">O que dizem os clientes</h2>
          <div className="bg-card-gradient border border-gold/30 rounded-2xl p-10 shadow-card">
            <div className="text-5xl text-primary mb-4 font-display">"</div>
            <p className="text-lg md:text-xl font-display italic text-foreground leading-relaxed mb-6">
              Estava a passar por uma fase muito difícil no amor. Após a consulta com o Mestre Jabi,
              as coisas começaram a mudar. A leitura foi precisa e o acompanhamento foi muito humano.
            </p>
            <div className="text-primary font-medium">Maria S.</div>
            <div className="text-xs text-muted-foreground">Portimão</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">FAQ</p>
            <h2 className="font-display text-4xl md:text-5xl">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="border border-border rounded-xl bg-card/40 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-card transition"
                >
                  <span className="font-display text-lg pr-4">{f.q}</span>
                  <span className={`text-primary text-xl transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 px-6 bg-card/30 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Entre em Contacto</p>
            <h2 className="font-display text-4xl md:text-5xl mb-3">Marque a sua consulta presencial</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              As marcações são geridas pela Patrícia Antunes, administradora do site.
              Escolha o canal mais conveniente para si.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <a href={WA_LINK} target="_blank" rel="noopener" className="bg-card-gradient border border-gold/30 rounded-2xl p-8 text-center hover:shadow-glow transition group">
              <div className="text-4xl mb-3">💬</div>
              <div className="text-xs text-primary uppercase tracking-wider mb-1">WhatsApp · Marcações</div>
              <div className="font-display text-xl group-hover:text-primary transition">{WHATSAPP_DISPLAY}</div>
              <div className="text-xs text-muted-foreground mt-2">Patrícia Antunes</div>
            </a>
            <a href={`tel:${PHONE}`} className="bg-card-gradient border border-border rounded-2xl p-8 text-center hover:border-gold/30 transition group">
              <div className="text-4xl mb-3">📞</div>
              <div className="text-xs text-primary uppercase tracking-wider mb-1">Telefone Direto</div>
              <div className="font-display text-xl group-hover:text-primary transition">{PHONE_DISPLAY}</div>
              <div className="text-xs text-muted-foreground mt-2">Falar com o Mestre Jabi</div>
            </a>
            <a href={`mailto:${EMAIL}`} className="bg-card-gradient border border-border rounded-2xl p-8 text-center hover:border-gold/30 transition group">
              <div className="text-4xl mb-3">📧</div>
              <div className="text-xs text-primary uppercase tracking-wider mb-1">Email</div>
              <div className="font-display text-sm group-hover:text-primary transition break-all">{EMAIL}</div>
              <div className="text-xs text-muted-foreground mt-2">Resposta em 24h</div>
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-14 grid sm:grid-cols-3 gap-4 text-center">
            <div className="border border-border rounded-xl p-5 bg-card/40">
              <div className="text-2xl mb-1">🔒</div>
              <div className="font-medium text-sm">Total Confidencialidade</div>
              <div className="text-xs text-muted-foreground">Cada consulta tratada com sigilo absoluto</div>
            </div>
            <div className="border border-border rounded-xl p-5 bg-card/40">
              <div className="text-2xl mb-1">📍</div>
              <div className="font-medium text-sm">Atendimento em Portimão</div>
              <div className="text-xs text-muted-foreground">Espaço próprio, ambiente acolhedor</div>
            </div>
            <div className="border border-border rounded-xl p-5 bg-card/40">
              <div className="text-2xl mb-1">⭐</div>
              <div className="font-medium text-sm">Décadas de Experiência</div>
              <div className="text-xs text-muted-foreground">Tradição espiritual africana autêntica</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-border/50 text-center text-xs text-muted-foreground">
        <p className="font-display text-lg text-gradient-gold mb-2">Mestre Jabi</p>
        <p>Médium Vidente · Portimão, Algarve · Consultas exclusivamente presenciais</p>
        <p className="mt-2">Site administrado por Patrícia Antunes · WhatsApp {WHATSAPP_DISPLAY}</p>
        <p className="mt-4 opacity-70">© {new Date().getFullYear()} Mestre Jabi. Todos os direitos reservados.</p>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener"
        aria-label="Marcar via WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gold-gradient shadow-glow flex items-center justify-center text-2xl hover:scale-110 transition"
      >
        💬
      </a>
    </div>
  );
}
