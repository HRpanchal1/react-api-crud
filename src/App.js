import React from "react";
import "./Crud.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Userdata from "./Userdata";
import Useradd from "./Useradd";
import Userdetail from "./Userdetail";
import Useredit from "./Useredit";
// import Userdetails from "./Userdetails";
// import Useredit from "./Useredit";
// import Userde from "./Userde";
// import Registrationuser from "./Registrationuser";
// import Loginuser from "./Loginuser";

function App() {
  return (
    <>
      <h1>Api crud</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/userdata" element={<Userdata />}> </Route>
          <Route path="/useradd" element={<Useradd />}> </Route>
          <Route path="/Userdetail/:userid" element={<Userdetail />}> </Route>
          <Route path="/Useredit/:userid" element={<Useredit />}> </Route>
          {/* <Route path="/userdetails" element={<Userdetails />}> </Route> */}
          {/* <Route path="/useredit/:userid"y element={<Useredit />}> </Route> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
