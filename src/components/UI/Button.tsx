import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
  children: ReactNode;
  to?: string;
  btntype:
    | 'primary'
    | 'small'
    | 'secondary'
    | 'round'
    | 'textOnly'
    | 'tertiary';
} & ComponentPropsWithoutRef<'button'>;

function Button({ children, to, btntype, ...props }: ButtonProps) {
  const base = `
    inline-block text-sm rounded-full bg-[#D9B471] font-semibold uppercase tracking-wide text-stone-800
    transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300
    focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed
  `;

  const sizes = {
    primary: 'w-full px-4 py-3 md:px-6 md:py-4',
    small: 'px-1 md:px-5 md:py-2.5 text-xs',
    round: 'px-2.5 py-1 md:px-3.5 md:py-2',
    secondary:
      'w-20 px-5 py-2.5 md:px-6 md:py-3.5 border-2 border-stone-300 text-stone-400 hover:text-stone-800',
    tertiary: 'w-20 px-5 py-3',
    textOnly:
      'inline-block text-sm font-semibold text-[#049DD9] hover:text-[#047BA9] focus:outline-none focus:text-[#046587]',
  };

  const style =
    btntype === 'textOnly' ? sizes[btntype] : `${base} ${sizes[btntype]}`;

  if (to) {
    return (
      <Link to={to} className={style}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} className={style}>
      {children}
    </button>
  );
}

export default Button;
