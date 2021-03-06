import React, { Component } from 'react'
import './scss/main.scss';


import InfoBlock from './components/InfoBlock';
import FloatingSocialLinks from './components/FloatingSocialLinks';
import SocialLinks from './components/SocialLinks';
export default class App extends Component {

  render () {
    return (
      <div className="container">
        
        <div className="row justify-content-space-between">
          <div className="col-12 col-md-6 mr-5 mt-5">
            <div className="horus-container">
              
              <img id="horus" src="horus_white.png" alt="Horus Eye"/>
              
            </div>
            <FloatingSocialLinks/>
          </div>
          <div className="col-12 col-sm-12 col-md-5 ml-0 ml-md-3 mr-1">
            <InfoBlock />
          </div>
        </div>
        {/* <div className="row"> */}
          <SocialLinks cName="not-floating-links"/>
        {/* </div> */}

      </div>
    );
  }
  
}
