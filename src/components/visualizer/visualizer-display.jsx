import { useAppSelector } from '@/store/hooks';
import BarUI from '@/components/bar/bar-ui';
import CellUI from '@/components/cell/cell-ui';

function VisualizerDisplay(props) {
  const visualizerType = useAppSelector(
    (state) => state.sortViz.visualizerType
  );

  if (visualizerType === 'cell') {
    return <CellUI {...props} />;
  }

  if (visualizerType === 'bar') {
    return <BarUI {...props} />;
  }

  return null;
}

export default VisualizerDisplay;
