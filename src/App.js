 
import './App.css';
import Layout from './Components/Layout/Layout';
import Router from './Containers/Router/Router';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
  
   <BrowserRouter>
      
      <div className="App">
      <Router>
         <Layout/>
      </Router>

    </div></BrowserRouter>

  );
}

export default App;
