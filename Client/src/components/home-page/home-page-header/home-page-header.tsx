import "./home-page-header.css";
import { SiGooglemeet } from "react-icons/si";
import { IconButton } from "../../reusable-components/icon-button/Icon-Button";
import { VscReport } from "react-icons/vsc";
import { IoSettings } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CgLayoutGridSmall } from "react-icons/cg";
import { GoQuestion } from "react-icons/go";

const HomePageHeader = () => {
  return (
    <header className="home-page-header__container">
      <div>
        <a href="#" className="home-page-header__googlemeet">
          <div className="home-page-header__camera">
            <SiGooglemeet />
          </div>
          <div className="home-page-header__googlemeet-text">Google Meet</div>
        </a>
      </div>

      <div className="home-page-header__toolbar">
        <time>10:47</time>
        <IconButton icon={<GoQuestion />} />
        <IconButton icon={<VscReport />} />
        <IconButton icon={<IoSettings />} />
        <IconButton icon={<CgLayoutGridSmall />} />
        <IconButton icon={<IoPersonCircleOutline />} />
      </div>
    </header>
  );
};

export default HomePageHeader;
