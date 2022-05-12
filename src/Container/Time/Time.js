import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);

        this.state={
            time : new Date() //1 

        }
        
    }
    tick = () =>{
        this.state({
            time :new Date()
        })
    }

    componentDidMount = () =>{
         //3 .call 
          this.timeid=setInterval( () =>
          
          this.tick(),1000);
    } 
    
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.count !== this.state.count) {
    //         }
    //   }
    
    render() {
        return (
            <div>     
                
                
                 {this.state.time.toLocaleTimeString()}    

            </div>
        );
    }
}

export default Time;