import "./App.css";
import Home from "./pages/Home/Home";
import Room from "./pages/Room/Room";
import CreateRoomButton from "./components/CreateRoomButton/CreateRoomButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Add to top

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<CreateRoomButton />} />
          <Route path="/room/:_roomID" element={<Room />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
