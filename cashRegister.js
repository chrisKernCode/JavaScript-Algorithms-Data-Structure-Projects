function checkCashRegister(price, cash, cid) {

  var change = cash * 100 - price * 100;
  // console.log(change)

  let cidAmount = 0;
  // let diff = [i[0]]
  for (let i of cid) {
    // console.log(i)
    cidAmount += i[1]*100
    // console.log(cidAmount)
  }
  if (change > cidAmount) {
    return {status: "INSUFFICIENT_FUNDS", change: []}; 
  } else if (change === cidAmount) {
      return {status: "CLOSED", change: cid}
  } else {
      let output = [];
      cid=cid.reverse()
      // console.log(cid)
  
let unitType = { 'ONE HUNDRED': 10000 , 'TWENTY': 2000, 'TEN': 1000, 'FIVE': 500, 'ONE': 100, 'QUARTER': 25, 'DIME': 10, 'NICKEL': 5, 'PENNY': 1}

  for (let i of cid) {
    let arr = [i[0], 0]
    console.log(arr)
         i[1] = i[1]*100
         // console.log(i)
         while (change >= unitType[i[0]]  && i[1] > 0){
           // console.log(unitType[i[0]])
           change -= unitType[i[0]]
          // console.log(change)
           i[1] -= unitType[i[0]]
           // console.log(i[1])
           // console.log(i[0])
           arr[1] += unitType[i[0]]/100
         }
         // console.log(arr)
         if (arr[1]>0) {
           output.push(arr)
           console.log(output)
         }
        }
        if (change > 0) {
          return {status: "INSUFFICIENT_FUNDS", change: []}
      }
        return {status: "OPEN", change: output}
      }
    }

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);