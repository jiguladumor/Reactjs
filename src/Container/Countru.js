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
           <p>gdp:{this.props.gdpvalue}</p>
           <button onClick={() => this.Changecountry( )}>changeproes</button>
        </>
    )
  }
}