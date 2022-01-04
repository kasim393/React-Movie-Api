import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import List from './pages/list/List';
import TVDETAIL from './pages/tvdetail/TvDetail';
import TV from './pages/tv/TV';

function App() {
 
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":detail/:id" element={<Detail />} />
        <Route path="movie" element={<List />} />
        <Route path="tv" element={<TV />} />
        <Route path="tv/:id" element={<TVDETAIL />} />
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
