import React from "react";
import Navigation from "./components/Navigation";
import Home from './pages/Home';
import GameMod from './pages/GameMod';
//import  Test
import './App.css';
import{BrowserRouter, Route, Routes} from"react-router-dom";

function App(){
  return(
<BrowserRouter>
<Navigation />
<Routes>
  <Route exact path="/hone" element={<Home />} />
  <Route path="/game-mod" element={<GameMod />} />
  {/* <React path="/test" element={<Test />} /> */}
</Routes>
</BrowserRouter>
  );
}

export default App;