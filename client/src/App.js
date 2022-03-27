import './App.css';
import {Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Home} from "./pages/home/Home.jsx";
import {Choice} from "./pages/choice/Choice.jsx";
import {Login} from "./pages/login/Login.jsx";
import {Signup} from "./pages/signup/Signup.jsx";
import {useTheme} from "./Context/theme-context";
import {Capture} from "./pages/capture/Capture.jsx";


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
          <Route path='/choice' element={<Choice />}/>
          <Route path='/choice/capture' element={<Capture />}/>
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
