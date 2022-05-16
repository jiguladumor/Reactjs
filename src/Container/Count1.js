class Hello extends React.Component {
    constructor() {
       super()
       this.state = {
         count: 10,
    
       }
     }
     getCount( c ) {
    
        const clicked = this.state.clicked
    if(c == 1){
      this.setState({count: this.state.count +1, clicked: true});
    } else {
      this.setState({count: this.state.count -1})
    }
    
      }
      render() {
        return  <div>
                        <button onClick={this.getCount.bind(this, 1)}> click me for increase </button>
                        <button onClick={this.getCount.bind(this, 0)}> click me for decrease </button>
                        <div><h1>{this.state.count}</h1></div>
    
                         </div>;
      }
    }
    
    ReactDOM.render(
      <Hello name="World" />,
      document.getElementById('root')
    );