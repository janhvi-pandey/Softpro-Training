
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Showall from "./components/Showall";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import View from "./components/View";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="container-fluid">
      {/* navbar start */}
      <Navbar />
      {/* navbar end */}



     {/* main content */}
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Register/>}/>
        <Route exact path='/showall' element={<Showall/>}/>
        <Route exact path='/view/:id' element={<View/>}/>
        <Route exact path='/edit/:id' element={<Edit/>}/>
      </Routes>
      </BrowserRouter>
   
      {/* footer start */}
      <Footer />
      {/* fotter end */}
    </div>
  );
}

export default App;
