import "./header.scss";
import { mainLogo, cunLogo, idecutLogo } from "../assets/images";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="main-logo">
            <figure>
              <img src={mainLogo} alt="portafolio departamental de estimulos" />
            </figure>
          </div>
          <div className="complementary-logos">
            <figure>
              <img src={idecutLogo} alt="logo del Idecut" />
            </figure>
            <figure>
              <img
                src={cunLogo}
                alt="logo de Cundinamarca región que progresa"
              />
            </figure>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
