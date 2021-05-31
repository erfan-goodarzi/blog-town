import "./App.css";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
