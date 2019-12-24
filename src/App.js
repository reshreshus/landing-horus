import React, { Component } from 'react'
import './scss/main.scss';


import InfoBlock from './components/InfoBlock';
import Header from './components/Header';
export default class App extends Component {

  

  render () {
    return (
      <div className="container-fluid">
        
        <div className="row justify-content-space-around">
          <div className="col-12 col-lg-6 pl-auto">
            <div className="horus-container">
              <img id="horus" src="horus_white.png" alt="Horus Eye"/>
              <Header />
            </div>
          </div>

          <div className="col-12 col-lg-5 my-auto">
            <InfoBlock />
          </div>

        </div>
        
        <div className="row justify-content-center">
         
        </div>
        
          
         
        
      </div>
    );
  }
  
}
