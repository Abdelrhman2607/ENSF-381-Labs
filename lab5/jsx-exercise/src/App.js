import './App.css';
import Controls from './Controls.js';
import UserList from './UserList.js';
import Footer from './Footer.js';

function App() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  let isLoggedIn = true;

  const conditional_content =
    <div>
      <section>
        <Controls />
      </section>
      <section>
        <UserList />
      </section>
        <Footer />
    </div>;

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development.</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</p>

      {isLoggedIn && conditional_content}

    </div>
  );
}

export default App;
