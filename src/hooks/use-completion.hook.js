import { useEffect, useRef, useState } from 'react';

function useCompletion(count, reset) {
  const [isComplete, setIsComplete] = useState(false);
  const completionCount = useRef(0);

  useEffect(() => {
    completionCount.current = 0;
    setIsComplete(false);
  }, [reset]);

  function onComplete() {
    completionCount.current++;
    if (completionCount.current === count) {
      setIsComplete(true);
    }
  }

  return { onComplete, isComplete };
}

export default useCompletion;
