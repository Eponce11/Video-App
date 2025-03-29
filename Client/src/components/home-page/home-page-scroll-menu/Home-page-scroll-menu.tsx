import { HeaderButton } from "../../reusable-components/header-buttons/Header-buttons";
import "./home-page-scroll-menu.css";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import { ScrollMenuContent } from "../../reusable-components/scroll-menu-content/scroll-menu-content";
import { useState } from "react";
import { ScrollMenuContentBlocks } from "../../reusable-components/scroll-menu-content/scroll-menu-content-data";

const ScrollMenu = () => {
  const [index, setIndex] = useState(0);

  interface BoxProps {
    idx: number;
  }

  function Box(props: BoxProps) {
    const { idx } = props;
    return (
      <div
        style={{
          backgroundColor: idx === index ? "#1A73E8" : "rgba(85, 85, 85, 0.25)",
        }}
        className="home-page-scroll-menu__page-inicator-style"
      ></div>
    );
  }

  const changeScrollMenuContentBack = () => {
    index === 0 ? setIndex(7) : setIndex(index - 1);
  };

  const changeScrollMenuContentFwd = () => {
    index === 7 ? setIndex(0) : setIndex(index + 1);
  };

  return (
    <div>
      <div className="home-page-scroll-menu__content-wrap">
        <section>
          <HeaderButton
            onClick={changeScrollMenuContentBack}
            icon={<RiArrowDropLeftLine size={"30px"} />}
          />
        </section>

        <section className="home-page-scroll-menu__content">
          <ScrollMenuContent i={index} />
          <button className="scroll-menu-button__button">Start trial</button>
        </section>

        <section>
          <HeaderButton
            onClick={changeScrollMenuContentFwd}
            icon={<RiArrowDropRightLine size={"30px"} />}
          />
        </section>
      </div>
      <div className="home-page-scroll-menu__page-indicator">
        {ScrollMenuContentBlocks.map((_, idx) => (
          <Box idx={idx} key={idx} />
        ))}
      </div>
    </div>
  );
};
export default ScrollMenu;
