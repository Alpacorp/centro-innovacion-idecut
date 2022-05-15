import { useEffect, useState } from "react";
import {
  arte,
  bibliotecas,
  crea,
  eventos,
  artesanias,
  lectura,
  patrimonio,
  musica,
  teatro,
} from "../assets/images";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./layout.scss";

const Layout = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const textArray = [
    "C",
    "o",
    "r",
    "a",
    "z",
    "o",
    "n",
    "a",
    "r",
    "t",
    "e",
    "",
    "2",
    "0",
    "2",
    "2",
  ];
  const textInvite = [
    "I",
    "n",
    "s",
    "c",
    "r",
    "í",
    "b",
    "e",
    "t",
    "e",
    "",
    "a",
    "q",
    "u",
    "í",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <section className="layout">
        <div className="container">
          <main>
            <div className="main-content">
              <div className="main-content-title">
                <AnimatedLetters
                  strArray={textArray}
                  letterClass={letterClass}
                  idx={1}
                />
              </div>
              <div className="main-content-subtitle">
                <h1>Cundinamarca</h1>
              </div>
              <div className="create">
                <figure>
                  <img src={crea} alt="corazonarte 2022 Cundinamarca Crea" />
                </figure>
              </div>
              <div className="first-text">
                <h2>
                  Estimulos para personas jurídicas, personas naturales y grupos
                  constituidos
                </h2>
              </div>
              <div className="second-text">
                <h2>Más de $1.400 millones</h2>
                <h3>115 estímulos</h3>
              </div>
              <div className="logos">
                <figure>
                  <img src={bibliotecas} alt="balance" />
                </figure>
                <figure>
                  <img src={lectura} alt="lectura" />
                </figure>
                <figure>
                  <img src={patrimonio} alt="manualidades" />
                </figure>
                <figure>
                  <img src={teatro} alt="teatro" />
                </figure>
                <figure>
                  <img src={eventos} alt="eventos" />
                </figure>
                <figure>
                  <img src={arte} alt="arte" />
                </figure>
                <figure>
                  <img src={artesanias} alt="fabricación" />
                </figure>
                <figure>
                  <img src={musica} alt="música" />
                </figure>
              </div>
              <div className="categories">
                <h4>Bibliotecas</h4>
                <h4>Literatura</h4>
                <h4>Patrimonio Cultural</h4>
                <h4>Artes Escénicas</h4>
                <h4>Eventos</h4>
                <h4>Artes plásticas y visuales</h4>
                <h4>Artesanías</h4>
                <h4>Música</h4>
              </div>
            </div>
            <div className="sidebar main-content">
              <div className="main-content-title">
                <AnimatedLetters
                  strArray={textInvite}
                  letterClass={letterClass}
                  idx={1}
                />
              </div>
              <iframe
                className="survey-monkey-form"
                src="https://es.surveymonkey.com/r/22Z3FWL"
                title="Convocatoria"
                frameBorder="0"
              ></iframe>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Layout;
