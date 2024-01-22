import { useCallback, useState } from 'react';

// own components
import Button from '../../components/form/Button';
import FormGroup from '../../components/form/FormGroup';
import Container from '../../components/utility/Container';

// interfaces
import ReferralInterface from '../../interfaces/ReferralInterface';

// constants
import { ADDRESS_INPUTS, PERSONAL_DETAILS_INPUTS } from './constants';

const ReferralBuilder = () => {
  const [referral, setReferral] = useState<ReferralInterface>({
    country: '',
    email: '',
    given_name: '',
    home: '',
    phone: '',
    postcode: '',
    state: '',
    street: '',
    suburb: '',
    surname: '',
  });

  const handleChange = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setReferral((prevReferral) => ({
      ...prevReferral,
      [name]: value,
    }));
  }, []);

  const getValue = useCallback((name: keyof ReferralInterface) => referral[name], [referral]);

  return (
    <div className="referral-builder">
      <h1>Referral Builder</h1>
      <FormGroup
        getValue={getValue}
        inputs={PERSONAL_DETAILS_INPUTS}
        onChange={handleChange}
        title="Personal Details"
      />
      <FormGroup
        getValue={getValue}
        inputs={ADDRESS_INPUTS}
        onChange={handleChange}
        title="Address"
      />
      <Container>
        <Button
          onClick={() => {}}
          text="Upload Avatar"
        />
        <Button
          onClick={() => {}}
          text="Create Referral"
          type="submit"
          variant="primary"
        />
      </Container>
    </div>
  )
}

export default ReferralBuilder