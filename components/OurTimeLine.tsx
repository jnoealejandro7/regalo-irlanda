"use client";

import { useState } from "react";

type TimeLineMemory = {
    date: string;
    title: string;
    description: string;
    symbol: string;
    image?: string;
};

const moments: TimeLineMemory[] = [
    {
        date: "20 OCTUBRE 2025",
        title: "El comienzo de nosotros",
        description:
            "Ese día comenzó una historia que hoy significa muchísimo para mí. Talvez no fue como lo tuviera planeado, pero estoy agradecido de que haya sido asi.",
        symbol: "♡",
        image: "/fotos/foto-10.jpg",
    },
    {
        date: "UN RECUERDO ESPECIAL",
        title: "Un recuerdo bonito a tu lado",
        description:
            "Uno de esos momentos que me recuerdan lo feliz que me hace compartir mi tiempo contigo.",
        symbol: "✧",
        image: "/fotos/foto-07.jpg",
    },
    {
        date: "NUESTRO DÍA A DÍA",
        title: "Las pequeñas cosas",
        description:
            "Las conversaciones, las risas, los abrazos y esos detalles sencillos que terminan convirtiéndose en mis recuerdos favoritos.",
        symbol: "♥",
        image: "/fotos/foto-04.jpg",
    },
    {
        date: "20 OCTUBRE 2026",
        title: "Nuestro primer aniversario",
        description:
            "Un año juntos. Gracias por formar parte de mi vida y por aguantarme tanto, Irlanda. Quiero seguir construyendo recuerdos bonitos a tu lado.",
        symbol: "∞",
        image: "/fotos/foto-06.jpg",
    },
];

export default function OurTimeLine() {
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <section className="timeline-section" id="nuestra-historia">
            <header className="timeline-heading">
                <p className="timeline-kicker">
                    CAPÍTULO UNO · NUESTRA HISTORIA
                </p>

                <h2>
                    Cada momento
                    <br />
                    nos trajo hasta aquí<span>.</span>
                </h2>

                <p>
                    Si pudiera guardar un año en una cajita,
                    guardaría cada instante que he vivido contigo.
                </p>
            </header>

            <div className="timeline">
                {moments.map((moment, index) => {
                    const isExpanded = expanded === index;

                    return (
                        <article
                            key={`${moment.date}-${moment.title}`}
                            className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"
                                } ${isExpanded ? "timeline-active" : ""}`}
                        >
                            <div className="timeline-marker" aria-hidden="true">
                                {moment.symbol}
                            </div>

                            <button
                                type="button"
                                className="timeline-card"
                                onClick={() =>
                                    setExpanded(isExpanded ? null : index)
                                }
                                aria-expanded={isExpanded}
                            >
                                <span className="timeline-date">{moment.date}</span>

                                <span className="timeline-title">
                                    {moment.title}
                                </span>

                                <span className="timeline-toggle">
                                    {isExpanded ? "−" : "+"}
                                </span>

                                {isExpanded && (
                                    <span className="timeline-details">
                                        {moment.image && (
                                            <span className="timeline-image-wrap">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={moment.image}
                                                    alt={moment.title}
                                                    className="timeline-image"
                                                    loading="lazy"
                                                />
                                            </span>
                                        )}

                                        <span className="timeline-description">
                                            {moment.description}
                                        </span>

                                        <span className="timeline-signature">
                                            Un recuerdo nuestro ♡
                                        </span>
                                    </span>
                                )}
                            </button>
                        </article>
                    )
                })}
            </div>

            <div className="timeline-ending">
                <span className="timeline-ending-heart">♥</span>

                <p>Y esto apenas comienza...</p>

                <span className="timeline-ending-subtitle">
                    CON AMOR, PARA IRLANDA
                </span>
            </div>
        </section>
    )
}