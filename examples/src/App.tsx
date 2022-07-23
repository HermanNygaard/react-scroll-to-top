import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ScrollToTop from "../../src";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ScrollToTop smooth />
      <div style={{ marginTop: "150vh" }}></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

const Page = ({ children }) => (
  <div style={{ height: "150vh" }}>{children}</div>
);

const OnMount = () => (
  <Page>
    <ScrollToTop top={0} />
  </Page>
);

const StyleOverride = () => (
  <Page>
    <ScrollToTop top={0} style={{ backgroundColor: "blue" }} />
  </Page>
);

const Wrapper = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="onmount" element={<OnMount />} />
      <Route path="style" element={<StyleOverride />} />
    </Routes>
  </BrowserRouter>
);

export default Wrapper;
