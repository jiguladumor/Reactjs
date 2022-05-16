import React, { useState } from 'react';

function Countfun(props) {

     let [counter,setcounter] =useState(0);

    return (
        <div>
            <button onClick={() => setcounter (counter > 0 ? counter -1 :counter)}> -</button>
            <span>{counter}</span>
            <button onClick={() => setcounter (counter < 10 ? counter +1 :counter)}> -</button>
            {/* <h1>{this.state.counter}</h1> */}
        </div>
    );
}

export default Countfun;