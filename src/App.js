import './App.css';
import {Routes,Route} from 'react-router-dom';
import About from './component/About'
import Head from './component/Head';
import Home from './component/Home';
import Shop from './component/Shop';
import Search from './component/Search';
import Login from './component/Login';
import Odrbbt from './helpingComponent/Orderbabt';
import Other from './helpingComponent/Otherbabt';
import Paymtbbt from './helpingComponent/Paymentbabt';
import Writeprblm from './helpingComponent/Writeproblem';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Head />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/shop' element={<Shop/>} />
        <Route exact path='/Search' element={<Search/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/about/fororder' element={<Odrbbt/>} />
        <Route exact path='/about/others' element={<Other/>} />
        <Route exact path='/about/forpayments' element={<Paymtbbt/>} />
        <Route exact path='/about/forwritecall' element={<Writeprblm/>} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
