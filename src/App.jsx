import { About } from "./Components/About/About";
import { Campus } from "./Components/Campus/Campus";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Hero } from "./Components/Hero/Hero";
import { NavBar } from "./Components/NavBar/NavBar";
import { Programes } from "./Components/Programes/Programes";
import { TestImonials } from "./Components/TestImonials/TestImonials";
import { Title } from "./Components/Title/Title";
import { VidioPlayer } from "./Components/VidioPlayer/VideoPlayer";
import { useState } from "react";

function App() {
  const [playVid, setPlayVid] = useState(false);

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="container">
        <Title title="What we Offer" subTitle="Our Program" />
        <Programes />
        <About setPlayVid={setPlayVid} />
        <Title title="Campus Photos" subTitle="Gallery" />
        <Campus />
        <Title title="What Students Says" subTitle="TestImonials" />
        <TestImonials />
        <Title title="Contact us" subTitle="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VidioPlayer playVid={playVid} setPlayVid={setPlayVid} />
    </div>
  );
}

export default App;
