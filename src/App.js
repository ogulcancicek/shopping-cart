import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Main />
      </Router>
    </>
  );
}

export default App;