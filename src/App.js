import MyNav from './Common/MyNav.js';
import Home from './Common/Home.js';
import Blog from './Common/Blog.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyNav/>}>
            <Route path="/home" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
