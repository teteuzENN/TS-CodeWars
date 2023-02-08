export const part = (n: number): string => {
  console.log(n);
  const enu = en(n);
  const res = prod(enu);
  let range = res[res.length - 1] - res[0];
  let average = enu.map((e) => e.reduce((a, b) => a * b));
  let unique = average.filter((element, index) => {
    return average.indexOf(element) === index;
  });
  unique.sort((a, b) => a - b);
  let x = unique.reduce((acc, current) => acc + current, 0);
  let y =
    unique.length % 2 === 0
      ? (unique[unique.length / 2 - 1] + unique[unique.length / 2]) / 2
      : unique[Math.floor(unique.length / 2)];
  return `Range: ${range} Average: ${(x / unique.length).toFixed(
    2
  )} Median: ${y.toFixed(2)}`;
};

function en(n: number): number[][] {
  const partitions: number[][] = [];
  const partition: number[] = [];

  function recursiveEnum(n: number, maxValue: number): void {
    if (n === 0) {
      partitions.push(partition.slice());
      return;
    }

    for (let i = Math.min(n, maxValue); i >= 1; i--) {
      partition.push(i);
      recursiveEnum(n - i, i);
      partition.pop();
    }
  }

  recursiveEnum(n, n);
  return partitions;
}

function prod(n: number[][]): number[] {
  const partitions = n;
  const products = new Set<number>();

  for (const partition of partitions) {
    products.add(partition.reduce((a, b) => a * b));
  }

  return Array.from(products).sort((a, b) => a - b);
}

console.log(part(50));
