import { logoIdecut } from "../assets/images";
import "./headerDirectory.scss";

const HeaderDirectory = () => {
  return (
    <>
      <header className="header-directory">
        <div className="container">
          <div className="main-logo">
            <figure>
              <img
                src={logoIdecut}
                alt="Instituto Departamental de Cultura y Turismo"
              />
            </figure>
          </div>
          <div className="complementary-content">
            <h1>Directorio</h1>
            <h2>Agentes Culturales</h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderDirectory;
