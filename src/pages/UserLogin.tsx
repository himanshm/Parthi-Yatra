import Button from '../components/UI/Button';
import Login from '../components/UI/Login';

function UserLogin() {
  const userActions = (
    <Button to='/forgot-password' btntype='textOnly'>
      Lost Password?
    </Button>
  );
  return <Login actions={userActions} />;
}

export default UserLogin;
