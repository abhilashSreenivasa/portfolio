import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from "react-router-dom";
import Home from './pages/HomePage';
import Experience from './pages/ExperiencePage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/experience" element={<Experience/>} />
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
