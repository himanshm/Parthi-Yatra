import { userNavItems } from '../../utils/app-data';
import logoImg from '../../assets/Org-Logo.png';
import Logo from './Logo';

type HeaderProps = {
  title?: string;
};

function Header({ title }: HeaderProps) {
  return (
    <div className='flex items-center justify-between px-3 py-2 bg-[#D9B471]'>
      <div className='flex items-center gap-2'>
        <Logo className='w-14' src={logoImg} alt='org Logo' />
        <h2 className='text-sm font-semibold'>{title}</h2>
      </div>
      <nav className='flex items-center gap-2'>
        {userNavItems.map((navItem) => {
          const { id, name } = navItem;
          return (
            <li className='list-none' key={id}>
              {name}
            </li>
          );
        })}
      </nav>
    </div>
  );
}

export default Header;
