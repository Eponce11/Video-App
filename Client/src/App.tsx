import "./App.css";
import { useRef } from "react";
import { io } from "socket.io-client";
import Home from "./pages/Home/Home";
import Room from "./pages/Room/Room";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Add to top

function App() {
  const socketRef = useRef<any>(null);
  socketRef.current = io("http://localhost:8000");
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:_roomID" element={<Room socketRef={socketRef} />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
