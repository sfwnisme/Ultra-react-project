import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './Components/Index/index'
import Navbar from './Components/Navbar/index'
import Contact from './Components/Contact/index'

class App extends Component {
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
