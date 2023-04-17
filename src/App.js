import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import About from './pages/About'
import Home from "./pages/home/Home";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;