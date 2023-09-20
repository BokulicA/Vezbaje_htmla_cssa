let broj1 = 5;
let broj2 = 2;

function saberi(a, b) {
  let rez = 0;
  rez = a + b;
  console.log(rez, "prva funkcija");
}

let oduzmi = (a, b) => {
  let rez = 0;
  rez = a - b;
  console.log(rez, "druga fukncija");
};

saberi(broj1, broj2);
saberi(5, 9);
oduzmi(broj1, broj2);
