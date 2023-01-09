export function cleanString(s: string): string | void {
  let x = s.split("");
  while (x.indexOf("#") !== -1) {
    if (x.indexOf("#") !== 0) {
      x.splice(x.indexOf("#") - 1, 2);
    } else {
      x.splice(0, 1);
    }
  }
  return x.join("");
}

console.log(cleanString("q3b##pm####63#H'"));
