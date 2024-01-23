import { FC, useEffect, useState } from 'react';

// libraries
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// own components
import Button from '../../components/form/Button';
import PencilIcon from '../../components/icons/PencilIcon';
import TrashIcon from '../../components/icons/TrashIcon';
import Loader, { LOADER_CONTAINER_CLASS } from '../../components/utility/Loader';
import Table from '../../components/utility/Table';

// interfaces
import ReferralInterface from '../../interfaces/ReferralInterface';

// constants
import { REFERRAL_COLUMNS } from './constants';

const Referrals: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [referrals, setReferrals] = useState<ReferralInterface[]>([]);

  const navigate = useNavigate();

  const getReferrals = () => {
    setIsLoading(true);
    axios.get<ReferralInterface[]>('/referrals')
      .then((response) => {
        setReferrals(response.data);
      })
      .catch((err) => {
        console.log('An error occured', { err });
        alert('Check your API server');
        throw err;
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  const handleDeleteReferral = (id: string) => {
    if (window.confirm(`Do you want to delete referral with id: ${id}?`)) {
      setIsLoading(true);
      axios.delete(`/referrals/${id}`)
        .then(() => {
          alert(`Successfully deleted referral: ${id}`);
          getReferrals();
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
  };

  useEffect(() => {
    getReferrals();
  }, []);
  
  return (
    <div className={LOADER_CONTAINER_CLASS}>
      {isLoading && <Loader />}
      <div className="flex-end m-b-16">
        <Button
          onClick={() => navigate('/referrals/create')}
          text="Add Referral"
          variant="primary"
        />
      </div>
      <Table
        headers={[
          ...REFERRAL_COLUMNS,
          {
            key: 'actions',
            label: 'Actions',
            render: (v) => (
              <>
                <Button
                  onClick={() => { navigate(`/referrals/edit/${v.id}`); }}
                  text={<PencilIcon />}
                  variant="icon"
                />
                <Button
                  className="m-l-12"
                  onClick={() => { handleDeleteReferral(v.id); }}
                  text={<TrashIcon />}
                  variant="icon"
                />
              </>
            ),
          }
        ]}
        values={referrals}
      />
    </div>
  )
}

export default Referrals;
