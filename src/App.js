
import { Routes } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import Restview from './Pages/Restview';
import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';




import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">
     
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/restaurant_view/:id' element={<Restview/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
