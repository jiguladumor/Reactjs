import React from 'react';

function Loading(Componets) {

    return function withloadingany({isloading,data}){
        console.log(isloading,data);
        if(isloading){
            return(
                <p>hello coming loader....?</p>
            )
        }
        else{
            return(
                <Componets data ={data}/>
            )
        }
            
        
    }

     
}

export default Loading;