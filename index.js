function produceDrivingRange(blockRange) {
  return function range(block1, block2){
    // debugger
    let num = ((block2[0]+block2[1]) - (block1[0]+block1[1]))
    if (num > blockRange){
      let distanceTooFar = (num - blockRange)
      return `${distanceTooFar} blocks out of range`
    }
    else {
      let distanceWithin = (blockRange)
      return `within range by ${num}`
    }
    }
}
function produceTipCalculator(tipPercentage){
  return function tip(amount){
    return (tipPercentage * amount)
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
