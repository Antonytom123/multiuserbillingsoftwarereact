import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home1 from './Home1';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home1 />} />
                {/* Uncomment and add other routes as needed */}
                {/* <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/registerstaff" element={<RegisterStaff />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
