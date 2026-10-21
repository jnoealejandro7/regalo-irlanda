
"use client";

import { useEffect, useState } from "react";

type Memory = {
    id: number;
    src: string;
    date: string;
    title: string;
    note: string;
    rotation: string;
};

const memories: Memory[] = [
    {
        id: 1,
        src: "/fotos/foto-02.jpg",
        date: "Un día para recordar",
        title: "Tú y yo ♡",
        note: "Un recuerdo que siempre quiero guardar.",
        rotation: "-2deg",
    },
    {
        id: 2,
        src: "/fotos/foto-08.jpg",
        date: "Uno de nuestros momentos",
        title: "Mi lugar favorito",
        note: "Lo bonito de cualquier lugar es compartirlo contigo.",
        rotation: "2deg",
    },
    {
        id: 3,
        src: "/fotos/foto-09.jpg",
        date: "Un recuerdo especial",
        title: "Nuestra historia",
        note: "Y todavía nos quedan muchos momentos por vivir.",
        rotation: "-1deg",
    },
];

export default function PhotoGallery() {
    const [selected, setSelected] = useState<Memory | null>(null);

    useEffect(() => {
        if (!selected) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setSelected(null);
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selected]);

    return (
        <section className="gallery-section" id="fotos">
            <div className="gallery-heading">
                <p className="gallery-kicker">
                    <span>♡</span> PEQUEÑOS INSTANTES, GRANDES RECUERDOS
                </p>

                <h2>Nuestra historia en fotos</h2>

                <p className="gallery-description">
                    Algunos de mis momentos favoritos son aquellos
                    en los que simplemente estoy contigo.
                </p>

                <div className="gallery-divider">
                    <span />
                    <span>♥</span>
                    <span />
                </div>
            </div>

            <div className="photo-grid">
                {memories.map((memory, index) => (
                    <button
                        type="button"
                        key={memory.id}
                        className={`photo-card photo-card-${index + 1}`}
                        style={
                            {
                                "--photo-rotation": memory.rotation,
                                "--photo-index": index,
                            } as React.CSSProperties
                        }
                        onClick={() => setSelected(memory)}
                        aria-label={`Ver foto: ${memory.title}`}
                    >
                        <span className="photo-paper">
                            <span className="photo-image-wrap">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={memory.src}
                                    alt={memory.title}
                                    className="photo-image"
                                    loading="lazy"
                                />
                                <span className="photo-overlay">
                                    <span className="zoom-icon">↗</span>
                                    Ver recuerdo
                                </span>
                            </span>

                            <span className="photo-caption">
                                <span className="photo-title">{memory.title}</span>
                                <span className="photo-date">{memory.date}</span>
                            </span>
                        </span>

                        <span className="photo-heart" aria-hidden="true">
                            ♡
                        </span>
                    </button>
                ))}
            </div>

            <p className="gallery-footer">
                <span>♡</span> Cada foto guarda un pedacito de nosotros.
            </p>

            {selected && (
                <div
                    className="photo-lightbox"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selected.title}
                    onClick={() => setSelected(null)}
                >
                    <button
                        type="button"
                        className="lightbox-close"
                        onClick={() => setSelected(null)}
                        aria-label="Cerrar fotografía"
                    >
                        ×
                    </button>

                    <div
                        className="lightbox-content"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={selected.src}
                            alt={selected.title}
                            className="lightbox-image"
                        />

                        <div className="lightbox-caption">
                            <p className="lightbox-date">{selected.date}</p>
                            <h3>{selected.title}</h3>
                            <p>{selected.note}</p>
                            <span>Con amor, Noé ♡</span>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
