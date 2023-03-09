import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/cart';
import Main from './component/main';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
