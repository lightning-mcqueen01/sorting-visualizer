import {
  highlightInterval,
  simulator,
  swapInterval,
} from '@/store/global.state';

import { delay } from '@/lib/helpers/async';

export async function* swap(array, i, j) {
  await simulator.isPlayingPromise;

  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  yield { type: 'swap', positions: [i, j] };
  await delay(swapInterval);

  await simulator.isPlayingPromise;
}

export async function* highlight(...positions) {
  yield { type: 'highlight', positions: [-1, -1] };
  await delay(highlightInterval);
  await simulator.isPlayingPromise;

  yield { type: 'highlight', positions };
  await delay(highlightInterval);

  await simulator.isPlayingPromise;
}

export async function* showPivot(position) {
  yield { type: 'pivot', position };
}

export async function* sort(position) {
  yield { type: 'sort', position: position };
}

export async function* move(...positions) {
  await simulator.isPlayingPromise;
  yield { type: 'move', positions };
  await delay(swapInterval);
}
