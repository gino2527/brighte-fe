import { FC } from 'react';

// interfaces
import InputType from '../../interfaces/InputType';

interface FormControlProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  type?: InputType;
  value: string;
}

const FormControl: FC<FormControlProps> = ({
  label,
  name,
  onChange,
  type = 'text',
  value,
}) => (
  <div className="form-control">
    <label
      className="form-control__label"
      htmlFor={name}
    >
      {label}
    </label>
    <input
      className="form-control__input"
      onChange={onChange}
      name={name}
      type={type}
      value={value}
    />
  </div>
);

export default FormControl;
