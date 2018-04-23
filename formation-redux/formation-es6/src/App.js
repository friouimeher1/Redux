import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AGE,{AP, students,people,filterData } from './constants'
import Add ,{ Divison } from './calculates/Calcul'
class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      value:'App'
    }
    this.handleClick= this.handleClick.bind(this)
  }
  handleClick(e){
    console.log(e)
  }
  render() {
    console.log('students : ',students)
    console.log('')
    console.log('people : ',people);
    console.log  (students.forEach((student)=>{
      console.log(student)
    }))
    console.log(AGE);
    console.log('******************************************************');

    console.log(AP.map(a=>{
      return '{ Id : ,'+a.id+' Name : '+a.name +'}'
    }));
    let sum=0
    AP.reduce((p, c) => {
      return sum +=c.price
    }, 0)
    console.log('Sum = ',sum)
    console.log(filterData)
const { value } =this.state
console.log(Add(2,-3));
console.log(Divison(2,0));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <input type='text'/>
            <button onClick={ ()=>this.handleClick }>Filter</button>

        </p>
          <h1>{ value }</h1>
      </div>
    );
  }
}

export default App;
