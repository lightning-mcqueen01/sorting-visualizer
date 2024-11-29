import {
  getMovingAnimation,
  getSwapAnimation,
} from '@/helpers/key-frames-helpers';

import Cell from '@/components/cell/cell';
import { swapInterval } from '@/store/global.state';

function MovingCell({ originalOrder, isSwap, order, value, isHighlighted }) {
  let animation = getMovingAnimation(originalOrder - order, swapInterval);

  if (isSwap) {
    animation = getSwapAnimation(originalOrder - order, swapInterval);
  }

  return (
    <Cell
      animation={animation}
      order={order}
      value={value}
      isHighlighted={isHighlighted}
    />
  );
}

export default MovingCell;
