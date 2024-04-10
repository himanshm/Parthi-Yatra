import { ComponentPropsWithoutRef } from 'react';

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<'input'>;

function Input({ id, label, ...props }: InputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-[#049DD9]'
      >
        {label}
      </label>
      <input
        {...props}
        id={id}
        name={id}
        className='text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
        p-2.5 bg-[#D7D4E7] border-gray-500 placeholder-gray-400 text-gray-600'
      />
    </div>
  );
}

export default Input;
