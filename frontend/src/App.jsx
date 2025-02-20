import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Layout from "./Layout/Layout.jsx";
// import './css/style.css';
// import './charts/ChartjsConfig.jsx'


function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Layout />}/>
      </Routes>
    </Router>
  );
}

export default App;
