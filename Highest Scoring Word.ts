export const high = (str: string): string => {
  let x = str.split(" ");
  let ref: [string, number] = ["", 0];
  x.forEach((e) => {
    let sum = 0;
    for (let i = 0; i < e.length; i++) {
      sum += e.charCodeAt(i) - 96;
    }
    if (sum > ref[1]) ref = [e, sum];
  });
  console.log(ref);
  return ref[0];
};

high("aaa b");
