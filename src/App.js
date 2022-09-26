import "./App.css";
import WebsiteIcon from "./Components/WebsiteIcon";
import BgSwirlVideo from "./Components/BgSwirlVideo";
import HeaderText from "./Components/HeaderText";

function App() {
  return (
    <>
      <div>
        <WebsiteIcon source="https://hypermedia.varmeverket.com/logo.svg" />
        <div className="container">
          <HeaderText text="The largest creative space in scandinavia" />
        </div>
      </div>
      <BgSwirlVideo source="https://hypermedia.varmeverket.com/39.mp4" />
    </>
  );
}

export default App;
