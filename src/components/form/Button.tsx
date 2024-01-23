import { FC, ReactNode } from 'react';

// libraries
import clsx from 'clsx';

interface ButtonInterface {
  className?: string;
  onClick: () => void,
  text: string | ReactNode;
  type?: 'button' | 'submit';
  variant?: 'default' | 'icon' | 'primary';
}

const Button: FC<ButtonInterface> = ({
  className,
  onClick,
  text,
  type = 'button',
  variant = 'default',
}) => (
  <button
    className={clsx(['button', variant, className])}
    onClick={onClick}
    type={type}
  >
    {text}
  </button>
);

export default Button;
