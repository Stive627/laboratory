import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ImgHover from './ImageHover/ImgHover';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<ImgHover/>}/>
        </Routes>
      </Router>
  );
}

export default App;
