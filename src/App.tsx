import { Suspense, lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Spinner from './components/UI/Spinner';
import AuthProvider from './context/AuthContext.tsx';

const AppLayoutPage = lazy(() => import('./pages/MainNav.tsx'));
const UserLoginPage = lazy(() => import('./pages/UserLogin.tsx'));
const UserInfoPage = lazy(() => import('./pages/UserInfo.tsx'));
const YatriDataPage = lazy(() => import('./pages/YatriData.tsx'));
const AdminPage = lazy(() => import('./pages/Admin.tsx'));
const CreateNewPage = lazy(() => import('./pages/CreateNewUser.tsx'));

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
      <Route path='/user-info' element={<UserInfoPage />} />
      <Route path='/yatri-data' element={<YatriDataPage />} />
      {/* Apply route protection later below */}
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/admin/create-new' element={<CreateNewPage />} />
    </Route>
  </Route>
);

function App() {
  const router = createBrowserRouter(createRoutesFromElements(Root));
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
