
import './styles/main.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from './components/Footer';
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
