import React from 'react';
import './RootComponent.css';
import HeaderComponent from '../Components/Header';

function RootComponent() {
  return (
    <div className="RootComponent">
      <HeaderComponent></HeaderComponent>
      <main className="MainContainer">
        <img src=".\images\EFFECTS-before.jpg" alt="Before" />
        {/* <img src=".\images\EFFECTS-after.jpg" alt="After" /> */}
      </main>
    </div>
  );
}

export default RootComponent;
