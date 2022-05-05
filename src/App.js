import logo from './logo.svg';
import './App.css';

function App() {


  // let arr=[10,20,30,40,50]
  // console.log(arr);
    

  // let arr1=[...arr];
  // console.log(arr1);

 
  // let arr2=[99,...arr1,100];
  // console.log(arr2);

  // let  [maths,ba,guj]=arr;
  // console.log(ba);


  // let obj={
  //   id:101,
  //   name:'sagar',
  // };
  // console.log(obj);

  //   // copy
  //   let obj2={
  //     ...obj
  //   };
  //   console.log(obj2);

  //   // merge

  //   let obj3={
  //     ...obj,
  //     place: 'surat ',
  //     name:"jigu"
  
  //   }
  //   console.log(obj3);


  //   //destructure

  //   let {id,name}=obj;
  //   console.log(id,name);

 
  

const get=[
  {
    name: "amit",
    age: 35,
    salary: 40000,
    bonus: 1000,
    status: true
  },
  {
    name: "ajay",
    age: 25,
    salary: 38000,
    bonus: 2000,
    status: false
  },
  {
    name: "mayur",
    age: 23,
    salary: 50000,
    bonus: 500,
    status: true
  },
  {
    name: "jay",
    age: 29,
    salary: 35000,
    bonus: 600,
    status: true
  },
  {
    name: "raj",
    age: 33,
    salary: 22000,
    bonus: 2000,
    status: true
  },
];

  let abc=get.filter((get,index)=>get.salary>=35000)
  .reduce((acc,get,index)=>acc+get.bonus,0);

  console.log(abc);
   let aa=get
   .filter((get,index) =>get.salary+get.bonus)
   .reduce((aa,get,index)=>aa+get.salary+get.bonus,0);

 console.log(aa);
    

  return (
    <>
     

         <table border="2">
               
                 <tr>
                   <th>
                     <td>name</td>
                   </th>
                   <th>
                     <td>age</td>
                   </th>
                   <th>
                     <td>salary</td>
                   </th>
                   {/* <th>
                     <td>salary</td>
                   </th> */}
                   <th>
                     <td>bonus</td>
                   </th>
                   <th>
                     <td>salary+bonus</td>
                   </th>
                   <th>
                     <td>total</td>
                   </th>


                 </tr>
                  
                 {
                    get.map((value, index) => {
                  return (
              <tr key={index.toString()}>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.salary}</td>
                <td>{value.bonus}</td>
                <td>{value.salary+value.bonus}</td>
                 {index === 0? <td rowSpan={get.length}>{aa}</td>:null}
                
               
              </tr>
            )
          })
        } 
         </table>
    </>
  );
}
export default App;
