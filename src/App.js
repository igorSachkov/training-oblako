import "./style.css"
import Header from "./Content/Header/Header";
import Body from "./Content/Body";
import { store } from "./ReduxStore/ReduxStore"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="main-container">
        <Body />
      </div>
    </Provider>
  );
}

export default App;
