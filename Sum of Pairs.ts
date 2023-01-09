/* Sum of Pairs

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest i is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest i
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest i
== [3, 7]

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out. */

export function sumPairs(
  arr: number[],
  sumLook: number
): [number, number] | void {
  let result: [number, number] | undefined;
  let menor: number | undefined;
  let arrRef = [...arr];
  let z = arr.indexOf(sumLook / 2);
  if (z !== -1 && arr.indexOf(sumLook / 2, z + 1) !== -1) {
    result = [sumLook / 2, sumLook / 2];
    menor = arr.indexOf(sumLook / 2, z + 1);
  }
  arr = arr.filter((e, index) => arr.indexOf(e) === index);
  arr.forEach((e, index) => {
    let numbersL = sumLook - e;
    if (
      arr.indexOf(numbersL) !== -1 &&
      arrRef.indexOf(e) < arrRef.indexOf(numbersL)
    ) {
      if (menor === undefined) {
        menor = arrRef.indexOf(numbersL);
        result = [e, numbersL];
      }
      if (arrRef.indexOf(numbersL) < menor) {
        menor = arrRef.indexOf(numbersL);
        result = [e, numbersL];
      }
      arr.splice(index, 1);
      arr.splice(arr.indexOf(numbersL), 1);
    }
  });
  return result;
}
