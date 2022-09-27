import "./App.css";
import WebsiteIcon from "./Components/WebsiteIcon";
import BgSwirlVideo from "./Components/BgSwirlVideo";
import HeaderText from "./Components/HeaderText";
import BuildingSpin from "./Components/BuildingSpin";

function App() {
  return (
    <>
      <section>
        <BgSwirlVideo source="https://hypermedia.varmeverket.com/39.mp4" />
        <WebsiteIcon source="https://hypermedia.varmeverket.com/logo.svg" />
      </section>
      <div className="container">
        <BuildingSpin />
      </div>
      <div className="container">
        <HeaderText text="The largest creative space in scandinavia" />
      </div>
    </>
  );
}

export default App;
