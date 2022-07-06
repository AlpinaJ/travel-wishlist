import React from 'react';
import Header from './Header';
import About from "./About";
import Explore from "./Explore";
import Create from "./Create";

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