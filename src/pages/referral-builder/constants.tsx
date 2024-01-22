

// interfaces
import InputObject from '../../interfaces/InputObject';

export const PERSONAL_DETAILS_INPUTS: InputObject[] = [
  {
    label: 'Given Name',
    name: 'given_name',
  },
  {
    label: 'Surname',
    name: 'surname',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  {
    label: 'Phone',
    name: 'phone',
    type: 'tel',
  },
];

export const ADDRESS_INPUTS: InputObject[] = [
  {
    label: 'Home Name or #',
    name: 'home',
  },
  {
    label: 'Street',
    name: 'street',
  },
  {
    label: 'Suburb',
    name: 'suburb',
  },
  {
    label: 'State',
    name: 'state',
  },
  {
    label: 'Postcode',
    name: 'postcode',
  },
  {
    label: 'Country',
    name: 'country',
  },
];
