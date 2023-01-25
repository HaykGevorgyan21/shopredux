import './App.css';
import GetFullProduct from './getcomponent/GetFullComponent';
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import {Electronics} from './electronics/Electronics';
import Jewelery from './Jewelery/Jewelery';
import Men from './men/men';
import Women from './women/Women';
import {Basket} from './basket/Basket';
function App() {


  return (
    <div className="App">
        <Navbar />
      <Routes>
        <Route path='/' element={<GetFullProduct />} />
        <Route path='/Electronics' element={<Electronics />} />
        <Route path='Jewelery' element={<Jewelery />} />
        <Route  path='Men' element={<Men />}/>
        <Route path='Women' element={<Women />} />
        <Route path='Basket' element={<Basket />} />
 </Routes>
    </div>
  );
}

export default App;
