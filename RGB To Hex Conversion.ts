export function rgb(r: number, g: number, b: number): string {
  let rHex: string;
  let gHex: string;
  let bHex: string;
  let result: string;
  if (r > 255) {
    r = 255;
  }
  if (g > 255) {
    g = 255;
  }
  if (b > 255) {
    b = 255;
  }
  if (r < 0) {
    r = 0;
  }
  if (g < 0) {
    g = 0;
  }
  if (b < 0) {
    b = 0;
  }
  if (r.toString(16).length === 1) {
    rHex = "0" + r.toString(16);
  } else {
    rHex = r.toString(16);
  }
  if (g.toString(16).length === 1) {
    gHex = "0" + g.toString(16);
  } else {
    gHex = g.toString(16);
  }
  if (b.toString(16).length === 1) {
    bHex = "0" + b.toString(16);
  } else {
    bHex = b.toString(16);
  }
  result = rHex + gHex + bHex;
  return result.toUpperCase();
}
