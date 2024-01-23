import { FC } from 'react';

// libraries
import clsx from 'clsx';

// interfaces
import InputType from '../../interfaces/InputType';

interface FormControlProps {
  className?: string;
  inputClassName?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: InputType;
  value: string;
}

const FormControl: FC<FormControlProps> = ({
  className,
  inputClassName,
  inputRef,
  label,
  name,
  onChange,
  required = true,
  type = 'text',
  value,
}) => (
  <div className={clsx(['form-control', className])}>
    <label
      className="form-control__label"
      htmlFor={name}
    >
      {label}
    </label>
    {type === 'file' && value && (
      <img
        alt="form control file preview"
        className="form-control__image-preview"
        src={value}
      />
    )}
    <input
      className={clsx(['form-control__input', inputClassName])}
      onChange={onChange}
      name={name}
      ref={inputRef}
      required={required}
      type={type}
      value={type !== 'file' ? value : ''}
      {...type === 'tel' && {
        pattern: '[0-9]{4}-[0-9]{3}-[0-9]{3}',
      }}
      {...type === 'file' && {
        accept: 'image/png, image/gif, image/jpeg',
      }}
    />
  </div>
);

export default FormControl;
