import React from "react";

export default function App() {
  const whatsapp = "https://wa.me/5521968354665";
  const instagram = "https://www.instagram.com/rafaelavieirafisio";

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#fff", color: "#0f172a" }}>
      <header style={{ padding: 20, position: "sticky", top: 0, background: "white", zIndex: 10, boxShadow: "0 2px 10px #ddd" }}>
        <h2 style={{ color: "#0ea5e9", margin: 0 }}>RV Pilates Studio</h2>
        <p style={{ margin: 0 }}>Pilates & Fisioterapia</p>
      </header>

      <section style={{ padding: 30 }}>
        <h1 style={{ fontSize: 38 }}>Pilates e fisioterapia em Nova Iguaçu</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6 }}>
          Atendimento humanizado, estrutura moderna e acompanhamento profissional para cuidar do corpo com segurança, leveza e bem-estar.
        </p>
        <a href={whatsapp} style={{ background: "#0ea5e9", color: "white", padding: "14px 22px", borderRadius: 30, textDecoration: "none", fontWeight: "bold" }}>
          Agendar avaliação
        </a>
      </section>

      <section style={{ padding: 30, background: "#e0f2fe" }}>
        <h2>Serviços</h2>
        <ul style={{ lineHeight: 2, fontSize: 17 }}>
          <li>Pilates com aparelhos</li>
          <li>Fisioterapia ortopédica e neurológica</li>
          <li>Massagem relaxante</li>
          <li>Drenagem linfática pós-operatória</li>
          <li>Liberação miofascial</li>
          <li>Kinesio tape</li>
        </ul>
      </section>

      <section style={{ padding: 30 }}>
        <h2>Diferenciais</h2>
        <p>Atendimento personalizado, turmas reduzidas, ambiente climatizado e localização privilegiada no Centro de Nova Iguaçu.</p>
      </section>

      <section style={{ padding: 30, background: "#f8fafc" }}>
        <h2>Contato</h2>
        <p><strong>WhatsApp:</strong> (21) 96835-4665</p>
        <p><strong>Instagram:</strong> @rafaelavieirafisio</p>
        <p><strong>E-mail:</strong> studiorvpilates@gmail.com</p>
        <p><strong>Endereço:</strong> Rua Dr. Thibau, 80, sala 311 — Nova Iguaçu</p>
        <a href={instagram}>Ver Instagram</a>
      </section>

      <section style={{ padding: 30 }}>
        <h2>Como chegar</h2>
        <iframe
          title="Mapa RV Pilates Studio"
          src="https://www.google.com/maps?q=Rua%20Dr.%20Thibau%2080%20sala%20311%20Nova%20Igua%C3%A7u&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: 20 }}
          loading="lazy"
        />
      </section>

      <a
        href={whatsapp}
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          background: "#22c55e",
          color: "white",
          padding: "16px 18px",
          borderRadius: "50%",
          textDecoration: "none",
          fontWeight: "bold",
          boxShadow: "0 4px 20px #999"
        }}
      >
        💬
      </a>

      <footer style={{ padding: 25, background: "#0f172a", color: "white", textAlign: "center" }}>
        RV Pilates Studio • Pilates Nova Iguaçu • Fisioterapia Nova Iguaçu
      </footer>
    </main>
  );
}
