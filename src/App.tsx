// libraries
import axios from 'axios';
import { createBrowserRouter } from 'react-router-dom';

// npm components
import { RouterProvider } from 'react-router-dom';

// own components
import Referrals from './pages/referral/Referrals';
import ReferralBuilder from './pages/referral-builder/ReferralBuilder';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const router = createBrowserRouter([
  {
    path: '/',
    element: <Referrals />,
  },
  {
    path: '/referrals/create',
    element: <ReferralBuilder />,
  },
  {
    path: '/referrals/edit/:referralId',
    element: <ReferralBuilder />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
