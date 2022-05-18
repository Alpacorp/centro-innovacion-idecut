import { Link } from "react-router-dom";
import {
  artIcon,
  culturalIcon,
  heritageIcon,
  libraryIcon,
  mediaIcon,
  museumIcon,
  theaterIcon,
  footerDirImg,
} from "../assets/images";
import "./contentDirectory.scss";

const ContentDirectory = () => {
  return (
    <>
      <section className="content-directory">
        <div className="container">
          <main>
            <div className="main-content">
              <h2>
                Haz parte del directorio de agentes culturales de Cundinamarca
              </h2>
              <h3>
                Ingresa y regístrate en{" "}
                <Link to="/corazonarte">Corazonarte</Link>
                <span className="emoji"> ♥️</span>
              </h3>
              <figure>
                <img src={footerDirImg} alt="idecut" />
              </figure>
            </div>
            <div className="categories-content">
              <h2>Selecciona tu área e inscríbete</h2>
              <div className="cards">
                <a href="https://es.surveymonkey.com/r/MVWL9S3" target="blank">
                  <div className="card">
                    <div className="card-image">
                      <img src={artIcon} alt="Icono del directorio de artes" />
                    </div>
                    <div className="card-text">
                      <h3>Artes</h3>
                    </div>
                  </div>
                </a>
                <a href="https://es.surveymonkey.com/r/6D3Z3KW" target="blank">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src={libraryIcon}
                        alt="Icono del directorio de bibliotecas"
                      />
                    </div>
                    <div className="card-text">
                      <h3>Bibliotecas</h3>
                    </div>
                  </div>
                </a>
                <a href="https://es.surveymonkey.com/r/PDHDMP2" target="blank">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src={culturalIcon}
                        alt="Icono del directorio de Gestión cultural"
                      />
                    </div>
                    <div className="card-text">
                      <h3>Gestión Cultural</h3>
                    </div>
                  </div>
                </a>
                <a href="https://es.surveymonkey.com/r/PCJZ3JF" target="blank">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src={theaterIcon}
                        alt="Icono del directorio de Industrias Creativas"
                      />
                    </div>
                    <div className="card-text">
                      <h3>
                        Industrias creativas
                        <wbr /> y culturales
                      </h3>
                    </div>
                  </div>
                </a>
                <a href="https://es.surveymonkey.com/r/6CS786H" target="blank">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src={mediaIcon}
                        alt="Icono del directorio de Medios de Comunicación"
                      />
                    </div>
                    <div className="card-text">
                      <h3>Medios de Comunicación</h3>
                    </div>
                  </div>
                </a>
                <a href="https://es.surveymonkey.com/r/6CMKMK6" target="blank">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src={museumIcon}
                        alt="Icono del directorio de Medios de Comunicación"
                      />
                    </div>
                    <div className="card-text">
                      <h3>Museos</h3>
                    </div>
                  </div>
                </a>
                <a href="https://es.surveymonkey.com/r/6WNVDLN" target="blank">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src={heritageIcon}
                        alt="Icono del directorio de Medios de Comunicación"
                      />
                    </div>
                    <div className="card-text">
                      <h3>Patrimonio</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default ContentDirectory;
