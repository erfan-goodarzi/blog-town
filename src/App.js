import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Containers/Router/Router";
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
