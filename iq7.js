function convertTemp(args) {
    let secondArray = []
    let newArray = [...args]
    if (newArray[newArray.length - 1] === "F"){
    for (index of newArray){
      if (!isNaN(index)){
        secondArray.push(index)
        let reverse = parseInt(secondArray.join(''))
        (reverse )
        return `${math.round((32 + (reverse * .5556)))}°C`
      }
  }
  } if (newArray[newArray.length - 1] === "C"){
    for (index of newArray){
      if (!isNaN(index)){
        secondArray.push(index)
        let reverse = parseInt(secondArray.join(''))
       return `${math.round(((reverse * 1.8) + 32))}°F`
      }
  
  }
  }
  else return "Error"
  }