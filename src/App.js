import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './pages/HomePage';
import Experience from './pages/ExperiencePage';
import Project from './pages/ProjectsPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/experience" element={<Experience/>} />
       <Route path="/projects" element={<Project/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
