import { ComponentPropsWithoutRef } from 'react';

type LogoProps = {
  src: string;
  alt: string;
} & ComponentPropsWithoutRef<'img'>;

function Logo({ src, alt, ...props }: LogoProps) {
  return <img src={src} alt={alt} {...props} />;
}

export default Logo;
