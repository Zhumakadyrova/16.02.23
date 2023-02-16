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

