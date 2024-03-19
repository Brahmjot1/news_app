import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = (props) => {
  const api_key = "d9fc5f11916e4bb0a0de474a79ae15c3";

  // Initializing state to manage loading bar progress
  const [progress, setProgress] = useState(0);

  // Function to update the loading bar progress
  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div>
      <BrowserRouter>
        <div style={{ paddingBottom: "80px" }}>
          <Navbar />
        </div>

        <LoadingBar color="#f11946" progress={progress} />

        {/* <div id='appHeadline'>News Headline</div> */}
        <Routes>
          <Route
            path="/"
            element={
              <News
                api_key={api_key}
                setProgress={updateProgress}
                pageSize="8"
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                api_key={api_key}
                setProgress={updateProgress}
                pageSize="8"
                country="in"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                api_key={api_key}
                setProgress={updateProgress}
                pageSize="8"
                country="in"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                api_key={api_key}
                setProgress={updateProgress}
                pageSize="8"
                country="in"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                api_key={api_key}
                setProgress={updateProgress}
                pageSize="8"
                country="in"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                api_key={api_key}
                setProgress={updateProgress}
                pageSize="8"
                country="in"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                api_key={api_key}
                setProgress={updateProgress}
                pageSize="8"
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
