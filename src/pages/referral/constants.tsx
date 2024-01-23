import { TableHeader } from '../../components/utility/Table';

// interfaces
import ReferralInterface from '../../interfaces/ReferralInterface';

interface ReferralColumn extends TableHeader {
  key: keyof ReferralInterface | 'actions';
};

export const REFERRAL_COLUMNS: ReferralColumn[] = [
  {
    key: 'given_name',
    label: 'Given Name',
  },
  {
    key: 'surname',
    label: 'Surname',
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'phone',
    label: 'Phone',
  },
];