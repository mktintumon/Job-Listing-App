import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Feed, Dashboard, Create } from "./pages"
import Landing from './pages/Landing'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/employer/dashboard" element={<Dashboard />}/>
          <Route path="/employer/create" element={<Create />}/>
          <Route path="/employee/feed" element={<Feed />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
