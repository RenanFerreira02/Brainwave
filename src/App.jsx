import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits/Benefits";
import Collaboration from "./components/Collaboration/Collaboration";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        <Hero />

        <Benefits />

        <Collaboration />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
