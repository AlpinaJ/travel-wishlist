import React from 'react';
import Header from './Header/Header';
import About from "./About/About";
import Explore from "./Explore/Explore";
import Create from "./Create/Create";

function App(){
    return (
        <div className="App">
            <Header/>
            <About/>
            <Explore/>
            <Create/>
        </div>
    )
}

export default App;