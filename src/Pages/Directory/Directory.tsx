import ContentDirectory from "../../Components/ContentDirectory/ContentDirectory";
import HeaderDirectory from "../../Components/HeaderDirectory/HeaderDirectory";
import "./directory.scss";

const Directory = () => {
  return (
    <div className="directory-main">
      <HeaderDirectory />
      <ContentDirectory />
    </div>
  );
};

export default Directory;
