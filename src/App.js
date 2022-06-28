import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";*/

function App() {

  const [mode, setMode] = useState({
    color: 'black',
    backgroundColor: 'white',
  });
  console.log(document.body);
  const toggleMode = (e) => {
    if(mode.color === 'white'){
      setMode({
        color: 'black',
      });
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode({
        color: 'white',
      });
      document.body.style.backgroundColor = '#101045';
    }
  }
  const changeTheme = (e) => {
    document.body.style.backgroundColor = e;
    setMode({
      color: 'white',
    })
  }

  return (
    <>
    {/*<Router>*/}
    {/*<Navbar title="My Blog" about="Contact Us"/>*/}
    {/*<Navbar/>*/}
    <Navbar title='My Blog' className="navbar" mode={mode}/>
    <TextForm heading='Enter the heading' mode={mode} toggleMode={toggleMode} changeTheme={changeTheme}/>
    {/*<About/>*/}
    {/*<Routes>
      <Route exact path="/home" element={<TextForm heading='Enter the heading' mode={mode} toggleMode={toggleMode} changeTheme={changeTheme}/>}></Route>
      <Route exact path="/" element={<TextForm heading='Enter the heading' mode={mode} toggleMode={toggleMode} changeTheme={changeTheme}/>}></Route>
      <Route exact path="/about" element={<About />}></Route>
    </Routes>*/}
    {/*</Router>*/}
    </>
  );
}

export default App;
