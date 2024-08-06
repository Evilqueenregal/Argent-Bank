// import React from 'react';
// import { Route, Routes, Navigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import Header from "./components/Header.jsx";
// import Footer from './components/Footer.jsx';
// import Home from "./pages/Home.jsx";
// import Login from "./pages/Login.jsx";
// import Profile from "./pages/Profile.jsx";
// import '../src/styles/main.css';

// function App() {
//   const isConnected = useSelector((state) => state.auth.isConnected);
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Login.jsx" element={<Login />} />
//         <Route 
//           path="/Profil.jsx" element={isConnected ? <Profile /> : <Navigate to="/login" />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import '../src/styles/main.css'

export default function App () {
    const isConnected = useSelector((state) => state.auth.isConnected);

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route 
                    path='/profile' 
                    element={isConnected ? <Profile /> : <Navigate to="/login" />} 
                />
            </Routes>
            <Footer />
        </div>
    )  
}