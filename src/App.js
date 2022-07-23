import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect, Routes, Navigate } from "react-router-dom";
import Navbar from './Components/navbar';
import Home from './Components/Home/index';
import Footer from './Components/footer';
import BusinessEnglish from './Components/business_eng';
import Plans from './Components/plans';
// import Blogs from './Components/blog';
import "./CSS/main.css"


function App() {
  return (
    <div className=''>
      <Navbar />
      <div>
        <Routes>
          <Route
            path="/home" exact element={<Home />} />
          <Route path="/businessEnglish" exact element={<BusinessEnglish />} />
          <Route path="/plans" exact element={<Plans />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="*" element={<Home />} />
          {/* <Navigate to="/home" /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
