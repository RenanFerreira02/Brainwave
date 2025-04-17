import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits/Benefits";
import Collaboration from "./components/Collaboration/Collaboration";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />

        <Hero />

        <Benefits />

        <Collaboration />

        <Services />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
