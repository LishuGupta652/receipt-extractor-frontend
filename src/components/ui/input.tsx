
import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange, className = '', ...rest }: InputProps) => {
  return (
    <input
      type="file"
      onChange={onChange}
      {...rest}
      className={`file:mr-4 file:py-2 file:px-4
                  file:rounded-md file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100 ${className}`}
    />
  );
};

export default Input;
