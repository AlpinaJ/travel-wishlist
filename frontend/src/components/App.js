import React from 'react';
import Header from './Header';
import About from "./About";
import Explore from "./Explore";

function App(){
    return (
        <div className="App">
            <Header/>
            <About/>
            <Explore/>
        </div>
    )
}

export default App;