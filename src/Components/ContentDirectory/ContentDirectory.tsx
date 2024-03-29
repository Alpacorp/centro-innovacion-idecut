import { Helmet } from "react-helmet";
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
        <Helmet>
          <title>Directorio Cultural</title>
        </Helmet>
        <div className="container">
          <main>
            <div className="main-content">
              <h2>
                Haz parte del directorio de agentes culturales de Cundinamarca
              </h2>
              <figure>
                <img src={footerDirImg} alt="idecut" />
              </figure>
            </div>
            <div className="categories-content">
              <h2>Selecciona tu área e inscríbete</h2>
              <p style={{ textAlign: "left" }}>
                <strong>Tener en cuenta:</strong> Si usted se inscribió en el
                Directorio Agentes Culturales 2022, este año debe inscribirse de
                nuevo con otro email o ingresando por incógnito y realizar la
                inscripción. Para la convocatoria 2023 se revisarán los
                registros de este año al directorio.
              </p>
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
                <a
                  href="https://es.surveymonkey.com/r/direcpatri"
                  target="blank"
                >
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
                <a href="https://es.surveymonkey.com/r/XQBRSSV" target="blank">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src={artIcon}
                        alt="Icono del directorio de Artesanías"
                      />
                    </div>
                    <div className="card-text">
                      <h3>Artesanías</h3>
                    </div>
                  </div>
                </a>
              </div>
              <p style={{ textAlign: "left" }}>
                <strong>Nota:</strong> turismo cultural, grupos
                afrodescendientes y poblaciones indigenas se pueden inscribir
                por su línea especifica o por patrimonio cultural
              </p>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default ContentDirectory;
