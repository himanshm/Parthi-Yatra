import { Outlet } from 'react-router-dom';

import Header from '../components/UI/Header';

function MainNav() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainNav;
