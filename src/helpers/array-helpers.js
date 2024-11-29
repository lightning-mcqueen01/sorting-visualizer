export function convertInputToArrayString(input) {
  input = input.replace(/\s/g, '');
  input = input.replace(/\d{4}/g, '');
  input = input.replace(/\s\s/g, ' ');
  input = input.replace(/\s,/g, ',');
  input = input.replace(/,,/g, ',');
  input = input.replace(/[^0-9,\s]/g, '');
  return input.split(',').join(', ').trim();
}

export function convertArrayStringToArray(input) {
  return input
    .split(',')
    .filter((v) => v !== '')
    .map((v) => +v);
}

export function getRndmNumInRange(lowerLimit = 0, upperLimit = 999) {
  return Math.floor(Math.random() * (upperLimit - lowerLimit)) + lowerLimit;
}

const shuffleArrayRandomly = (items) => {
  const n = items.length;
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * (n - i));

    // swap values
    const temp = items[n - i - 1];
    items[n - i - 1] = items[idx];
    items[idx] = temp;
  }

  return items;
};

export function configureArray(order, array) {
  switch (order) {
    case 'ascending':
      return [...array].sort((a, b) => a - b);

    case 'descending':
      return [...array].sort((a, b) => b - a);

    case 'random':
      return shuffleArrayRandomly([...array]);
  }

  return array;
}
