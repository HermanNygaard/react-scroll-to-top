import React from 'react';
import './App.css';
import ScrollToTop from "react-scroll-to-top";
import "react-scroll-to-top/lib/index.css"

function App() {
  return (
    <div className="App">
      <ScrollToTop smooth className="bz" />
      <h1>Hello!</h1>
      <h2>Scroll down for the button to appear</h2>
      <p style={{ marginTop: "150vh" }}>bottom</p>
    </div>
  );
}

export default App;
