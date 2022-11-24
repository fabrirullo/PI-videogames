import './App.css';
import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"
import Home from './components/Home/Home';
import GameDetail from "./components/GameDetail/GameDetail";
import CreateVideogame from './components/CreateVideogame/CreateVideogame';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Route exact path = '/' component={LandingPage}/>
        <Route exact path = '/home' component={Home}/>
        <Route path = '/videogames/:id' component={GameDetail}/>
        <Route path = '/create' component={CreateVideogame}/>
      </BrowserRouter>
    </div>
  );
}
export default App;
