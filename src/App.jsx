import React from 'react'
import Navbar from './Components/Navbar/Navbar';

import {Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Articles from './Components/Articles/Articles';
import Classes from './Components/Classes/Classes';
import Shop from './Components/Shop/Shop';
import Benifites from './Components/Benifites/Benifites';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/articles' element={<Articles></Articles>}></Route>
        <Route path='/classes' element={<Classes></Classes>}></Route>
        <Route path='/benifites' element={<Benifites></Benifites>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
    </>
  )
}

export default App
