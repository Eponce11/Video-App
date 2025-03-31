import "./home-page-header.css";
import { SiGooglemeet } from "react-icons/si";
import { VscReport } from "react-icons/vsc";
import { IoSettings } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CgLayoutGridSmall } from "react-icons/cg";
import { GoQuestion } from "react-icons/go";
import { Clock } from "../../reusable-components/clock/clock";
import { HeaderButton } from "../../reusable-components/header-buttons/Header-buttons";

const HomePageHeader = () => {
  return (
    <header className="home-page-header__container">
      <div>
        <a href="#" className="home-page-header__googlemeet">
          <div className="home-page-header__camera">
            <SiGooglemeet color="#2684FC" />
          </div>
          <div className="home-page-header__googlemeet-text">Google Meet</div>
        </a>
      </div>

      <div className="home-page-header__toolbar">
        <div>
          <Clock />
        </div>
        <HeaderButton
          href="https://support.google.com/meet/?hl=en#topic=14074839"
          icon={<GoQuestion size={"24px"} strokeWidth={0.7} />}
        />
        <HeaderButton
          href="https://support.google.com/websearch/answer/6223687?hl=en&co=GENIE.Platform%3DAndroid"
          icon={<VscReport size={"24px"} strokeWidth={0.3} />}
        />
        <HeaderButton
          href="https://support.google.com/accounts/answer/3118621?hl=en"
          icon={<IoSettings size={"24px"} />}
        />
        <HeaderButton
          icon={<CgLayoutGridSmall size={"30px"} strokeWidth={0.7} />}
        />
        <HeaderButton
          href="https://myaccount.google.com/"
          icon={<IoPersonCircleOutline size={"24px"} strokeWidth={10} />}
        />
      </div>
    </header>
  );
};

export default HomePageHeader;
