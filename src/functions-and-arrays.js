// Progression #1: Greatest of the two numbers
// if n1 is greater it will returns n1
// if n2 is greater it will returns n2
function greatestOfTwoNumbers(n1, n2){
  if(n1 > n2){return n1;}
  else {return n2;}
}
// Progression #2: The lengthy word
// if array is empty it returns null;
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words){
  if(words.length == 0)return null;
  else{
    var max = 0;
    var maxWord = "";
    for(const element of words){
      if(element.length > max){
        max = element.length;
        maxWord = element;
      }
    }
    return maxWord;
  }
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// returns zero if arr is empty or given all elements are zero
// else returns sum of the array elements
function netPrice(numbers){
  var sum = 0;
  if(numbers.length == 0)return 0;
  for(var ele of numbers){
    if(ele != 0){
      sum += ele;
    }
  }
  return sum;
}

// Progression #4: Calculate the average

//It returns 0 if empty array is given or if all the elements are 0
//If one number is given in array it will return the number
//Else it returns the sum of the elements in the array
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function add(numbers){  
  let sum=0;
  for(const element of numbers){
    if(typeof element=='string'){      
        sum = sum + element.length;    
    } 
    else if(element==true){
      sum = sum+1;
    }
    else if(element==false){
      sum = sum +0;
    }
    else if(typeof element==="number"){      
        sum = sum + element;      
    }    
    else throw Error("Unsupported data type sir or ma'am");
  }      
  return sum; 
}

// Progression 4.1: Array of numbers

const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function midPointOfLevels(numbersAvg){
  let sum = 0;
  if(numbersAvg.length==0){
    return null;
  }
  else{
  for(const element of numbersAvg){
    sum = sum+element;    
  }
  return sum/numbersAvg.length;
}

// Progression 4.2: Array of strings
}
function averageWordLength(wordsArr){
  let sum=0;
  if(wordsArr.length==0){
    return null;
  }
  else{
  for(const element of wordsArr){
    sum = sum + element.length;
  }
  return sum/wordsArr.length;
}
}
function avg(mixedArr){
  let sum=0;
  if(mixedArr.length==0){
    return null;
  }
  else{
  for(const element of mixedArr){
    if(typeof(element) == 'string'){
      sum = sum+element.length;
    }
     else if(element==true){
      sum = sum + 1;      
    }
    else if(element==false){
      sum = sum + 0;      
    }
    else {
      sum = sum+element;
    }
  }
  return parseFloat( (sum/mixedArr.length).toFixed(2));
}
}

// Progression #5: Unique arrays
// return null if empty array is given
// else it returns the unique elements in the array
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique) {
  var dummy = [];
  if (wordsUnique.length == 0) {
    return null;
  } else {
    for (var i = 0; i < wordsUnique.length; i++) {
      for (var j = i + 1; j < wordsUnique.length - 1; j++) {
        if (wordsUnique[i] != wordsUnique[i + 1]) {
          dummy[i] = wordsUnique[i];
        }
      }
    }
    return dummy;
  }
}
// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
// if array is empty it returns null;
// else it checks the element present in the array and returns true;
function searchElement(wordsFind, ele){
  if(wordsFind.length == 0)return null;
  else{
    for(const element of wordsFind){
      if(element == ele){
        return true;
      }
    }
  }
}

// Progression #7: Count repetition
//returns 0 if empty array is given
//else it returns the number of times the element is present in the array
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimesElementRepeated(wordsCount, _count) {
  var count = 0;
  for (const element of wordsCount) {
    if (element == _count) {
      count = count + 1;
    }
  }
  return count;
}

// Progression #8: Bonus
//Return 1 when all the elements in the array are 1

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(matrix) {
  var sum = 0;
  for (const element of matrix) {
    for (var j = 0; j < element.length; j++) {
     
      sum = sum + element[j];
    }
  }
  var len = matrix.length * matrix.length;
  if (sum == len) {
    return 1;
  }
}