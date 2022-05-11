import React, { Component } from 'react';

class time extends Component {
    constructor(props) {
        super(props);
         this.state={
             time:new Date()
         }
    }
    
    render() {
        return (
            <div>
                  {this.state.time.toLocaleTimeString()}
            </div>
        );
    }
}

export default time;