import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Notication from './components/Notications/Notication';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Notication/>}/>
        </Routes>
      </Router>
  );
}

export default App;
