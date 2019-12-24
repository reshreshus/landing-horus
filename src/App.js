import React, { Component } from 'react'
import './scss/main.scss';


import InfoBlock from './components/InfoBlock';
import Header from './components/Header';
export default class App extends Component {

  

  render () {
    return (
      <div className="container">
        
        <div className="row justify-content-space-between">
          <div className="col-12 col-md-6 mr-5 mt-5">
            <div className="horus-container">
              <img id="horus" src="horus_white.png" alt="Horus Eye"/>
              <Header />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-5 ml-4 small-medium-query">
            <InfoBlock />
          </div>
        </div>
      </div>
    );
  }
  
}
