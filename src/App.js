
import './App.css';
import About from './Container/About';
import Profile from './Container/Profile';
import React ,{ useState } from 'react'

import { BrowserRouter as Router, Route ,Routes,Link} from "react-router-dom";
function App() {
  const [state, setState] = useState('')
  // let component
  // if (state === 'about') {
  //   component = <About></About>
  // } else if (state === 'profile') {
  //   component = <Profile></Profile>
  // }
  return (
    <div className="App">
      <button onClick={() => setState('about')} >About </button>
      <button onClick={() => setState('profile')}>Profile</button>
      <Router >
        <Link to='/about'> About page</Link>
        <Link to='/profile'>Profile Page</Link>
        <Routes>
        <Route element={<About/>} path='/about' />
        <Route element={<Profile/>} path='/profile' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
