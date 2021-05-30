 
import './App.css';
import Layout from './Components/Layout/Layout';
import Router from './Containers/Router/Router';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
  
   <BrowserRouter>
      
      <div className="App">
      
         <Layout/>
      

    </div></BrowserRouter>

  );
}

export default App;
