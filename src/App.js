import "./App.css";
import WebsiteIcon from "./Components/WebsiteIcon";
import BgSwirlVideo from "./Components/BgSwirlVideo";
import HeaderText from "./Components/AnimatedHeaderText";
import BuildingSpin from "./Components/BuildingSpin";
import AnimatedHeaderText from "./Components/AnimatedHeaderText";
import OurSpaces from "./Components/OurSpaces";

function App() {
  return (
    <>
        <BgSwirlVideo source="https://hypermedia.varmeverket.com/39.mp4" />

<div className="mainPage">
  <WebsiteIcon source="https://hypermedia.varmeverket.com/logo.svg"/>

  <div className="centeredContainer">
    <AnimatedHeaderText text="Largest Creative Hub In Sweden"/>
    </div>
    
    <div>
      <div className="gradientBlockBlackTop"/>
        <div className="containerBgBlack centeredContainer">
          <BuildingSpin/>
         <h2>Värmeverket
            focuses on
            Creation,
            Interaction and
            Innovation
            within Art and
            Culture.
          </h2>
        </div>
      <div className="gradientBlockBlackBottom"/>
    </div>

    <div>
      <OurSpaces/>

    </div>


</div>
    </>
  );
}

export default App;
