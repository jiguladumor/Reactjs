import React, { Component } from 'react';

class Counter1 extends Component {

     constructor(props){
         super(props);
         this.state={
             clicks:0,
             show:true
         };

         
     }
      IncrementItem = (c) =>{
        this.setState({clicks:this.state.clicks + 1});
        if(c<0){
            this.setState({clicks: this.state.clicks +1, clicked: true});
        }
        else if(c==10){
            this.setState({clicks:0});
        }
      }
       
      DecrementItem = () => {
        this.setState({clicks:this.state.clicks - 1});
      }
    render() {
        return (
            <div>
                <button onClick={this.IncrementItem}>click to increment</button>
                <button onClick={this. DecrementItem}>click to increment</button>
                <div><h1>{this.state.clicks}</h1></div>
            </div>
        );
    }
}

// getCount( c ) {
    
//     const clicked = this.state.clicked
// if(c<=10){
//   this.setState({count: this.state.count +1, clicked: true});
// } else if(c>=10){
//   this.setState({count: this.state.count -1})
// }else{
//   this.setState({count:this.state.count});
// }

//   }

export default Counter1;