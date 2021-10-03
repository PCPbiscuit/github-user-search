import type { InputHTMLAttributes, FC } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  name?: string;
  onChange?: (e: { target: { name?: string; value: string } }) => void;
  tabIndex?: number;
}

export const Input: FC<InputProps> = ({
  placeholder,
  name,
  type,
  required,
  value,
  onChange,
  className,
  autoComplete,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={className}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      autoComplete={autoComplete ? 'on' : 'off'}
    />
  );
};
