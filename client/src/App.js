import './App.css';
import {Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Home} from "./components/Home";
import {Music} from "./components/Music";
import {Login} from "./components/Login";
import {Signup} from "./components/Signup";
import {useTheme} from "./Context/theme-context";


function App() {
  const {theme} = useTheme();
  return (
    <div className="App flex flex-col min-h-screen" 
    style={{backgroundColor: theme.mode.bgColor, color:theme.mode.primaryColor}}>
      <div className='header'>
        <Navbar /> 
      </div>
      <div className='main flex-grow'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/music' element={<Music />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes> 
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
