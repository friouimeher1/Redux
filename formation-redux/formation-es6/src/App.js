import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AGE,{AP, students,people } from './constants'
class App extends Component {
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

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
