import React from 'react';
import './App.css';

import FirstComponent from './customized_components/First_component';

function App() {
  return (
    <div className="App">
      <h2>hello world -in react</h2>
      
      <FirstComponent name="adil reza" email ="adilreza043@gmail.com" varsity="RUET"/>
      <FirstComponent name="Saad al muttaki" email ="saad.all muttaki@gmail.com" varsity="BUET"/>

    </div>
  );
}
export default App;
