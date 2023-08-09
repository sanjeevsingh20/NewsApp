
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Taskform from './Components/Taskform';
import About from './Components/About';

import LoadingBar from 'react-top-loading-bar'
import NewsBox from './Components/NewsBox';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
function App() {
  const [progress, setProgress] = useState(0)
  const [theme, settheme] = useState("Light")
  const change = () => {
    if (theme === 'Dark') {
      
      settheme("Light")
      document.getElementById('bhai').style.backgroundColor = 'white';
      document.getElementById('bhai').style.color = 'black';
    }
    else {
     
      settheme("Dark")
      
      document.getElementById('bhai').style.backgroundColor = 'black';
      document.getElementById('bhai').style.color = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar listname="Sanjeev" theme={theme} changes={change} />
        
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
          <Route path="/about" element={<About setProgress={setProgress}/>}>
            
          </Route>
          <Route path="/" element={<Taskform/>}>
            
          </Route>
          
          <Route exact path="/Business" key={"business"} element={<NewsBox pageSize={21} category ="business" setProgress={setProgress}/>}> </Route>
          <Route exact path="/entertainment" key={"entertainment"} element={<NewsBox pageSize={21} category ="entertainment" setProgress={setProgress}/>}> </Route>
          <Route exact path="/news" key = {"general"} element={<NewsBox pageSize={21} category ="general" setProgress={setProgress}/>} > </Route>
          <Route exact path="/health" key={"health"} element={<NewsBox pageSize={21} category ="health" setProgress={setProgress}/>}> </Route>
          <Route exact path="/science" key={"science"} element={<NewsBox pageSize={21} category ="science" setProgress={setProgress}/>}> </Route>
          <Route exact path="/sports" key={"sports"} element={<NewsBox pageSize={21} category ="sports" setProgress={setProgress}/>}> </Route>
          <Route exact path="/technology" key={"technology"} element={<NewsBox pageSize={21} category ="technology " setProgress={setProgress}/>}> </Route>
        </Routes>
      </Router>
    </>

  );
}

export default App;

/* Here We are using propes to change the content of our website accordingly and we can give as a attribute in component name */

/* We can specify the type of props send to the components and if we pass diffrent data type it shows error and note that function name.propType as p should be lower case */