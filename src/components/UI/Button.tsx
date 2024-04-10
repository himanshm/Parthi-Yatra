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

interface ButtonStyles {
  primary: string;
  small: string;
  secondary: string;
  round: string;
  textOnly: string;
  tertiary: string;
}

function Button({ children, to, btntype, ...props }: ButtonProps) {
  const base =
    'inline-block text-sm rounded-full bg-[#D9B471] font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles: ButtonStyles = {
    primary: base + ' w-full px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-1 md:px-5 md:py-2.5 text-xs',
    round: base + ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'inline-block w-20 text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:outline-none focus:text-stone-800 focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-5 py-2.5 md:px-6 md:py-3.5',
    tertiary: base + ' px-5 py-3 w-20',
    textOnly: 'inline-block text-sm font-semibold text-[#049DD9] ',
  };

  if (to) {
    return (
      <Link to={to} className={styles[btntype]}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} className={styles[btntype]}>
      {children}
    </button>
  );
}

export default Button;
