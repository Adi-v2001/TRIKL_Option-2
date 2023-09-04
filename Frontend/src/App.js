import './App.css';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom";
import Create from './component/Create.js';
import Update from './component/Update.js';
import Get from './component/Get.js';
import Delete from './component/Delete.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Create />}/>
        <Route path="/Update" element={<Update />} />
        <Route path="/Get" element={<Get />} />
        <Route path="/Delete" element={<Delete />} />
      </Routes>
    </div>
  );
}

export default App;
