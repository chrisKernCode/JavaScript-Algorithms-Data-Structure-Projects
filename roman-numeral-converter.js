function convertToRoman(num) {
// object
const romanNumbers = { 1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X",40: "XL", 50: "L", 90: "XC", 100: "C", 400:"CD", 500: "D", 900: "CM", 1000: "M" }
// array of keys reversed
const numKeys = Object.keys(romanNumbers).reverse();
// console.log(keys);
let translateToRoman = "";
// while loop start from highest to lowest rom
numKeys.forEach(rom => {
  while (rom <= num) {
    translateToRoman += romanNumbers[rom];
    num -= rom;
}
})

return translateToRoman;
}

console.log(convertToRoman(36));