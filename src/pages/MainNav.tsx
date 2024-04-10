import { Outlet } from 'react-router-dom';

import Header from '../components/UI/Header';

function MainNav() {
  return (
    <>
      <Header />
      <main className='p-10'>
        <Outlet />
      </main>
    </>
  );
}

export default MainNav;
