import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from "react-router-dom";
import Home from './pages/HomePage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>} />
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
