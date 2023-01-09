export function brainLuck(code: string, input: string) {
  let pointer = 0;
  let output: string[] = [];
  let data: (string | number)[] = [0];
  let inputArr: (string | number)[] = input.split("");
  for (let i = 0; i < input.length; i++) {
    inputArr[i] = input.charCodeAt(i);
  }
  let i = 0;
  console.log(inputArr);
  while (i < code.length) {
    console.log(
      `i = ${i} pointer = ${pointer} data = ${data} output = ${output} inputArr = ${inputArr} ${code[i]}`
    );
    switch (code[i]) {
      case ">":
        pointer++;
        if (pointer === data.length) {
          data[pointer] = 0;
        }
        i++;
        break;
      case "<":
        pointer--;
        if (pointer < 0) pointer = 0;
        i++;
        break;
      case "+":
        data[pointer] = Number(data[pointer]) + 1;
        if (data[pointer] === 256) {
          data[pointer] = 0;
        }
        i++;
        break;
      case "-":
        data[pointer] = Number(data[pointer]) - 1;
        if (data[pointer] === -1) {
          data[pointer] = 255;
        }
        i++;
        break;
      case ".":
        if (data[pointer] === 0 || data[pointer] === 255) {
          i++;
          break;
        }
        output.push(String.fromCharCode(data[pointer] as number));
        i++;
        break;
      case ",":
        if (inputArr.length === 1 && inputArr[0] === 0) {
          i++;
          break;
        } else {
          data[pointer] = inputArr[0].toString();
          inputArr = inputArr.slice(1);
          i++;
        }
        break;
      case "[":
        if (data[pointer] === 0) {
          let stack: string[] = ["["];
          i++;
          while (stack.length > 0) {
            if (code[i] === "[") stack.push("[");
            else if (code[i] === "]") stack.pop();
            i++;
          }
          console.log(i);
        } else {
          i++;
        }
        break;
      case "]":
        if (data[pointer] !== 0) {
          let stack: string[] = ["]"];
          i--;
          while (stack.length > 0) {
            if (code[i] === "]") stack.push("]");
            else if (code[i] === "[") stack.pop();
            i--;
          }
          i += 2;
        } else {
          i++;
          console.log(i);
        }
        break;
      default:
        break;
    }
  }
  return output.join("");
}

console.log(brainLuck(",[.[-],]", "Codewars"));
/* 
//how to make sure if a element in type (string | number)[] is a number and not a string?
    let x: (string | number)[] = ["a", 1, "b", 2];
    x.forEach((e) => {
      if (typeof e === "number") {
        console.log(e);
      }
    } */

// find the correspondent brackets in an array of brackets

// function findCorrespondentBracket(arr: string[], index: number) {
//   let count = 0;
//   if (arr[index] === "[") {
//     for (let i = index; i < arr.length; i++) {
//       if (arr[i] === "[") {
//         count++;
//       } else if (arr[i] === "]") {
//         count--;
//       }
//       if (count === 0) {
//         return i;
//       }
//     }
//   } else if (arr[index] === "]") {
//     for (let i = index; i >= 0; i--) {
//       if (arr[i] === "]") {
//         count++;
//       } else if (arr[i] === "[") {
//         count--;
//       }
