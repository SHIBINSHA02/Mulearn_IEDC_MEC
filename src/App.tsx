// src/App.js
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import Statistics from "./Components/Statistics/Statistics";
import ExploreLC from "./Components/ExploreLC/ExploreLC";
import Team from "./Components/Team/Team";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";
import PortalPage from "./PortalPage/PortalPage"; // Ensure this path is correct

function App() {
    return (
        <Router>
            <div className="appWrapper">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Home />
                            <About />
                            <Events />
                            <Gallery />
                            <Statistics />
                            <ExploreLC />
                            <Team />
                            <Connect />
                            <Footer />
                        </>
                    } />
                    <Route path="/portal" element={<PortalPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
