import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Instagram,
  Mail,
  Clock,
  CheckCircle,
  Star,
  HeartPulse,
  Dumbbell,
  Sparkles,
  MessageCircle,
  Quote,
} from "lucide-react";

const fotoHero = "/333.jpg";
const fotoPilates = "/337.jpg";
const fotoBemEstar = "/340.jpg";

export default function App() {
  const whatsapp =
    "https://wa.me/5521968354665?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20no%20RV%20Pilates%20Studio.";
  const instagram = "https://www.instagram.com/rafaelavieirafisio";

  useEffect(() => {
    document.title = "RV Pilates Studio | Pilates e Fisioterapia em Nova Iguaçu";
  }, []);

  const fadeUp = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7 },
  };

  const servicos = [
    "Pilates com aparelhos",
    "Fisioterapia ortopédica",
    "Fisioterapia neurológica",
    "Massagem relaxante",
    "Drenagem linfática pós-operatória",
    "Liberação miofascial",
    "Kinesio tape",
    "Atendimento individual ou em grupo",
  ];

  return (
    <main>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; color: #0f172a; }
        a { text-decoration: none; }
        .header {
          position: fixed; top: 0; width: 100%; z-index: 50;
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(14,165,233,.15);
        }
        .nav {
          max-width: 1180px; margin: auto; height: 82px; padding: 0 24px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .brand { display: flex; align-items: center; gap: 14px; }
        .logo {
          width: 58px; height: 58px; border-radius: 20px; background: #0ea5e9;
          color: white; display: flex; align-items: center; justify-content: center;
          font-size: 24px; font-weight: 900; box-shadow: 0 16px 40px rgba(14,165,233,.28);
        }
        .brand h2 { margin: 0; color: #0ea5e9; font-size: 22px; }
        .brand p { margin: 2px 0 0; color: #64748b; }
        .menu { display: flex; gap: 28px; font-weight: 700; }
        .menu a { color: #334155; }
        .btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: #0ea5e9; color: white; padding: 15px 25px; border-radius: 999px;
          font-weight: 900; box-shadow: 0 18px 40px rgba(14,165,233,.32);
        }

        .hero {
          min-height: 100vh;
          padding-top: 82px;
          background-image:
            linear-gradient(90deg, rgba(2,6,23,.88) 0%, rgba(2,6,23,.72) 42%, rgba(2,6,23,.25) 100%),
            url(${fotoHero});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }
        .hero-inner {
          max-width: 1180px;
          width: 100%;
          margin: auto;
          padding: 90px 24px;
        }
        .glass {
          max-width: 620px;
          padding: 34px;
          border-radius: 34px;
          background: rgba(255,255,255,.10);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,.20);
          box-shadow: 0 30px 90px rgba(0,0,0,.35);
        }
        .tag {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 18px; border-radius: 999px;
          color: white; background: rgba(14,165,233,.35);
          border: 1px solid rgba(255,255,255,.25);
          font-weight: 800;
        }
        h1 {
          font-size: 62px;
          line-height: 1.04;
          color: white;
          margin: 26px 0;
          letter-spacing: -2px;
        }
        .blue { color: #38bdf8; }
        .lead {
          color: rgba(255,255,255,.92);
          font-size: 20px;
          line-height: 1.75;
          margin-bottom: 30px;
        }

        section { padding: 90px 24px; }
        .container { max-width: 1180px; margin: auto; }
        .section-title {
          color: #0ea5e9; font-weight: 900; letter-spacing: 4px;
          text-transform: uppercase; font-size: 14px;
        }
        h2 { font-size: 44px; line-height: 1.15; margin: 12px 0 26px; }
        .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 45px; align-items: center; }
        .text { font-size: 18px; line-height: 1.8; color: #475569; }

        .photo {
          width: 100%;
          height: 390px;
          object-fit: cover;
          border-radius: 32px;
          box-shadow: 0 30px 70px rgba(15,23,42,.18);
        }
        .dark { background: #020617; color: white; }
        .dark h2 { color: white; }
        .services {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; margin-top: 35px;
        }
        .card {
          padding: 28px;
          border-radius: 30px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 20px 45px rgba(0,0,0,.18);
        }
        .card svg { color: #7dd3fc; margin-bottom: 16px; }
        .cards3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .premium {
          padding: 34px;
          border-radius: 34px;
          background: #f0f9ff;
          box-shadow: 0 24px 55px rgba(14,165,233,.12);
        }
        .premium.blue-card { background: #0ea5e9; color: white; }
        .premium p { color: #475569; line-height: 1.7; }
        .blue-card p { color: #e0f2fe; }

        .soft { background: #f8fafc; }
        .diff { display: grid; gap: 14px; }
        .diff-item {
          background: white;
          padding: 18px;
          border-radius: 22px;
          display: flex;
          gap: 12px;
          align-items: center;
          box-shadow: 0 14px 30px rgba(15,23,42,.07);
        }
        .diff-item svg { color: #0ea5e9; }

        .testimonials { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .testimonial {
          padding: 30px;
          border-radius: 32px;
          border: 1px solid #dbeafe;
          box-shadow: 0 24px 55px rgba(14,165,233,.10);
        }

        .contact {
          background: linear-gradient(135deg,#0ea5e9,#0284c7);
          color: white;
        }
        .contact-box {
          background: white;
          color: #0f172a;
          padding: 34px;
          border-radius: 34px;
          box-shadow: 0 30px 70px rgba(2,6,23,.22);
        }
        .contact-line { display: flex; gap: 12px; margin: 18px 0; align-items: center; }
        .contact-line svg { color: #0ea5e9; }
        .map {
          width: 100%; height: 420px; border: 0; border-radius: 34px;
          box-shadow: 0 25px 55px rgba(14,165,233,.14);
        }
        .float {
          position: fixed; right: 22px; bottom: 22px; z-index: 90;
          width: 70px; height: 70px; border-radius: 50%;
          background: #22c55e; color: white; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 22px 50px rgba(34,197,94,.38);
        }
        footer {
          background: #020617; color: #cbd5e1; text-align: center; padding: 34px 20px;
        }

        @media (max-width: 850px) {
          .menu { display: none; }
          .nav { height: 78px; padding: 0 16px; }
          .logo { width: 54px; height: 54px; }
          .brand h2 { font-size: 18px; line-height: 1.1; }
          .brand p { font-size: 14px; }
          .btn { padding: 13px 18px; }
          .hero {
            background-image:
              linear-gradient(90deg, rgba(2,6,23,.90) 0%, rgba(2,6,23,.72) 58%, rgba(2,6,23,.35) 100%),
              url(${fotoHero});
            background-position: center;
          }
          .hero-inner { padding: 70px 18px; }
          .glass { padding: 24px; border-radius: 28px; }
          h1 { font-size: 42px; }
          h2 { font-size: 34px; }
          .lead { font-size: 18px; }
          .grid2, .services, .cards3, .testimonials { grid-template-columns: 1fr; }
          section { padding: 65px 18px; }
          .photo { height: 300px; }
        }
      `}</style>

      <header className="header">
        <div className="nav">
          <div className="brand">
            <div className="logo">RV</div>
            <div>
              <h2>RV PILATES STUDIO</h2>
              <p>Pilates & Fisioterapia</p>
            </div>
          </div>

          <nav className="menu">
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#estrutura">Estrutura</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="btn" href={whatsapp}>Agendar</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <motion.div {...fadeUp} className="glass">
            <div className="tag">
              <Sparkles size={18} /> Studio moderno em Nova Iguaçu
            </div>
            <h1>
              Pilates e fisioterapia com <span className="blue">cuidado, técnica e bem-estar.</span>
            </h1>
            <p className="lead">
              Atendimento humanizado, estrutura climatizada e acompanhamento profissional para você cuidar do corpo com segurança, leveza e resultados.
            </p>
            <a className="btn" href={whatsapp}>
              <MessageCircle size={20} /> Agende sua avaliação
            </a>
          </motion.div>
        </div>
      </section>

      <motion.section id="sobre" className="container grid2" {...fadeUp}>
        <div>
          <p className="section-title">Sobre o studio</p>
          <h2>Um espaço pensado para cuidar de você.</h2>
          <p className="text">
            O Studio Rafaela Vieira é especializado em Pilates e Fisioterapia, localizado no coração de Nova Iguaçu.
          </p>
          <p className="text">
            Nosso compromisso é oferecer saúde, bem-estar e acompanhamento próximo, com atendimento personalizado para cada objetivo.
          </p>
        </div>

        <img className="photo" src={fotoPilates} alt="Studio de pilates em Nova Iguaçu" />
      </motion.section>

      <section id="servicos" className="dark">
        <motion.div className="container" {...fadeUp}>
          <p className="section-title">Serviços</p>
          <h2>Cuidado completo para corpo, postura e qualidade de vida.</h2>

          <div className="services">
            {servicos.map((item) => (
              <motion.div whileHover={{ y: -8 }} className="card" key={item}>
                <CheckCircle size={26} />
                <h3>{item}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container cards3">
        <motion.div className="premium" {...fadeUp}>
          <HeartPulse color="#0ea5e9" size={38} />
          <h3>Fisioterapia</h3>
          <p>Tratamentos ortopédicos e neurológicos com foco em reabilitação, alívio de dor e melhora da mobilidade.</p>
        </motion.div>

        <motion.div className="premium blue-card" {...fadeUp}>
          <Dumbbell size={38} />
          <h3>Pilates</h3>
          <p>Aulas com aparelhos, turmas reduzidas e acompanhamento profissional para força, equilíbrio e postura.</p>
        </motion.div>

        <motion.div className="premium" {...fadeUp}>
          <Sparkles color="#0ea5e9" size={38} />
          <h3>Bem-estar</h3>
          <p>Massagem relaxante, drenagem pós-operatória, liberação miofascial e recursos para relaxamento muscular.</p>
        </motion.div>
      </section>

      <section id="estrutura" className="soft">
        <div className="container grid2">
          <motion.img className="photo" src={fotoBemEstar} alt="Atendimento de bem-estar" {...fadeUp} />

          <motion.div {...fadeUp}>
            <p className="section-title">Diferenciais</p>
            <h2>Estrutura moderna, atendimento próximo e turmas reduzidas.</h2>

            <div className="diff">
              {[
                "Atendimento humanizado e personalizado",
                "Estrutura moderna e climatizada",
                "Turmas reduzidas para melhor acompanhamento",
                "Aulas com fisioterapeuta especializada",
                "Localização privilegiada no Centro de Nova Iguaçu",
              ].map((item) => (
                <div className="diff-item" key={item}>
                  <Star size={20} />
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section className="container" {...fadeUp}>
        <p className="section-title">Depoimentos</p>
        <h2>Quem cuida do corpo, sente a diferença.</h2>

        <div className="testimonials">
          {[
            "Studio acolhedor, atendimento excelente e acompanhamento de perto em cada exercício.",
            "As aulas são leves, bem orientadas e fazem diferença na postura e no bem-estar.",
            "Ambiente moderno, limpo e com atendimento muito atencioso.",
          ].map((txt) => (
            <div className="testimonial" key={txt}>
              <Quote color="#0ea5e9" />
              <p>“{txt}”</p>
              <strong>Aluna RV Pilates Studio</strong>
            </div>
          ))}
        </div>
      </motion.section>

      <section id="contato" className="contact">
        <div className="container grid2">
          <motion.div {...fadeUp}>
            <h2>Pronta para começar seu cuidado?</h2>
            <p className="lead">
              Agende sua avaliação e conheça o RV Pilates Studio.
            </p>
            <a className="btn" style={{ background: "white", color: "#0ea5e9" }} href={whatsapp}>
              <Phone size={20} /> Chamar no WhatsApp
            </a>
          </motion.div>

          <motion.div className="contact-box" {...fadeUp}>
            <div className="contact-line"><Phone /> (21) 96835-4665</div>
            <div className="contact-line"><Instagram /> @rafaelavieirafisio</div>
            <div className="contact-line"><Mail /> studiorvpilates@gmail.com</div>
            <div className="contact-line"><MapPin /> Rua Dr. Thibau, 80, sala 311 — Nova Iguaçu</div>
            <a href={instagram}>Ver Instagram</a>
          </motion.div>
        </div>
      </section>

      <section className="container">
        <motion.div {...fadeUp}>
          <p className="section-title">Como chegar</p>
          <h2>Estamos no Centro de Nova Iguaçu</h2>
          <iframe
            className="map"
            title="Mapa RV Pilates Studio"
            src="https://www.google.com/maps?q=Rua%20Dr.%20Thibau%2080%20sala%20311%20Nova%20Igua%C3%A7u&output=embed"
            loading="lazy"
          />
        </motion.div>
      </section>

      <a className="float" href={whatsapp} aria-label="WhatsApp">
        <MessageCircle size={34} />
      </a>

      <footer>
        RV Pilates Studio • Pilates Nova Iguaçu • Fisioterapia Nova Iguaçu • Studio de Pilates Nova Iguaçu
      </footer>
    </main>
  );
}
