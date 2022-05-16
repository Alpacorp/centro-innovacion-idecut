import { footerDirImg } from "../assets/images";
import "./footerDirectory.scss";

const FooterDirectory = () => {
  return (
    <>
      <footer className="footer-directory">
        <div className="container">
          <div className="main-logo">
            <figure>
              <img
                src={footerDirImg}
                alt="Instituto Departamental de Cultura y Turismo"
              />
            </figure>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterDirectory;
