import { FC } from 'react';

// libraries
import clsx from 'clsx';

interface ButtonInterface {
  onClick: () => void,
  text: string;
  type?: 'button' | 'submit';
  variant?: 'default' | 'primary';
}

const Button: FC<ButtonInterface> = ({
  onClick,
  text,
  type = 'button',
  variant = 'default',
}) => {
  return (
    <button
      className={clsx(['button', variant])}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button;
