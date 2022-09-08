import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav';
import Footer from './component/Footer';
import SignUp from './component/SignUp';
import{ BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
      <Nav />
     <Routes>
      <Route  path='/' element={<h1>Home Page listing Componet</h1>} />
      <Route  path='/news' element={<h1>News Page listing Componet</h1>} />
      <Route  path='/contact' element={<h1>Contact Page listing Componet</h1>} />
      <Route  path='/about' element={<h1>About Page listing Componet</h1>} />
      <Route  path='/product' element={<h1>Product Page listing Componet</h1>} />
      <Route  path='/add-product' element={<h1>Add Product Page listing Componet</h1>} />
      <Route  path='/profile' element={<h1>Profile Page listing Componet</h1>} />
      <Route  path='/logout' element={<h1>Logout Page listing Componet</h1>} />
      <Route path='/signup' element={< SignUp/>} />
     </Routes>
      </BrowserRouter>
      {/* <SignUp /> */}
      <Footer />
     

    </div>
  );
}

export default App;
