import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Layout from "./Layout/Layout.jsx";
import Authcontext from "./Auth/Authcontext.jsx";


function App() {
  

  return (
    <Router>
       <Authcontext>
      <Routes>
     
        <Route path="/*" element={<Layout />}/>
       
      </Routes>
      </Authcontext>
    </Router>
  );
}

export default App;
