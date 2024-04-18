import { useLocation } from 'react-router-dom';
import { userNavItems, adminNavItems } from '../../utils/app-data';
import logoImg from '../../assets/Org-Logo.png';
import Logo from './Logo';
import Button from './Button';

type HeaderProps = {
  title?: string;
};

function Header({ title }: HeaderProps) {
  const location = useLocation();
  const navItems = location.pathname.startsWith('/admin')
    ? adminNavItems
    : userNavItems;
  return (
    <div className='flex items-center justify-between px-3 py-2 bg-[#D9B471]'>
      <div className='flex flex-col gap-2'>
        <Logo className='w-14' src={logoImg} alt='org Logo' />
        <h2 className='text-sm font-semibold'>{title}</h2>
      </div>
      <nav className='flex items-center gap-2 text-center'>
        {navItems.map((navItem) => {
          const { id, name, to } = navItem;
          return (
            <Button key={id} btntype='small' to={to}>
              {name}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}

export default Header;
