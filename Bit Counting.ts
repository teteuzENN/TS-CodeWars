export function countBits(n: number): number {
    const binary = n.toString(2);
    console.log(binary);
    return binary.split('').filter((bit) => bit === '1').length;
}

countBits(1234);


/* 
    what i learned with this question:

    how to convert a number to binary string?

    use the method toString from Number class
    this method acepts the base you want to convert the number to
    and returns a string with the conversion result

    the split method splits the string into substrings when the argument matches
    and then return an array with the substrings

    the filter method filters a array of string when the callback function returns true.

*/


/* 
    other example:

    export function countBits(n: number) {
         return n.toString(2)
            .split('')
            .map(Number) convert every bit to number
            .filter(Boolean) filter true thus every number 1
            .length; 
}

*/