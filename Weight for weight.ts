type x = {
  value: number;
  peso: number;
};

const str = "56 65 74 100 99 68 86 180 90";

const arr = str.split(" ").map((item) => {
  let pesoConta = 0;
  for (let i = 0; i < item.length; i++) {
    pesoConta += Number(item[i]);
  }
  return {
    value: Number(item),
    peso: pesoConta,
  };
});

console.log(arr);
