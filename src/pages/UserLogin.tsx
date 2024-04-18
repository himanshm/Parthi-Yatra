import Login from '../components/UI/Login';
import ForgotPassword from '../components/user/ForgotPassword.tsx';

function UserLogin() {
  const userActions = <ForgotPassword />;
  return <Login actions={userActions} />;
}

export default UserLogin;
