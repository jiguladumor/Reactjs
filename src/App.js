import logo from './logo.svg';
import './App.css';

function App() {
  // var a=10;
  // {
  //   console.log(a);
  // }
  // const x=10;  local value print 
  // {
  //   const x=20;
  // }

  // let x=20;   gloabal value print 
  // {
  //   let x=30;
  // }
  //  console.log(x);


  // const s=;
  // s=s+10;
  // console.log(s); error variable not define 





  // let s=10;
  // s=s+10;
  // console.log(s);


  // let y=5;
  // y=y+5;
  // console.log(y);

  //  Arrow funcation  

   
  
    // let arr =[10,20,30,40,50];

    // arr.map((a)=>console.log(a));

    // function intro()
    // {
    //   console.log("jignasha ladumor");
    // }

    let intro =()=>{
      console.log("jignasha ladumor");
    }

    intro();

     console.log('fff');
     
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React ertg
        </a>
      </header>
    </div>
  );
}

export default App;
