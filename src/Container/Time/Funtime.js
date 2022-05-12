import React, { useEffect, useState } from 'react';

function Funtime(props) {
    const [time, setTime] = useState(new Date());

    const too=()=>{
        setTime (new Date())
    }

    useEffect(() => {

           //mount
           const timedata=setInterval(() =>too(), {
               
           }, 1000);
           //unmount
           return() =>{
               clearInterval(timedata);
           }

    }, [])

    return (
        <div>

            {time.toLocaleTimeString()}

        </div>
    );
}

export default Funtime;