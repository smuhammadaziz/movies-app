import "./home.css";
import Header from "../../Components/Header/header";
import Intro from "../../Components/Intro/intro";
import Slider from "../../Components/Slider/slider";
import Hero from "../../Components/Hero/hero";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Slider />
    </>
  );
}

export default Home;
