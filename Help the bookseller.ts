type Books = [cha: string, qnt: number];
export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  if (listOfArt.length === 0 || listOfCat.length === 0) {
    return "";
  }
  let resArt: Books[] = [];
  let resCat: Books[] = [];

  listOfCat.map((item) => {
    resCat.push([item, 0]);
  });

  let cont = 0;
  listOfArt.map((item) => {
    let w = item.split(" ");
    resArt[cont] = [w[0][0], Number(w[1])];
    cont++;
  });

  resCat.map((item) => {
    resArt.forEach((element) => {
      if (element[0] === item[0]) {
        item[1] += element[1];
      }
    });
  });

  console.log(resCat);

  let str = "";
  resCat.forEach((item) => {
    str += `(${item[0]} : ${item[1]}) - `;
  });
  str = str.substring(0, str.length - 3);
  console.log(str);

  return str;
};

// other examples

/* export const stockList = (listOfArt: string[], listOfCat: string[]): string => {
  if (listOfArt.length === 0 || listOfCat.length === 0) return "";
  return listOfCat
    .map((char) => {
      const sum = listOfArt.reduce(
        (acc, str) => (str.startsWith(char) ? acc + +str.split(" ")[1] : acc),
        0
      );
      return `(${char} : ${sum})`;
    })
    .join(" - ");
}; */

/* export class G964 {
  public static stockList = (listOfArt: string[], listOfCat: string[]) => {
    if (listOfArt.length === 0 || listOfCat.length === 0) {
      return "";
    }

    const getBookNumber = (stock: string) => parseInt(stock.split(" ")[1], 10);
    const map = Object.create(null);

    listOfArt.forEach((book) =>
      map[book[0]] === undefined
        ? (map[book[0]] = getBookNumber(book))
        : (map[book[0]] += getBookNumber(book))
    );

    return listOfCat
      .map((char) => `(${char} : ${map[char] || 0}) - `)
      .join("")
      .slice(0, -3);
  };
} */
