import Meeting_Block from "../../components/home-page/meeting-block/Meeting-Block";
import HomePageHeader from "../../components/home-page/home-page-header/home-page-header";
import "./home.css";
const Home = () => {
  return (
    <div className="home__container">
      <header className="home__header">
        <HomePageHeader />
      </header>
      <article home__blocks-container>
        <section className="home__meetingblock">
          <Meeting_Block />
        </section>

        <section className="home__scrollmenublock"></section>
      </article>
    </div>
  );
};

export default Home;
