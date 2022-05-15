import "./footer.scss";

const Footer = () => {
  const getCurrentYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            Todos los derechos reservados IDECUT - Corazonarte{" "}
            <span className="emoji">♥️</span> | {getCurrentYear()}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
