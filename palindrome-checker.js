function palindrome(str) {
// Check for valid string
 if(!str || str.length < 2 || 
            typeof str!== 'string') {
        return 'no string!'; 
    }
    
// remove all non-alphanumeric characters in string, put to lower-case, split
const lowerStr = str.toLowerCase().replace(/[^0-9a-z]/gi, '');
  console.log(lowerStr)

// reverse string 
const reverseStr = lowerStr.split("").reverse().join("")
console.log(reverseStr)
// check if they are the same
return lowerStr === reverseStr;
}

console.log(palindrome("racfecar"));