
import './App.css'
import LoginForm from './pages/LoginForm';

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
    <div className='loginform'>
      <h1>Login Form</h1>
      <LoginForm config={loginFormConfig} onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default App;
