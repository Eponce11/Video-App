import Meeting_Block from "../../components/home-page/meeting-block/Meeting-Block";
import HomePageHeader from "../../components/home-page/home-page-header/Home-page-header";
import ScrollMenu from "../../components/home-page/home-page-scroll-menu/Home-page-scroll-menu";
import "./home.css";
const Home = () => {
  return (
    <div className="home__container">
      <header className="home__header">
        <HomePageHeader />
      </header>

      <article className="home__blocks-container">
        <section className="home__meetingblock">
          <Meeting_Block />
        </section>

        <section className="home__scrollmenublock">
          <ScrollMenu />
        </section>
      </article>
    </div>
  );
};

export default Home;
