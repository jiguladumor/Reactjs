import React, { useState } from 'react';

function Funcountry({gdpvalue}) {




      const [Country,setCountry ]=useState('caneda');

      const [gdp,Setgdp]=useState(0)


      const Changecountry= () =>
      {
          setCountry('africa');
      }



    return (
        <div>
            <p>Country[funcation based Component]:{Country}</p>
            <button onClick={() => Changecountry()}>change</button>


            <p>gdp :{gdp}</p>
            <button onClick={() => Setgdp( gdpvalue)}>change cdp </button>
        </div>
    );
}

export default Funcountry;