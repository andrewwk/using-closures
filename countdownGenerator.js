const countdownGenerator = (countdownStartPoint) => {
  let countdownList = ["Blast off!", "T-minus 1", "T-minus 2", "T-minus 3"]
  let index = countdownStartPoint
    return () => {
      if (index < 0) {
        console.log("Rockets aleady gone, bub!")
      } else {
        console.log(countdownList[index--])
      }
    }
};

let countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
