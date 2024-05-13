import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/homepage';
import LoginSignup from './Components/LoginSignup/LoginSignup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='homepage' element={<Homepage />} />
        <Route path='login' element={<LoginSignup />} />
        {/* Additional routes go here */}
      </Routes>
    </Router>
  );
}

export default App;
