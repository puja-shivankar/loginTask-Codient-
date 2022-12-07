import logo from './logo.svg';
import './App.css';
import LoginForm from './component/user/LoginForm';
import { Login } from './pages/login/Login';
import { Dashboard } from './pages/dashboard/Dashboard';
import { SignUp } from './pages/sign-UP/SignUp';
import { Footer } from './layouts/footer/Footer';
import { Routing } from './routes/routing';

function App() {
  
  return (
    <div class="App">
      <Routing></Routing>
    </div>
  );
}

export default App;
