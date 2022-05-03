import logo from './logo.svg';
import './App.css';

function App() {
  //  map
  
   const data=
   [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];
  //  data.map((value,index)=>console.log(value.id ,value.name));
  //  console.log(data);
 let  filterdata=data.filter((data,index)=>data.expiry>=2022);
//  console.log(filterdata);
let ans=filterdata.reduce((acc,data,index)=>acc+data.price,0);
// console.log(ans);
var meta=data
  .filter((data,index)=>data.expiry>=2022)
  .reduce((acc,data,index)=>acc+data.price,0)
  return (
      <>
         <table border="1">
             <th>
                <tr>name</tr>
             </th>
             <th>
             <tr>id</tr>
             </th>
             <th >
              <tr>price</tr> 
              
             </th>
             <th>
               <tr>totalcost</tr>
             </th>
             {
               filterdata.map((value,index)=>{
                 return (
                   <tr key={index.toString()}>
                     <td>{value.name}</td>
                     <td>{value.id}</td>
                      <td>{value.price}</td> 
                      <td>{value.totalcost}</td>
                     <td>{meta}</td>
                      {index=== 0?<td rowSpan={data.length}>{ans}</td>:null}
                   </tr>
                 )
               })
             }
         </table>
      </>
  );
}
export default App;
