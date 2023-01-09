let result: number[] = [];
export const x = (l: number, w: number): null | number[] => {
  if (l < w) {
    [l, w] = [w, l];
  }

  if (l === w) {
    return null;
  }

  const area = l * w;

  let min = w;
  if (area % (min * min) === 0) {
    for (let i = 0; i < Math.floor(area / (min * min)); i++) {
      result.push(min);
    }
  } else {
    for (let i = 0; i < Math.floor(area / (min * min)); i++) {
      result.push(min);
    }
    x(l - Math.floor(area / (min * min)) * w, w);
  }
  return result;
};

export const sqInRect = (l: number, w: number): null | number[] => {
  let z = x(l, w);
  result = [];
  return z;
};

console.log(sqInRect(20, 14));

/* export const sqInRect=(l:number, w:number): null|number[] =>{
  console.log(l, w);
  if (l === w) {
    return null;
  }
  return _sqInRect(l, w);
}

function _sqInRect(x: number, y: number): number[] {
  if (x < y) {
    return [x, ..._sqInRect(x, y-x)]
  }
  
  if (y < x) {
    return [y, ..._sqInRect(x-y, y)]
  }

  return [x];
} */
