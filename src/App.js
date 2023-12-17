import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Categories from './Pages/Categories';
import Users from './Pages/Users';
import Product from './Pages/Product';
import User from './Pages/User';
import Category from './Pages/Category';
import Order from './Pages/Order';
import Register from './Pages/Register';

const App = ()=> {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categories/:id' element={<Category/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/users/:id' element={<User/>}/>
          <Route path='/orders' element={<Order/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
