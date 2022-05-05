import React, { Component } from 'react'

export default class Countru extends Component {
     constructor(props) {
         super(props);
          this.state={
              country:"india",

          };

          

     }
      Changecountry =()=>{
          this.setState({
              country:'UK'
          })
      }
     
  render() {
    return (
        <>
           <div>country :{this.state.country}</div>
           <button onClick={() => this.Changecountry()}>change</button>
        </>
    )
  }
}
