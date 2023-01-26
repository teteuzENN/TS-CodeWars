function factorialize(num: number): number {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
}

export class G964 {
  public static dec2FactString = (nb: number): string => {
    let arrA = [
      "Z",
      "Y",
      "X",
      "W",
      "V",
      "U",
      "T",
      "S",
      "R",
      "Q",
      "P",
      "O",
      "N",
      "M",
      "N",
      "K",
      "J",
      "I",
      "H",
      "G",
      "F",
      "E",
      "D",
      "C",
      "B",
      "A",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "1",
      "0",
    ].reverse();
    let count = 1;
    let str = "";
    while (nb > 0) {
      let rest = nb % count;
      nb = Math.floor(nb / count);
      str += arrA[rest];
      count++;
    }
    function reverse(s: string): string {
      let split = s.split("");
      let rev = split.reverse();
      let join = rev.join("");
      return join;
    }
    let result = reverse(str);
    return result;
  };
  public static factString2Dec = (str: string): number => {
    const REG = /[A-Z]/;
    let len = str.length - 1;
    let num = 0;
    for (let i = 0; i < len; i++) {
      if (str[i].match(REG) === null) {
        num += +str[i] * factorialize(len - i);
      } else {
        num += (+str[i] - 55) * factorialize(len - i);
      }
    }
    return num;
  };
}
