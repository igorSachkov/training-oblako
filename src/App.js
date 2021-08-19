import "./style.css"
import Header from "./Content/Header/Header";
import Body from "./Content/Body";
import { store } from "./ReduxStore/ReduxStore"
import { ModalWindowAdd } from "./Content/Header/ModalWindowAdd";
import { connect, Provider } from "react-redux"
// import MomentUtils from '@date-io/moment';
// import DateFnsUtils from '@date-io/date-fns';
// import LuxonUtils from '@date-io/luxon';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';

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
