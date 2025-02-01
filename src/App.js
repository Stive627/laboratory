import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProfileProvider } from './logic/ContextProfile';
import Profile from './Pages/Profile';
import Calendar from './components/calendars/calendar';
function App() {
  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Calendar/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </ProfileProvider>
  );
}

export default App;
