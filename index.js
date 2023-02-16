// Много уровневый массив
let example1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// matrix
let example2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];   

console.log(example1.length);
console.log(example2.length);

console.log(example1[2]);
console.log(example2[2]);
console.log(example1[4]);
console.log(example1[7]);
console.log(example2[1][1]);

let test = example2[2];
console.log(test[1]);

console.log(example2[1][2]);

for(let i =1; i < example1.length; i ++) {
  console.log(i);
}

// Цикл в много уровневом массиве
for( let a =0; a < example2.length; a ++) {
  for( let b =0; b < example2[a].length; b ++) {
    console.log(example2[a][b]);
  }  
}

let example3 = [4, 1, 7, 10, 11, 10, 33];
if(example3.includes(6)) {
  console.log("Yes");
}
else{ console.log("No");
}
let example4 = [5, 4, 1, 55, 1, 0, 2];
let example5 = [3, 11, 4, 15, 1, 2, 77];
let arrResult = []
function arrSort() {
  example4.forEach(value => {
    if(example5.includes(value) && !arrResult.includes(value)) {
      arrResult.push(value)
    }
  })
  return arrResult
}
let result = arrSort();
console.log(result);


let example6 = [6, 7, 8, 1, 2, 10, 1, 20];
let example7 = [8, 9, 2, 22, 3, 8, 2, 10];
let result2 = [];
function sort() {
  example6.forEach(value => {
    if(example7.includes(value) && !result2.includes(value)) {
      result2.push(value)
    }
  })
  return result2
}
let finalResult = sort();
console.log(finalResult);

let example8 = [5, 4, 1, 55, 1, 0, 2];
let example9 = [3, 11, 4, 15, 1, 2, 77];

for( let i =0; i < example8.length; i ++) {
  if( example9.includes(example8[i])) {
    console.log(example8[i]);
  }
}
 let example10 = ["a", "c", "f", "d", "b"];
 console.log(example10.reverse());
