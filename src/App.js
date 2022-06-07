import React, { Component } from "react";
import Exemple from "./Profile/Exemple";
import  './App.css'

export class App extends Component {
  state={
    show: true,
    // count: 0
  }
  handlshow=()=>{
    this.setState({show:!this.state.show})
  }
  // componentDidMount(){
  //   this.timer= setInterval(()=>{
  //     this.setState((prevState)=> ({
  //       count: prevState.count + 1
  //     }))
  //   },1000)
  // }

  // componentWillUnmount(){
  //   clearInterval(this.timer)
  // }
  

  render() {
    // const {count} = this.state;
    return (
      <div className="App">
        <p>Checkpoint STATE</p>
        <button onClick={this.handlshow}>show/hide</button>
        {this.state.show?null: <Exemple /> }
        {/* <h3> counter {count}</h3> */}
      </div>
    );
  }
}

export default App;
