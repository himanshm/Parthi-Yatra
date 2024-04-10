import { Suspense, lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Spinner from './components/UI/Spinner';

const AppLayoutPage = lazy(() => import('./pages/MainNav.tsx'));
const UserLoginPage = lazy(() => import('./pages/UserLogin.tsx'));
const UserForgotPassPage = lazy(() => import('./pages/UserForgotPassword.tsx'));

const SuspenseLayout = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  );
};

const Root = (
  <Route element={<SuspenseLayout />}>
    <Route element={<AppLayoutPage />}>
      <Route index element={<UserLoginPage />} />
      <Route
        path='/forgot-password'
        element={
          <UserForgotPassPage message='Please contact your admin for a new password. Sai Ram 🙏.' />
        }
      />
    </Route>
  </Route>
);

function App() {
  const router = createBrowserRouter(createRoutesFromElements(Root));
  return <RouterProvider router={router} />;
}

export default App;
