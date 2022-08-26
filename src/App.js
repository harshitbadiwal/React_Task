
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Addproduct from './Addprodutes';
function App() {
  return<>
    <BrowserRouter>

    <Routes>
    
    <Route path='/' element={<Login/>}/>
   
    <Route path='/home' element={<Home/>} />
    <Route path='/add' element={<Addproduct/>} />
    </Routes>

    </BrowserRouter>
  </>
}

export default App;
