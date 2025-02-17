import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProfileProvider } from './logic/ContextProfile';
import Profile from './Pages/Profile';
import VerificationCode from './components/VerificationCode/VerificationCode';
function App() {
  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path='/' element={<VerificationCode/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </ProfileProvider>
  );
}

export default App;
