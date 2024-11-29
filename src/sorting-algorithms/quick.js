import { highlight, showPivot, sort, swap } from '@/helpers/algorithm-helpers';

async function* partition(array, low, high) {
  const pivot = low;
  let i = low;
  let j = high + 1;

  yield* showPivot(pivot);

  while (i < j) {
    while (--j > low) {
      yield* highlight(j);
      if (array[j] < array[pivot]) {
        break;
      }
    }

    while (i <= high && i < j) {
      i++;
      yield* highlight(i);
      if (array[i] > array[pivot]) {
        break;
      }
    }

    if (i < j) {
      yield* swap(array, i, j);
    }
  }

  if (pivot !== j) {
    yield* swap(array, pivot, j);
  }

  yield* sort(j);
  return j;
}

export async function* quickSort(array, low = 0, high = array.length - 1) {
  if (low <= high) {
    const pivot = yield* partition(array, low, high);
    if (typeof pivot === 'number') {
      yield* quickSort(array, low, pivot - 1);
      yield* quickSort(array, pivot + 1, high);
    }
  }
}
