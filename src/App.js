import "./App.css";
import About from "./components/About";
import Contact from "./pages/Contact";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import HeroSection from './components/HeroSection'
import Faculty from "./pages/Faculty";
import AimAndObjective from "./pages/AimAndObjective";
import Event from "./pages/Event";
import HomeButton from "./components/HomeButton";
import Footer from './components/Footer'
import Aac from "./pages/Aac";

function App() {
  return (
    <>
      <HeroSection/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Faculty" element={<Faculty/>} />
        <Route path="/AimAndObjective" element={<AimAndObjective/>} />
        <Route path="/Event" element={<Event/>} />
        <Route path="/Aac" element={<Aac/>} />
      </Routes>
      <HomeButton/>
      <Footer/>
    </>
  );
}

export default App;
