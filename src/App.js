import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProfileProvider } from './logic/ContextProfile';
import Profile from './Pages/Profile';
import CharUI from './components/charts/ChartUI'
function App() {
  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path='/' element={<CharUI/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </ProfileProvider>
  );
}

export default App;
