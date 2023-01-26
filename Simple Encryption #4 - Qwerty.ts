const lines: string[] = [
  "qwertyuiop",
  "asdfghjkl",
  "zxcvbnm,.",
  "QWERTYUIOP",
  "ASDFGHJKL",
  "ZXCVBNM<>",
];

type Test = {
  arr: string;
  char: string;
  move: number;
  index: number;
};

export function encrypt(text: string, key: number): string {
  let x: Test[] = [];
  let res: string = "";
  let arrKey: string[] = key.toString().padStart(3, "0").repeat(2).split("");
  for (let i = 0; i < text.length; i++) {
    x.push({
      arr: lines.find((line) => line.indexOf(text[i]) !== -1) ?? "",
      char: text[i],
      move: +arrKey[lines.findIndex((line) => line.indexOf(text[i]) !== -1)],
      index: 0,
    });
    if (x[i].arr === "") {
      res += text[i];
    } else {
      x[i].index = (x[i].arr.indexOf(text[i]) + x[i].move) % x[i].arr.length;
      res += x[i].arr[x[i].index];
    }
  }
  return res;
}

export function decrypt(text: string, key: number): string {
  let x: Test[] = [];
  let res: string = "";
  let arrKey: string[] = key.toString().padStart(3, "0").repeat(2).split("");
  for (let i = 0; i < text.length; i++) {
    x.push({
      arr: lines.find((line) => line.indexOf(text[i]) !== -1) ?? "",
      char: text[i],
      move: +arrKey[lines.findIndex((line) => line.indexOf(text[i]) !== -1)],
      index: 0,
    });
    if (x[i].arr === "") {
      res += text[i];
    } else {
      x[i].index = x[i].arr.indexOf(text[i]) - x[i].move;
      if (x[i].index >= 0) {
        res += x[i].arr[x[i].index];
      } else {
        res += x[i].arr[x[i].arr.length + x[i].index];
      }
    }
  }
  return res;
}

encrypt("Ball", 134);
encrypt("Wave", 345);

decrypt(">fdd", 134);
decrypt("Tg.y", 345);
