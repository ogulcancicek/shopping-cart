import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { store } from './state/store/store';

function App() {

  return (
      <Router>
        <Provider store={store}>
          <Navbar/>
          <Main />
        </Provider>
      </Router>
  );
}

export default App;