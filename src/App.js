import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AttachFile from './components/AttachFile/AttachFile';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<AttachFile/>}/>
        </Routes>
      </Router>
  );
}

export default App;
