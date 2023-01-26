export function josephusSurvivor(n: number, k: number) {
  const gameArr = [...Array(n + 1).keys()];
  gameArr.shift();
  let pointer = k;
  if (pointer > n) {
    pointer = (k - n) % n;
  }
  function game(): number {
    if (gameArr.length === 1) return gameArr[0];
    if (pointer === 0) {
      pointer = gameArr.length;
    }
    gameArr.splice(pointer - 1, 1);
    if (pointer + k - 1 > gameArr.length) {
      pointer += k - 1;
      pointer = pointer % gameArr.length;
    } else {
      pointer += k - 1;
    }
    return game();
  }
  return game();
}

console.log(josephusSurvivor(5, 300));

//ordem -> 6 , 8
