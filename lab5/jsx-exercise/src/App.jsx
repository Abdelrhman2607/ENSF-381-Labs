import logo from './logo.svg';
import './App.css';

function App() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  let isLoggedIn = true;

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development".</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</p>
    </div>
  );
}

export default App;
