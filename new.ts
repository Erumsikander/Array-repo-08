let arr : string [] = ["Saba" , "Hina" , "Subhan" , "Laiba" , "Abida"];
                     //    0        1         2        3         4
                     //   -5     -4       -3     -2        -1
    
console.log(arr[2]);

  // push = add 1 value in and.
  // unshift = add i value in start.
  // shift = delete 1 value in start.
  // pop = delete 1 value in end.


  arr.shift();             //  delete 1 value in start.
  arr.pop();               //  delete 1 value in end.
  arr.push("Erum");         // add 1 value in end. 
  arr.unshift("Bisma");      // add i value in start
  console.log(arr);