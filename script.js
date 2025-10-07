function uniteUnique(...arr) {
let result = [];

for(let i = 0; i < arr.length; i++) {
let currentArray = arr[i]

for(let j = 0; j < currentArray.length; j++) {
  let value = currentArray[j];

  if (!result.includes(value)) {
    result.push(value);
  }
}
}
return result
}


console.log(uniteUnique([1, 2, 4], [2, 3, 5]));
