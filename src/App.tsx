import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoChat from "./pages/VideoChat";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:appId/:roomName" element={<VideoChat />} />
      </Routes>
    </Router>
  );
};

export default App;
