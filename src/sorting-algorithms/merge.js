import { highlight, move, sort } from '@/helpers/algorithm-helpers';

export async function* mergeSort(
  array,
  i = 0,
  j = array.length - 1,
  isFinal = true
) {
  if (i === j) {
    if (isFinal && array.length === 1) {
      yield* sort(i);
    }

    return;
  }

  if (i < j) {
    const mid = Math.floor((i + j) / 2);
    yield* mergeSort(array, i, mid, false);
    yield* mergeSort(array, mid + 1, j, false);
    yield* merge(array, i, mid + 1, mid - i + 1, j - mid, isFinal);
  }
}

function shiftRight(array, start, end) {
  for (let i = end; i > start; i--) {
    array[i] = array[i - 1];
  }
}

async function* merge(array, i, j, size1, size2, isFinal) {
  let iMove = 0;
  let jMove = 0;

  while (iMove < size1 && jMove < size2) {
    const left = i + iMove,
      right = j + jMove;

    yield* highlight(left, right);

    if (array[left] <= array[right]) {
      iMove++;

      if (isFinal) {
        yield* sort(left);
      }
    }

    if (array[left] > array[right]) {
      const value = array[right];
      shiftRight(array, left, right);
      array[left] = value;

      yield* move(left, right);

      i++;
      jMove++;

      if (isFinal) {
        yield* sort(left);
      }
    }
  }

  for (let k = i + iMove; k < i + size1; k++) {
    yield* highlight(k);

    if (isFinal) {
      yield* sort(k);
    }
  }

  for (let k = j + jMove; k < j + size2; k++) {
    yield* highlight(k);

    if (isFinal) {
      yield* sort(k);
    }
  }
}
