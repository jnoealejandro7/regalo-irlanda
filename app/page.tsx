"use client";

import { useState } from "react";
import PhotoGallery from "@/components/PhotoGallery";
import OurTimeLine from "@/components/OurTimeLine";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  const scrollToLetter = () => {
    setShowMessage(true);

    setTimeout(() => {
      document.getElementById("Carta")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }

  return (
    <main className="anniversary-page">
      <div className="stars" aria-hidden="true" />
      <div className="glow glow-one" aria-hidden="true" />
      <div className="glow glow-two" aria-hidden="true" />

      <nav className="topbar">
        <a href="#" className="brand">
          <span className="brand-heart">♡</span>
          <span>NOÉ <span className="muted">&</span> IRLANDA</span>
        </a>

        <span className="nav-date">20 · 10 · 2026</span>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            NUESTRO PRIMER ANIVERSARIO
            <span className="eyebrow-line" />
          </div>

          <div className="floating-heart heart-one">♡</div>
          <div className="floating-heart heart-two">♥</div>
          <div className="floating-heart heart-three">♡</div>

          <p className="small-intro">Para mi persona favorita</p>

          <h1 className="hero-title">
            <span className="name-line">Noé Alejandro</span>
            <span className="ampersand">&</span>
            <span className="name-line">Irlanda Marisol</span>
          </h1>

          <div className="title-decoration">
            <span />
            <span className="decoratio-heart">♥</span>
            <span />
          </div>

          <p className="hero-description">
            Hay historias bonitas, y luego está la nuestra.
            <br className="desktop-break" />
            Este pequeño rincón es solo para ti.
          </p>

          <div className="anniversary-date">
            <span>20</span>
            <i />
            <span>10</span>
            <i />
            <span>2026</span>
          </div>

          <button
            className="gift-button"
            onClick={scrollToLetter}
          >
            <span>Descubre tu regalo</span>
            <span className="button-heart">♡</span>
          </button>

          <p className="button-caption">
            HECHOR CON AMOR, POR NOÉ
          </p>
        </div>

        <button
          className="scroll-indicator"
          onClick={() =>
            document.getElementById("carta")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          aria-label="Desplazarse hacia bajo"
        >
          <span>DESLIZA PARA DESCUBRIR</span>
          <span className="scroll-arrow">↓</span>
        </button>

        <div className="side-note side-left">
          UNA HISTORIA · DOS CORAZONES
        </div>

        <div className="side-note side-right">
          SIEMPRE TÚ
        </div>
      </section>

      <section className="letter-section" id="carta">
        <div className="section-heading">
          <p className="section-kicker">UN PEDACITO DE MI CORAZÓN</p>
          <h2>Una carta para ti</h2>
          <p>
            Hay cosas que quiero decirte hoy y guardar contigo para siempre.
          </p>
        </div>

        <div className={`letter-card ${showMessage ? "letter-open" : ""}`}>
          <div className="letter-top-heart">♡</div>

          <p className="letter-greeting">Mi querida Irlanda Marisol,</p>

          <div className="letter-body">
            <p>
              Si estás leyendo esto, quiero que sepas que hice este pequeño lugar pensando en ti.
            </p>

            <p>
              Gracias por formar parte de mi vida, por cada sonrisa, cada momento juntos y todas esas pequeñas cosas que hacen que estar contigo
              sea tan especial.
            </p>

            <p>
              Estoy tan feliz de haber pasado todo este año junto a ti, de todo lo que hemos vivido y de todo lo que nos queda
              por vivir juntos.
            </p>

            <p>
              Espero te guste tu regalito que le dedique un tiempo para que fuera especial y lo tuvieras para toda la vida,
              para que recuerdes que desde el primer año juntos ya sabíamos que ibamos a estar juntos toda la vida.
            </p>

            <p>
              Este es nuestro primer aniversario, pero espero que sea solamente el primero de muchos.
            </p>

            <p className="letter-closing">
              Te amo muchísimo. Hoy y siempre.
            </p>
          </div>

          <div className="letter-signature">
            Con todo mi amor,
            <span>Noé Alejandro ♡</span>
          </div>

          <p className="letter-footnote">
            20 DE OCTUBRE DE 2026 · NUESTRO PRIMER AÑO
          </p>
        </div>

        <p className="letter-bottom">
          <span>♡</span> Un regalo hecho especialmente para ti.
        </p>
      </section>

      <PhotoGallery />

      <OurTimeLine />

      <footer className="footer">
        <span>NOÉ ALEJANDRO <span className="muted">&</span> IRLANDA MARISOL</span>
        <span className="footer-heart">♥</span>
        <span>20 · 10 · 2026</span>
      </footer>
    </main >
  );
}