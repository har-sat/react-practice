import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route} from 'react-router';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = "/"       element = {<SignUp />}/>
          <Route path = "/signin" element = {<SignIn />}/>
          <Route path = "/signup" element = {<SignUp />}/>
          <Route path = "/profile" element = {<Profile />}/>
          <Route path = "*"     element = {<ErrorPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
