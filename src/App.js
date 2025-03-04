import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SelectUI from './components/SelectUI/SelectUI';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<SelectUI/>}/>
        </Routes>
      </Router>
  );
}

export default App;
