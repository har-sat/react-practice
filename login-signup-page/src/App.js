import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route} from 'react-router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<SignIn />}/>
          <Route path = "/signin" element = {<SignIn />}/>
          <Route path = "/signup" element = {<SignUp />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
