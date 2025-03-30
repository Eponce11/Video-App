import { ScrollMenuContentBlocks } from "./scroll-menu-content-data";
import "./scroll-menu-content.css";
import { motion } from "motion/react";

interface ScrollMenuProps {
  i: number;
  direction: boolean;
}

export const ScrollMenuContent = (props: ScrollMenuProps) => {
  const { i, direction } = props;

  const ScrollMenuContentToRender = ScrollMenuContentBlocks[i];
  return (
    <div>
      <div>
        <div>
          <img
            src={ScrollMenuContentToRender.img}
            className="home-page-scroll__menu-img1"
          />
          <motion.div
            key={i}
            initial={direction ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 100 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2 className="home-page-scroll-menu__h2">
              {ScrollMenuContentToRender.head2}
            </h2>
            <h3 className="home-page-scroll-menu__h3">
              {ScrollMenuContentToRender.head3}
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
