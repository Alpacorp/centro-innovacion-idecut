import ContentDirectory from "../../Components/ContentDirectory/ContentDirectory";
// import FooterDirectory from "../../Components/Footer/FooterDirectory";
import HeaderDirectory from "../../Components/HeaderDirectory/HeaderDirectory";
import "./directory.scss";

const Directory = () => {
  return (
    <div className="directory-main">
      <HeaderDirectory />
      <ContentDirectory />
      {/* <FooterDirectory /> */}
    </div>
  );
};

export default Directory;
