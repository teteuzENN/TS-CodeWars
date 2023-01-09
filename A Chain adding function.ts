let kk = 0;

export function z(x: number) {
  kk = x;
}

export default function add(x: number): any {
  // receives the next number in the sequence
  const addNum = (next: any) => {
    // returns the outer function, with cumulative number so far as the argument
    return add(x + next);
  };

  // sets value of method of inner function to return value of x for final number
  addNum.valueOf = x;
  z(x);

  // returns addNum function which will be called with next number as argument
  return addNum;
}
add(1)(2)(3)(4)(5)(6)(7)(8)(9)(10);
console.log(kk);

/* export default function add(x: number): any {
  const fn = (y: number) => add(x + y);
  fn.valueOf = () => x;
  return fn;
} */
