import logo from './logo.svg';
import './App.css';
 
// import Time from './Container/time/Time';
import Ex from './Container/Time/Ex';
import Counter1 from './Container/Counter1';
import Countfun from './Container/Countfun';
// import Timefun from './Container/time/Timefun';
// import Funtime from './Container/time/Funtime';
// import { useEffect, useState } from 'react';
// import Loading from './Componets/Loading/Loading';
// import Home from './Container/Home/Home';

 


//  const Homewithloading = Loading(Home)
 

function App() {

  //  const [loading,setloading] = useState(false);
  //  const [data,setData] = useState([]);

  //  let orgData = [
  //       {id :101 , name:"sagar"},
  //       {
  //         id:203,
  //         name:'jigu'
  //       },
  //       {id:305 , name:"kinudikri"}
  //  ]

     
         
  
// useEffect( 
//   ()=>{
//       setloading(true);
//        setTimeout( () => {setloading(false); setData(orgData)},2000);
         
       
//   },
//   []
// )
//    console.log(loading,data);
   
  return(
     
        
       <>
         {/* <Homewithloading  
          isloading ={loading}
          data={data}
         /> */}
        {/* <Ex/> */}
        {/* <Counter1/> */}
        <Countfun/>

          
         
        </>
        
      
    
  );
}
export default App;
