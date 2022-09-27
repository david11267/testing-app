import "./App.css";
import WebsiteIcon from "./Components/WebsiteIcon";
import BgSwirlVideo from "./Components/BgSwirlVideo";
import HeaderText from "./Components/HeaderText";
import BuildingSpin from "./Components/BuildingSpin";

function App() {
  return (
    <>
        <BgSwirlVideo source="https://hypermedia.varmeverket.com/39.mp4" />

<div className="mainPage">
  <WebsiteIcon source="https://hypermedia.varmeverket.com/logo.svg"/>

  <div className="centeredContainer">
    <HeaderText text="hello benji"/>
    </div>
    
    <div>
      <div className="gradientBlockBlackTop"/>
        <div className="containerBgBlack centeredContainer">
          <HeaderText text="hello benji"/>
        </div>
      <div className="gradientBlockBlackBottom"/>
    </div>



</div>
    </>
  );
}

export default App;
