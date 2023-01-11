let result: number[] = [];

function calculateSum(ac: number, r: number[]) {
  ac = 0;
  r.map((e) => (ac = ac + Math.pow(e, 2)));
  return ac;
}

export const decompose = (n: number): null | number[] => {
  console.log(n);
  result = [];
  const x = (rest: number): void => {
    let newN = Math.floor(Math.sqrt(rest));
    if (result.indexOf(1) !== -1) return;
    while (newN >= result[result.length - 1]) {
      newN--;
    }
    if (newN > 0 && rest > 0) {
      rest = rest - newN * newN;
      result.push(newN);
      x(rest);
    }
  };
  if (n === 2 || n === 4) {
    return [];
  }
  result.push(n - 1);
  console.log(result);
  x(n * n - (n - 1) * (n - 1));
  console.log(result);
  let z: number = 0;
  z = calculateSum(z, result);
  while (z !== n * n) {
    if (result.indexOf(1) !== -1) {
      result.pop();
    }
    result[result.length - 1]--;
    z = calculateSum(z, result);
    x(n * n - z);
    z = calculateSum(z, result);
  }
  return result.sort((a, b) => a - b);
};
