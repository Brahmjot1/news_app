import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
 
  api_key="d9fc5f11916e4bb0a0de474a79ae15c3"

  state=
  {
    progress:0,
   
  }
  setProgress=(progress) =>
  {
    this.setState({progress:progress})
  }

  // componentDidMount() {
  //   // After the component is mounted, add a setTimeout to trigger the animation
  //   setTimeout(() => {
  //     document.getElementById('appHeadline').style.opacity = '1';
  //   }, 100); // Adjust the delay (in milliseconds) as needed
  // }
  
  render() {
   
    return (
      <div>
     
      <BrowserRouter>

      <div style={{ paddingBottom: '80px' }}>
        <Navbar/>
        </div>

        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
       
       {/* <div id='appHeadline'>News Headline</div> */}
        <Routes>
        <Route path="/" element={ <News api_key={this.api_key}  setProgress={this.setProgress}  pageSize="8" country="in" category="general"/>}></Route> 
        <Route path="/science" element={ <News api_key={this.api_key}  setProgress={this.setProgress}  pageSize="8" country="in" category="science"/>}></Route>
        <Route path="/entertainment" element={ <News api_key={this.api_key}  setProgress={this.setProgress}  pageSize="8" country="in" category="entertainment"/>}></Route>
        <Route path="/business" element={ <News api_key={this.api_key}  setProgress={this.setProgress}  pageSize="8" country="in" category="business"/>}></Route>
        <Route path="/health" element={ <News api_key={this.api_key}  setProgress={this.setProgress}  pageSize="8" country="in" category="health"/>}></Route>
        <Route path="/sports" element={ <News api_key={this.api_key}  setProgress={this.setProgress}  pageSize="8" country="in" category="sports"/>}></Route>
        <Route path="/technology" element={ <News api_key={this.api_key}  setProgress={this.setProgress}  pageSize="8" country="in" category="technology" />}></Route>
        </Routes>
      </BrowserRouter>
       
      </div>
    );
  }
}

