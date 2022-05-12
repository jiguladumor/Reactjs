import React, { useEffect, useState } from 'react';

function Timefun(props) {
    const [time, setTime] = useState(new Date());

     const tick=() =>{
         setTime(new Date())
     }


    useEffect(
        () => {
                 //componetdidmount
                 const timeid=setInterval( () =>tick() ,1000);
                 return () =>{
                     //componets will unmount 
                     clearInterval(timeid);
                 }
        }, []
    )
    return (
        <div>

            {time.toLocaleTimeString()}

        </div>
    );
}

export default Timefun;