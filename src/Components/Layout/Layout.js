import React from 'react';
import Navbar from './Navbar'
import Auxiliary from '../../hos/Auxiliary'
import Router from '../../Containers/Router/Router'

const Layout = () => {
    return (
       <Auxiliary>
         <Router>
          <Navbar/>
         </Router>
       </Auxiliary>
    );
}

export default Layout;
