
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './component/Home/Home';
import Login from './component/Loginpage/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
            
          </Route>
          <Route path='/chackout'>
            
          </Route>
          <Route path='/login' element={<Login/>}>
            
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
