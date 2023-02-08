export function isInteresting(n: number, awesomePhrases: number[]): number {
  if (n < 98) return 0;
  const testNumbers = [n, n + 1, n + 2];
  let result = 0;
  testNumbers.forEach((element, index) => {
    if (allZero(element, index) === 2) result = 2;
    if (allZero(element, index) === 1 && result === 0) result = 1;
    if (sameNumber(element, index) === 2) result = 2;
    if (sameNumber(element, index) === 1 && result === 0) result = 1;
    if (isSequencialA(element, index) === 2) result = 2;
    if (isSequencialA(element, index) === 1 && result === 0) result = 1;
    if (isSequencialD(element, index) === 2) result = 2;
    if (isSequencialD(element, index) === 1 && result === 0) result = 1;
    if (isPalindrome(element, index) === 2) result = 2;
    if (isPalindrome(element, index) === 1 && result === 0) result = 1;
    if (matchAwesome(element, index, awesomePhrases) === 2) result = 2;
    if (matchAwesome(element, index, awesomePhrases) === 1 && result === 0)
      result = 1;
    if (element < 100) result = 0;
  });
  return result;
}

function allZero(n: number, index: number): number {
  const regex = /([1-9])0+0+/g;
  console.log(n, index);
  let match = n.toString().match(regex);
  if (match && match[0] === n.toString()) {
    if (index === 0) return 2;
    return 1;
  }
  return 0;
}

function sameNumber(n: number, index: number): number {
  const regex = /([1-9])\1+/g;
  let match = n.toString().match(regex);
  if (match && match[0] === n.toString()) {
    if (index === 0) return 2;
    return 1;
  }
  return 0;
}

function isSequencialA(n: number, index: number): number {
  let arr = n.toString().split("");
  while (arr.length >= 2) {
    let num: number = +arr[0];
    if (num !== 9) {
      num++;
    } else {
      num = 0;
    }
    if (num === +arr[1]) {
      arr.shift();
    } else {
      return 0;
    }
  }
  if (index === 0) return 2;
  return 1;
}

function isSequencialD(n: number, index: number): number {
  let arr = n.toString().split("");
  while (arr.length >= 2) {
    let num: number = +arr[0];
    num--;
    if (num === +arr[1]) {
      arr.shift();
    } else {
      return 0;
    }
  }
  if (index === 0) return 2;
  return 1;
}

function isPalindrome(n: number, index: number): number {
  let str = n.toString();
  let strReverse = str.split("").reverse().join("");
  if (str === strReverse) {
    if (index === 0) return 2;
    return 1;
  }
  return 0;
}

function matchAwesome(
  n: number,
  index: number,
  awesomePhrases: number[]
): number {
  let final = 0;
  let res = awesomePhrases.map((element) => {
    let match = n.toString().match(element.toString());
    if (match) {
      if (index === 0) return 2;
      return 1;
    }
    return 0;
  });
  res.map((e) => {
    if (e === 2) final = 2;
    if (e === 1 && final === 0) final = 1;
  });
  return final;
}

console.log(isInteresting(98, []));

/* export function isInteresting(n: number, awesomePhrases: number[]): number {
  return checkInteresting(n, awesomePhrases) ? 2 : 
          checkInteresting(n + 1, awesomePhrases) 
          || checkInteresting(n + 2, awesomePhrases) ? 1 : 0;
}

const checkInteresting = (n: number, awesomePhrases: number[]): boolean => {
  const nArr = n.toString().split('').map(Number);
  
  return nArr.length >= 3 && (
      /^\d0+$/.test(n.toString())
      || /^(\d)\1{2,}$/.test(n.toString())
      || awesomePhrases.includes(n)
      || '1234567890'.includes(n.toString())
      || '9876543210'.includes(n.toString())
      || nArr.slice().reverse().every((e, i) => e == nArr[i])
  );
} */

/* 
  export function isInteresting(n: number, awesomePhrases: number[]): number {
  if (checkNumber(n, awesomePhrases)) {
    return 2;
  }
  
  if (checkNumber(n + 1, awesomePhrases) || checkNumber(n + 2, awesomePhrases)) {
    return 1;
  }

  return 0;
}

function checkNumber(n: number, awesomePhrases: number[]): boolean {
  return `${n}`.length > 2 && (
    isNumberFollowedByZeros(n) || 
    areAllDigitEqual(n) || 
    areDigitsSequentialAndIncreamenting(n) || 
    areDigitsSequentialAndDecreamenting(n) || 
    isPalindrome(n) || 
    isAwesomeNumber(n, awesomePhrases)
  );
}

function isNumberFollowedByZeros(n: number): boolean {
  const match = `${n}`.match(/^\d0*$/);
  return match !== null;
}

function areAllDigitEqual(n: number): boolean {
  return new Set([...`${n}`]).size === 1;
}

function areDigitsSequentialAndIncreamenting(n: number): boolean {
  return `01234567890`.includes(`${n}`);
}

function areDigitsSequentialAndDecreamenting(n: number): boolean {
  return `9876543210`.includes(`${n}`);
}

function isPalindrome(n: number): boolean {
  return `${n}` === [...`${n}`].reverse().join("");
}

function isAwesomeNumber(n: number, awesome: number[]): boolean {
  return awesome.includes(n);
}
*/
