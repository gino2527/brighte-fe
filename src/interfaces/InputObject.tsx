import InputType from './InputType';
import ReferralInterface from './ReferralInterface';

interface InputObject {
  name: keyof ReferralInterface;
  label: string;
  type?: InputType;
}

export default InputObject;
