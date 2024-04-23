import "./App.css";

// import Header from "./components/header";
import Experience from "./components/experience";
import Feature from "./components/feature";
// import Approach from "./components/approach";
import Chat from "./components/chat";
// import Footer from "./components/footer"

import Home from "./components/home"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Experience />} />
      <Route path="/work" element={<Feature />} />
      <Route path="/blog" element={<Chat />} />
    </Routes>
  );
}

export default App;
