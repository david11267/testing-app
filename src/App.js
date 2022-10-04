import "./App.css";
import "./Css/VV2.css";
import WebsiteIcon from "./Components/WebsiteIcon";
import BgSwirlVideo from "./Components/BgSwirlVideo";
import BuildingSpin from "./Components/BuildingSpin";
import AnimatedHeaderText from "./Components/AnimatedHeaderText";
import OurSpaces from "./Components/OurSpaces";
import Latest from "./Components/Latest";

function App() {
  return (
    <>
      <BgSwirlVideo source="https://hypermedia.varmeverket.com/39.mp4" />

      <main>
        <WebsiteIcon source="https://hypermedia.varmeverket.com/logo.svg" />

        <div className="heroH1text">
          <AnimatedHeaderText text="Largest Creative Hub In Sweden" />
        </div>

        <div>
          <div className="gradientBlockBlackTop extendParrent" />
          <div className=" extendParrent containerBgBlack  ">
            <div className="centeredContainer">
              <BuildingSpin />
              <h2>Värmeverket focuses on Creation, Interaction and Innovation within Art and Culture.</h2>
            </div>
          </div>
          <div className="gradientBlockBlackBottom extendParrent" />
        </div>

        <section>
          <OurSpaces />
        </section>
        <section>
          <Latest />
        </section>
      </main>
    </>
  );
}

export default App;
