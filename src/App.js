import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Home";
import About from './pages/About'
import Trainer from "./pages/Trainer/Trainer";
import Pricing from "./pages/Pricing/Pricing";

function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>

      
    </>
  )
}

export default App;