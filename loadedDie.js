
const loadedDie = (() => {
  let list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var index = 0;

  return () => {
    if (index === list.length -1) {
      index = 0;
    }
    return list[index++];
  }
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6
