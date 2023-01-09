export function brainLuck(code: string, input: string) {
  let pointer = 0;
  let output: string[] = [];
  let data: (string | number)[] = [0];
  let inputArr: (string | number)[] = input.split("");
  for (let i = 0; i < input.length; i++) {
    inputArr[i] = input.charCodeAt(i);
  }
  let i = 0;
  while (i < code.length) {
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
        }
        break;
      default:
        break;
    }
  }
  return output.join("");
}
