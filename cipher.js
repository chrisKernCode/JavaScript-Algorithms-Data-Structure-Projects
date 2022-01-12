let regExp = /[A-Z]/
let arr = []

function rot13(str) {
   
  for (let i = 0; i < str.length; i++) {
    if (regExp.test(str[i])) {
      let strAscii = str.charCodeAt(i)
      // console.log(strAscii)
      if (strAscii <= 77) {
        // console.log(str)
        strAscii += 13 
        let strChar13 = String.fromCharCode(strAscii)
        // console.log(strChar13)
        arr.push(Array.from(strChar13))
        // console.log(arr)
  
        }
        else if (strAscii > 77) {
        // console.log(str)
          strAscii -= 13
          let strChar13 = String.fromCharCode(strAscii)
          // console.log(strChar13)
          arr.push(Array.from(strChar13))
          // console.log(arr)
      }
    // console.log((str[i]))
    // console.log(regExp.test(str))
    } else {
      arr.push(Array.from(str[i]))
      // console.log(arr)
    }

}
  let stringFinal = arr.join("").toString()
  return stringFinal;
}  

console.log(rot13("SERR PBQR PNZC"))