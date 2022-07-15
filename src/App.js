import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, Routes, Navigate } from "react-router-dom";
import Navbar from './Components/navbar';
// import Home from './Components/home';
import Home from './Components/Home/index';
import Footer from './Components/footer';
import BusinessEnglish from './Components/business_eng';
import Plans from './Components/plans';
import Blogs from './Components/blog';
import "./CSS/main.css"


function App() {
  return (
    // <div className="">
    //   <Navbar />
    //   <Home />
    //   <Footer />
    // </div>
    <div className=''>
      <Navbar />
      <div>
        <Routes>
          {/* <Route path="/student/:name" component={EditStudent} /> */}
          {/* <Route path="/allStudent" render={props => <Show {...props} />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/businessEnglish" element={<BusinessEnglish />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
