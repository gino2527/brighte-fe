import { useCallback, useEffect, useState } from 'react';

// libraries
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

// own components
import Button from '../../components/form/Button';
import FormGroup from '../../components/form/FormGroup';
import LeftArrowIcon from '../../components/icons/LeftArrowIcon';
import Container from '../../components/utility/Container';
import Loader, { LOADER_CONTAINER_CLASS } from '../../components/utility/Loader';

// interfaces
import ReferralInterface from '../../interfaces/ReferralInterface';

// constants
import { ADDRESS_INPUTS, PERSONAL_DETAILS_INPUTS } from './constants';

const ReferralBuilder = () => {
  const [isLoading, setIsLoading] = useState(false);
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
  
  const navigate = useNavigate();
  const { referralId } = useParams();

  const handleChange = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setReferral((prevReferral) => ({
      ...prevReferral,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formAction = e.target.getAttribute('action') as string;
    const formMethod = e.target.getAttribute('method') as 'post' | 'put';

    setIsLoading(true);
    axios({
      data: referral,
      method: formMethod,
      url: formAction,
    })
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        setIsLoading(false);
        console.log('An error occured', { err });

        if (err.response.status === 422) {
          const errorData = err.response.data;
          const errorMessages = Object.values(errorData.errors).map((err) => `- ${(err as string[])[0]}`);
          alert(`${errorData.message}\n\n${errorMessages.join('\n')}`);
        } else {
          alert('Check your API server');
          throw err;
        }
      });
  }, [navigate, referral]);

  const getValue = useCallback((name: keyof ReferralInterface) => referral[name], [referral]);

  useEffect(() => {
    if (referralId) {
      setIsLoading(true);
      axios.get<ReferralInterface>(`/referrals/${referralId}`)
        .then(({ data }) => {
          setReferral(data);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            alert('Referral not found.')
            navigate('/');
          } else {
            alert('Check your API server');
            throw err;
          }
        })
        .then(() => {
          setIsLoading(false);
        });
    }
  }, [navigate, referralId]);

  return (
    <form
      action={referralId ? `/referrals/${referralId}` : '/referrals'}
      className={`referral-builder ${LOADER_CONTAINER_CLASS}`}
      method={referralId ? 'PUT' : 'POST'}
      onSubmit={handleSubmit}
    >
      {isLoading && <Loader />}
      <div className="m-b-16">
        <Button
          className="flex-center"
          onClick={() => navigate('/')}
          text={
            <>
              <LeftArrowIcon />
              Back
            </>
          }
          variant="icon"
        />
      </div>
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
          text={`${referralId ? 'Update' : 'Create'} Referral`}
          type="submit"
          variant="primary"
        />
      </Container>
    </form>
  )
}

export default ReferralBuilder