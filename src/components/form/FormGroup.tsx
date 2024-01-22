import { FC } from 'react';

// own components
import FormControl from './FormControl';
import Container from '../utility/Container';
import Divider from '../utility/Divider';

// interfaces
import InputObject from '../../interfaces/InputObject';
import ReferralInterface from '../../interfaces/ReferralInterface';

interface FormGroupInterface {
  getValue: (k: keyof ReferralInterface) => string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputs: InputObject[];
  title: string;
}

const FormGroup: FC<FormGroupInterface> = ({
  getValue,
  onChange,
  inputs,
  title,
}) => (
  <div className="form-group">
    <Divider title={title} />
    <Container>
      {inputs.map((input) => (
        <FormControl
          {...input}
          key={input.name}
          onChange={onChange}
          value={getValue(input.name)}
        />
      ))}
    </Container>
  </div>
);

export default FormGroup;
