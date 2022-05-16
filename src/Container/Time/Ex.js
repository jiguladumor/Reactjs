import React, { Component } from 'react';

class Ex extends Component {
    constructor() {
        super();
        this.state = {
          count: 0,
     
        }
           
 
          
    }
    getCount( c ) {
    
      const clicked = this.state.clicked
  if(c<=10){
    this.setState({count: this.state.count +1, clicked: true});
  } else if(c>=10){
    this.setState({count: this.state.count -1})
  }else{
    this.setState({count:this.state.count});
  }
  
    }
    // componentDidMount() {
    //     document.title = `You clicked ${this.state.count} times`;
    //   }
    //   componentDidUpdate() {
    //     document.title = `You clicked ${this.state.count} times`;
    //   }
      
    
    // render() {
    //     return (
    //         <div>
    //              {/* <p>You clicked {this.state.count} times</p>
    //              <button  id ="sum"onClick={() => this.setState({ count: this.state.count + 1 })}>  Click me</button>
                 
    //              <button onClick={() => this.setState({ count: this.state.count - 1 })}>  Click me</button> */
                 
                 
    //              }
                  
    //         </div>
    //     );
    // }
    render() {
      return  <div>
                      <button onClick={this.getCount.bind(this, 1)}> click me for increase </button>
                      <button onClick={this.getCount.bind(this, -0)}> click me for decrease </button>
                      <div><h1>{this.state.count}</h1></div>
  
                       </div>;
    }
}

export default Ex;