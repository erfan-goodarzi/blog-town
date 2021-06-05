import React from 'react';
import Auxiliary from '../../hos/Auxiliary';
import './Header.css'

const Header = () => {
    return (
        <Auxiliary>
          <header className="header-background">
              <div className="header-top col-sm-8 mx-auto">
                <h2 className="head-title">This is where we are tell stories</h2>
                <p className="head-des">Read about technology and world issues here</p>
              </div>
          </header>
        </Auxiliary>
    );
}

export default Header;
