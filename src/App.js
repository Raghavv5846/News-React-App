
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { HashRouter, Route, Routes,} 
        from "react-router-dom";
        import LoadingBar from 'react-top-loading-bar'



const App =()=> {
  // creating enviroment variables of api key
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const setprogress=(progress)=>{
    setProgress(progress)
  }
  document.body.style.backgroundColor="#E2EBF0";
    return (
        <HashRouter >
        <LoadingBar
        color='blue'
        height={3}
        progress={progress}
      />
        <NavBar/>
          <Routes>
          <Route exact path='/' element={<News setProgress={setprogress} apiKey={apiKey} key="general" pageSize={5} country="in" category="general" title="News-Daily Top Headlines"/>}/>

          <Route exact path='/business' element={<News setProgress={setprogress} apiKey={apiKey}key="business" pageSize={5} country="in" category="business" title="Business"/>}/>
          <Route exact path='/entertainment'element={<News setProgress={setprogress} apiKey={apiKey}key="entertainment" pageSize={5} country="in" category="entertainment" title="Entertainment"/>}/>
          <Route exact path='/general' element={<News setProgress={setprogress} apiKey={apiKey}key="general" pageSize={5} country="in" category="general"title="General"/>}/>
          <Route exact path='/health' element={<News setProgress={setprogress} apiKey={apiKey}key="health" pageSize={5} country="in" category="health"title="Health"/>}/>
          <Route exact path='/science'element={<News setprogress={setprogress} apiKey={apiKey}key="science" pageSize={5} country="in" category="science"title="Science"/>}/>
          <Route exact path='/sports' element={<News setProgress={setprogress} apiKey={apiKey}key="sports" pageSize={5} country="in" category="sports"title="Sports"/>}/>
          <Route exact path='/technology' element={<News setProgress={setprogress} apiKey={apiKey}key="technology" pageSize={5} country="in" category="technology"title="Technology"/>}/>
          </Routes>

        </HashRouter>
    )
}
export default App;

