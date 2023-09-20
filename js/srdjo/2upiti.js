const broj1 = "1";
const broj2 = 1;

if (broj1 == broj2) {
  console.log("prva provera, tacno");
} else {
  console.log("prva provera, netacno");
}

if (broj1 === broj2) {
  console.log("druga provera, tacno");
} else {
  console.log("druga provera, netacno");
}

broj1 == broj2 ? console.log("treca provera, tacno") : console.log("treca provera, netacno");
