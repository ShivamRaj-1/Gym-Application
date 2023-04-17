import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home";
import About from './pages/About'
import Trainer from './pages/Trainer/Trainer';

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainer" element={<Trainer />} />
      </Routes>

      
    </>
  )
}

export default App;