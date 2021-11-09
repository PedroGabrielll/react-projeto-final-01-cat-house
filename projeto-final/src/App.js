import React, { useState } from "react";
import Galeria from "./components/galeria/Galeria";
import {Switch, Route} from 'react-router-dom'
import Sobre from "./components/sobre/Sobre";
import Home from "./components/Home/Home";


export default function App() {
  const [dados, setDados] = useState({
    url:"",
    nome:"",
    data:"",
  })
  return (
        <>
          <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/Galeria" render={(props) => <Galeria setDados={setDados}/>} exact/>
          </Switch>
        </>
  );
}


