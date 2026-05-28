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

    const metas = {
      description:
        "RV Pilates Studio em Nova Iguaçu: pilates com aparelhos, fisioterapia ortopédica e neurológica, massagem relaxante, drenagem linfática, liberação miofascial e atendimento humanizado.",
      keywords:
        "pilates Nova Iguaçu, fisioterapia Nova Iguaçu, studio de pilates Nova Iguaçu, RV Pilates Studio, Rafaela Vieira Fisio",
      robots: "index, follow",
    };

    Object.entries(metas).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });
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

  const diferenciais = [
    "Atendimento humanizado e personalizado",
    "Estrutura moderna e climatizada",
    "Turmas reduzidas para melhor acompanhamento",
    "Aulas com fisioterapeuta especializada",
    "Wi-Fi, banheiro, vestiário e estacionamento",
    "Localização privilegiada no Centro de Nova Iguaçu",
  ];

  return (
    <main className="site">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, sans-serif; background: white; color: #0f172a; }
        .site { overflow-x: hidden; }
        .header {
          position: fixed; top: 0; width: 100%; z-index: 50;
          background: rgba(255,255,255,.94); backdrop-filter: blur(14px);
          border-bottom: 1px solid #dbeafe;
        }
        .container { max-width: 1180px; margin: auto; padding: 0 22px; }
        .nav { height: 82px; display: flex; align-items: center; justify-content: space-between; gap: 18px; }
        .brand { display: flex; align-items: center; gap: 14px; min-width: 0; }
        .rvbox {
          width: 70px; height: 56px; border-radius: 20px; background: #0ea5e9;
          color: white; display: flex; align-items: center; justify-content: center;
          font-weight: 900; font-size: 24px; box-shadow: 0 15px 35px rgba(14,165,233,.25);
        }
        .brand h2 { margin: 0; color: #0ea5e9; font-size: 22px; letter-spacing: .5px; }
        .brand p { margin: 3px 0 0; color: #64748b; }
        .menu { display: flex; gap: 26px; font-weight: 600; }
        .menu a { color: #334155; text-decoration: none; }
        .btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: #0ea5e9; color: white; padding: 15px 24px;
          border-radius: 999px; text-decoration: none; font-weight: 800;
          box-shadow: 0 16px 35px rgba(14,165,233,.28);
        }
        .hero {
          padding-top: 120px; background: linear-gradient(135deg,#fff,#f0f9ff,#fff);
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: ""; position: absolute; right: -120px; top: 80px;
          width: 340px; height: 340px; background: #bae6fd; border-radius: 50%; filter: blur(70px);
        }
        .hero-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 50px;
          align-items: center; padding: 70px 22px 95px;
        }
        .tag {
          display: inline-flex; align-items: center; gap: 8px;
          background: white; color: #0369a1; border: 1px solid #bae6fd;
          padding: 10px 16px; border-radius: 999px; font-weight: 700;
          box-shadow: 0 10px 25px rgba(14,165,233,.08);
        }
        h1 { font-size: 58px; line-height: 1.05; margin: 25px 0; letter-spacing: -2px; }
        .lead { font-size: 19px; line-height: 1.8; color: #475569; max-width: 570px; }
        .hero-card {
          position: relative; padding: 12px; background: white; border-radius: 34px;
          border: 1px solid #dbeafe; box-shadow: 0 30px 70px rgba(14,165,233,.16);
        }
        .hero-card img { width: 100%; height: 540px; object-fit: cover; border-radius: 26px; display: block; }
        .mini-card {
          position: absolute; left: 35px; bottom: -28px; background: white;
          padding: 22px 28px; border-radius: 28px; box-shadow: 0 20px 45px rgba(15,23,42,.18);
        }
        .mini-card strong { display: block; font-size: 38px; color: #0ea5e9; }
        section { padding: 85px 0; }
        .section-title { color: #0ea5e9; text-transform: uppercase; letter-spacing: 4px; font-weight: 900; font-size: 14px; }
        h2 { font-size: 44px; line-height: 1.12; margin: 12px 0 28px; }
        .about-grid, .estrutura-grid, .contato-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 45px; align-items: center; }
        .text { font-size: 18px; line-height: 1.8; color: #475569; }
        .dark { background: #020617; color: white; }
        .dark h2 { color: white; }
        .services { display: grid; grid-template-columns: repeat(4,1fr); gap: 18px; margin-top: 35px; }
        .service-card {
          border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.06);
          padding: 26px; border-radius: 28px;
        }
        .service-card svg { color: #7dd3fc; margin-bottom: 14px; }
        .cards3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
        .info-card {
          padding: 32px; border-radius: 32px; background: #f0f9ff;
          box-shadow: 0 20px 40px rgba(14,165,233,.08);
        }
        .info-card.blue { background: #0ea5e9; color: white; }
        .info-card p { line-height: 1.7; color: #475569; }
        .info-card.blue p { color: #e0f2fe; }
        .soft { background: #f0f9ff; }
        .photo-stack { display: grid; gap: 20px; }
        .photo-stack img { width: 100%; height: 330px; object-fit: cover; border-radius: 32px; box-shadow: 0 25px 55px rgba(15,23,42,.15); }
        .diff { display: grid; gap: 14px; }
        .diff-item {
          display: flex; gap: 12px; align-items: flex-start;
          background: white; padding: 18px; border-radius: 22px;
          box-shadow: 0 12px 25px rgba(14,165,233,.08);
        }
        .diff-item svg { color: #0ea5e9; flex: none; margin-top: 2px; }
        .testimonials { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
        .testimonial {
          background: white; border: 1px solid #dbeafe; padding: 28px;
          border-radius: 30px; box-shadow: 0 20px 45px rgba(14,165,233,.08);
        }
        .testimonial svg { color: #0ea5e9; }
        .contact-box {
          background: white; color: #0f172a; padding: 34px;
          border-radius: 34px; box-shadow: 0 30px 70px rgba(15,23,42,.18);
        }
        .contact-line { display: flex; gap: 12px; align-items: center; margin: 18px 0; }
        .contact-line svg { color: #0ea5e9; }
        .map { width: 100%; height: 420px; border: 0; border-radius: 34px; box-shadow: 0 25px 55px rgba(14,165,233,.12); }
        .float {
          position: fixed; right: 20px; bottom: 20px; width: 68px; height: 68px;
          border-radius: 50%; background: #22c55e; color: white; display: flex;
          align-items: center; justify-content: center; z-index: 80;
          box-shadow: 0 20px 45px rgba(34,197,94,.35);
        }
        footer { background: #020617; color: #cbd5e1; text-align: center; padding: 34px 20px; }

        @media (max-width: 850px) {
          .menu { display: none; }
          .nav { height: 76px; }
          .brand h2 { font-size: 18px; }
          .brand p { font-size: 14px; }
          .rvbox { width: 56px; height: 50px; font-size: 18px; }
          .btn { padding: 13px 18px; }
          .hero-grid, .about-grid, .estrutura-grid, .contato-grid { grid-template-columns: 1fr; }
          h1 { font-size: 44px; }
          h2 { font-size: 34px; }
          .hero-card img { height: 430px; }
          .services, .cards3, .testimonials { grid-template-columns: 1fr; }
          section { padding: 65px 0; }
        }
      `}</style>

      <header className="header">
        <div className="container nav">
          <div className="brand">
            <div className="rvbox">RV</div>
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
        <div className="container hero-grid">
          <motion.div {...fadeUp}>
            <div className="tag">
              <Sparkles size={17} /> Studio moderno em Nova Iguaçu
            </div>
            <h1>Pilates e fisioterapia com cuidado, técnica e bem-estar.</h1>
            <p className="lead">
              Atendimento humanizado, estrutura climatizada e acompanhamento profissional para você cuidar do corpo com segurança, leveza e resultado.
            </p>
            <br />
            <a className="btn" href={whatsapp}>
              <MessageCircle size={20} /> Agende sua avaliação
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hero-card"
          >
            <img src={fotoHero} alt="Pilates em Nova Iguaçu" />
            <div className="mini-card">
              <strong>50min</strong>
              <span>de cuidado, movimento e prevenção</span>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section id="sobre" className="container about-grid" {...fadeUp}>
        <div>
          <p className="section-title">Sobre o studio</p>
          <h2>Um espaço pensado para cuidar de você.</h2>
        </div>
        <div className="text">
          <p>
            O Studio Rafaela Vieira é especializado em Pilates e Fisioterapia, localizado no coração de Nova Iguaçu.
          </p>
          <p>
            Nosso compromisso é oferecer saúde, bem-estar e acompanhamento próximo, com atendimento personalizado para cada objetivo.
          </p>
        </div>
      </motion.section>

      <section id="servicos" className="dark">
        <motion.div className="container" {...fadeUp}>
          <p className="section-title">Serviços</p>
          <h2>Cuidado completo para corpo, postura e qualidade de vida.</h2>

          <div className="services">
            {servicos.map((item) => (
              <motion.div whileHover={{ y: -8 }} className="service-card" key={item}>
                <CheckCircle size={26} />
                <h3>{item}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="container cards3">
        <motion.div className="info-card" {...fadeUp}>
          <HeartPulse color="#0ea5e9" size={38} />
          <h3>Fisioterapia</h3>
          <p>Tratamentos ortopédicos e neurológicos com foco em reabilitação, alívio de dor e melhora da mobilidade.</p>
        </motion.div>

        <motion.div className="info-card blue" {...fadeUp}>
          <Dumbbell size={38} />
          <h3>Pilates</h3>
          <p>Aulas com aparelhos, turmas reduzidas e acompanhamento profissional para força, equilíbrio e postura.</p>
        </motion.div>

        <motion.div className="info-card" {...fadeUp}>
          <Sparkles color="#0ea5e9" size={38} />
          <h3>Bem-estar</h3>
          <p>Massagem relaxante, drenagem pós-operatória, liberação miofascial e recursos para relaxamento muscular.</p>
        </motion.div>
      </section>

      <section id="estrutura" className="soft">
        <div className="container estrutura-grid">
          <motion.div className="photo-stack" {...fadeUp}>
            <img src={fotoPilates} alt="Aula de pilates com aparelhos" />
            <img src={fotoBemEstar} alt="Atendimento de bem-estar" />
          </motion.div>

          <motion.div {...fadeUp}>
            <p className="section-title">Diferenciais</p>
            <h2>Estrutura moderna, atendimento próximo e turmas reduzidas.</h2>

            <div className="diff">
              {diferenciais.map((item) => (
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
              <Quote />
              <p>“{txt}”</p>
              <strong>Aluna RV Pilates Studio</strong>
            </div>
          ))}
        </div>
      </motion.section>

      <section id="contato" style={{ background: "linear-gradient(135deg,#0ea5e9,#06b6d4)", color: "white" }}>
        <div className="container contato-grid">
          <motion.div {...fadeUp}>
            <h2>Pronta para começar seu cuidado?</h2>
            <p className="lead" style={{ color: "#e0f2fe" }}>
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
        <MessageCircle size={32} />
      </a>

      <footer>
        RV Pilates Studio • Pilates Nova Iguaçu • Fisioterapia Nova Iguaçu • Studio de Pilates Nova Iguaçu
      </footer>
    </main>
  );
}
