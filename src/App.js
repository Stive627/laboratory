import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import VerificationCode from './components/VerificationCode/VerificationCode';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<VerificationCode handleCode={(value)=> {}}/>}/>
        </Routes>
      </Router>
  );
}

export default App;
