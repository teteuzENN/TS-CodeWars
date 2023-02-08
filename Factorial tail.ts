// se a base for um número primo e o num for menor que ele -> 0
// se a base for expoente de 2
// se a base for expoente de 10

const PRIMOS = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
  157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
  239, 241, 251,
];

export const zeroes = (base: number, num: number) => {
  if (PRIMOS.indexOf(base) !== -1 && num < base) {
    return 0;
  }
  if (base === 2 && Number.isInteger(Math.log2(num))) {
    return num - 1;
  }
  if (PRIMOS.indexOf(base) !== -1) {
    let count = 0;
    let x = base;
    while (Math.floor(num / x) > 0) {
      count += Math.floor(num / x);
      x *= base;
    }
    return count;
  }
  if (base === 10) {
    let count = 0;
    let x = 5;
    while (Math.floor(num / x) > 0) {
      count += Math.floor(num / x);
      x *= 5;
    }
    return count;
  }
  if (Number.isInteger(Math.log2(base))) {
    console.log("entrou");
    let count = 0;
    let x = 2;
    while (Math.floor(num / x) > 0) {
      count += Math.floor(num / x);
      x *= 2;
    }
    return Math.floor(count / Math.log2(base));
  }
  return notSimple(base, num);
};

function notSimple(base: number, num: number): number {
  let baseDecomp: number[] = primeFactorization(base);
  console.log(baseDecomp);
  let factorDecomp: number[] = [];
  let factorArr: number[] = Array.from({ length: num }, (_, i) => i + 1);
  let numberOf: number[] = [];
  factorArr.forEach((element) => {
    let instance = primeFactorization(element);
    instance.forEach((e) => {
      if (baseDecomp.indexOf(e) !== -1) {
        factorDecomp.push(e);
      }
    });
  });
  let unique = baseDecomp.filter((element, index) => {
    return baseDecomp.indexOf(element) === index;
  });
  unique.forEach((element) => {
    numberOf.push(
      Math.floor(
        factorDecomp.filter((e) => e === element).length /
          baseDecomp.filter((e) => e === element).length
      )
    );
    console.log(element, numberOf);
  });
  console.log(numberOf);
  numberOf.sort((a, b) => a - b);
  console.log(numberOf);
  return numberOf[0];
}

function primeFactorization(num: number): number[] {
  let factors = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num /= i;
    }
  }
  return factors;
}

console.log(zeroes(10, 1000000));
