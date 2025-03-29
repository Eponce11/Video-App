import { ScrollMenuContentBlocks } from "./scroll-menu-content-data";
import "./scroll-menu-content.css";

interface ScrollMenuProps {
  i: number;
}

export const ScrollMenuContent = (props: ScrollMenuProps) => {
  const { i } = props;
  const ScrollMenuContentToRender = ScrollMenuContentBlocks.slice(i, i + 1);
  return (
    <div>
      <div>
        {ScrollMenuContentToRender.map((ScrollMenuContentBlock) => (
          <div>
            <img
              src={ScrollMenuContentBlock.img}
              className="home-page-scroll__menu-img1"
            />
            <h2 className="home-page-scroll-menu__h2">
              {ScrollMenuContentBlock.head2}
            </h2>
            <h3 className="home-page-scroll-menu__h3">
              {ScrollMenuContentBlock.head3}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
