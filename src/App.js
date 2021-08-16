import "./style.css"
import Header from "./Content/Header/Header";
import Body from "./Content/Body";
import { Items } from "./Store/Store"

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <Body items={Items} />
      </div>

    </div>
  );
}

export default App;
