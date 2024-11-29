import AlgorithmPage from './pages/algorithm.page';
import AllAlgorithmPage from './pages/all-algorithm.page';

export const router = [
  {
    path: '/',
    element: <AlgorithmPage />,
  },
  {
    path: '/all',
    element: <AllAlgorithmPage />,
  },
  {
    path: '/:algoName',
    element: <AlgorithmPage />,
  },
];
