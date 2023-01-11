/* For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The i outside the brackets tells you that you have to multiply count of each atom inside the bracket on this i. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. i after the braces is optional. */

// Nome Numero
// () ler parte interna e aplicar o numero que vem depois

export function parseMolecule(formula: string): Record<string, number> {
  /* const regex = /[A-Z][a-z]?/g;
  const regexNum = /[0-9]/g;

  /*  const regex = /[A-Z][a-z]?/;
  const regexNum = /[0-9]/;
  let elementos: [string, number][] = [];
  let match = regex.exec(formula); */
  /* if (match) {
    while (formula.length > 0) {
      let match = regex.exec(formula);
      if (formula[match[0].length]?.match(regexNum)) {
        elementos.push([match[0], +formula[match[0].length]]);
        formula = formula.slice(match[0].length + 1, formula.length);
      } else {
        elementos.push([match[0], 1]);
        formula = formula.slice(match[0].length, formula.length);
      }
    }
  } */
  const result: string[] = []; //K4[ON(SO3)2]2
  const regex = /[A-Z][a-z]?[0-9]?/g;
  const regexNum = /[0-9]/g;
  const regex2 = /[A-Z][a-z]?/g;
  type lala = {
    x: string;
    y: number;
  };
  let aa: lala[] = [];
  let green: string[] = formula.match(regex);
  console.log(green[0].match(regexNum)[0]);
  if (typeof green === "object") {
    green.map((e) => {
      let x = "";
      let y = +e.match(regexNum) || 1;
      x = x || e.match(regex2)[0];
      y = y;
      aa.push({ x: x, y: y });
    });
  }

  console.log(formula.match(regex));
  console.log(aa);
  function splitUp(formula: string): string[] {
    let pilha: string[] = [];
    let section: string[] = [];
    let j = 0;
    for (let i = 0; i < formula.length; i++) {
      if (formula[i] === "[" || formula[i] === "(") {
        j++;
        pilha.push(formula[i]);
        section[j] = formula[i];
        while (pilha.length > 0 && i <= formula.length) {
          i++;
          if (formula[i] === "[" || formula[i] === "(") {
            pilha.push(formula[i]);
          } else if (formula[i] === "]" || formula[i] === ")") {
            pilha.pop();
          }
          section[j] += formula[i];
        }
        j++;
      } else {
        if (section[j]) section[j] += formula[i];
        if (!section[j]) section[j] = formula[i];
      }
    }
    for (let i = 0; i < section.length; i++) {
      if (
        section[i].indexOf("[", 1) !== -1 ||
        section[i].indexOf("(", 1) !== -1
      ) {
        console.log(section[i].slice(1, section[i].length - 1));
        splitUp(section[i].slice(1, section[i].length - 1));
      } else {
        result.push(section[i]);
      }
    }
    console.log(result);

    return section;
  }

  splitUp(formula);
  console.log(result);

  return {};
}

parseMolecule("K4[ON(SO3)2]2");

// resolver todos os colchetes. se apos o fechamento do colchetes tiver um numero
// adicionar a formula e executar
