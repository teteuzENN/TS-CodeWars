export function tribonacci(
  [a, b, c]: [number, number, number],
  n: number
): number[] {
  switch (n) {
    case 0:
      return [];
    case 1:
      return [a];
    case 2:
      return [a, b];
    default:
      let arr = [a, b, c];
      while (arr.length < n) {
        arr = [
          ...arr,
          arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 3],
        ];
      }
      return arr;
  }
}

/*
  
  What i learned with this question:
  
  To get the last item of an array you can use:
  
  newArr = [...oldArr].pop()
  
  other solution:
  
  export const tribonacci = ([a, b, c]: [number, number, number], n: number): number[] => n < 1 ? [] : [a].concat(tribonacci([b, c, a + b + c], n - 1)); 
  
  */
