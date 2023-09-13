import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default class App extends Component {
  componentDidMount() {
    // After the component is mounted, add a setTimeout to trigger the animation
    setTimeout(() => {
      document.getElementById('appHeadline').style.opacity = '1';
    }, 100); // Adjust the delay (in milliseconds) as needed
  }
  render() {
    return (
      <div>
      <BrowserRouter>

        <Navbar/>
        <div id='appHeadline'>News Headline</div>

        <Routes>
        <Route path="/" element={ <News pageSize="8" country="in" category="general"/>}></Route> 
        <Route path="/science" element={ <News pageSize="8" country="in" category="science"/>}></Route>
        <Route path="/entertainment" element={ <News pageSize="8" country="in" category="entertainment"/>}></Route>
        <Route path="/business" element={ <News pageSize="8" country="in" category="business"/>}></Route>
        <Route path="/health" element={ <News pageSize="8" country="in" category="health"/>}></Route>
        <Route path="/sports" element={ <News pageSize="8" country="in" category="sports"/>}></Route>
        <Route path="/technology" element={ <News pageSize="8" country="in" category="technology"/>}></Route>
        </Routes>

      </BrowserRouter>
       
      </div>
    );
  }
}

