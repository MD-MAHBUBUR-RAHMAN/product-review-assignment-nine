import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";
import Dashbord from "./Components/Dashbord/Dashbord";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import Notfound from "./Components/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
