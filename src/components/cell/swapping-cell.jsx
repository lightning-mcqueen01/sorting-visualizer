import Cell from '@/components/cell/cell';
import { getSwapAnimation } from '@/helpers/key-frames-helpers';
import { swapInterval } from '@/store/global.state';

function SwappingCell({ originalOrder, order, value, isHighlighted }) {
  const animation = getSwapAnimation(originalOrder - order, swapInterval);

  return (
    <Cell
      animation={animation}
      order={order}
      value={value}
      isHighlighted={isHighlighted}
    />
  );
}

export default SwappingCell;
