import React from 'react';
import './scss/main.scss';

import Header from './components/Header';
import InfoBlock from './components/InfoBlock';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <Header />
        <div className="row justify-content-center">
          <InfoBlock />
        </div>
        
       

      </div>
    </div>
  );
}

export default App;
