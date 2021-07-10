import React,{Component} from 'react';
import './App.css';
// import Heading from "./components/heading";
// import Clrbox from "./components/clrbox";
// import Card from "./components/card.js";
// import Card2 from "./components/card2.js";



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0
    };
  }
   resetnum1 = () => {
     console.log(this.state.num1);
    this.setState({num1: this.state.num1 + 1});
    console.log(this.state.num1);
  };
   resetnum2 = () => {
    this.setState({num2: this.state.num2 + 1});
  };
   resetnum3 = () => {
    this.setState({num3: this.state.num3 + 1});
  };


  render(){
    return (
      <>
        <div className="main">
          <h1>This is a counter app</h1>
          <div className="btn">
            <button onClick={this.resetnum1}>{this.state.num1}</button>
            <button onClick={this.resetnum2}>{this.state.num2}</button>
            <button onClick={this.resetnum3}>{this.state.num3}</button>
          </div>
          

        </div>
      </>
    );
  }
}

export default App;
