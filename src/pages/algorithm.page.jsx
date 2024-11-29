import { useNavigate, useParams } from 'react-router-dom';

import SingleAlgorithmLayout from '@/layouts/single-algorithm.layout';
import { menuItems } from '@/config';
import { useEffect } from 'react';
import { Toaster } from 'sonner';

function AlgorithmPage() {
  const { algoName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!algoName) {
      navigate(`/${menuItems[0]}`);
    }
  }, [algoName, navigate]);

  return (
    <>
      <Toaster richColors duration={3000} />
      <SingleAlgorithmLayout />
    </>
  );
}

export default AlgorithmPage;
