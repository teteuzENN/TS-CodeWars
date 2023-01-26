export function dblLinear(n: number): number {
  let u: number[] = [1],
    x: number = 0,
    y: number = 0;
  for (let i = 0; i < n; i++) {
    let nextX: number = 2 * u[x] + 1,
      nextY: number = 3 * u[y] + 1;
    if (nextX <= nextY) {
      u.push(nextX);
      x++;
      if (nextX == nextY) y++;
    } else {
      u.push(nextY);
      y++;
    }
  }
  return u[n];
}
