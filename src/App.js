import React, { Component } from 'react';
import './App.css';
import TodoItemHead from "./components/TodoItemHead";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
       <TodoItemHead/>
       <Footer/>
      </div>
    );
  }
}

export default App;
