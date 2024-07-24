
import './App.css'
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';

const loginFormConfig = [
  { label: "Username", type: "text", name: "username" },
  { label: "Password", type: "password", name: "password" },
];

const App = () => {

  const handleLoginSubmit = (data) => {
    console.log("Login Data Submitted: ", data);
    // Perform login logic here (e.g., call an API)
  };

  return (
    <>
    <div className='loginform'>
      <h1>Login Form</h1>
      <LoginForm config={loginFormConfig} onSubmit={handleLoginSubmit} />
    </div>
    <div className='loginform'>
      <h2 >Signup Form</h2>
      <SignupForm/>
    </div>
    </>
  );
};

export default App;
