
numberStates = {ZERO: 0, ODD: 1, EVEN: 2}
var grades = [5, 10, 45, 15, 0, 40, 5, 38, 50, 0, 47, 32];
var highest = 0;
var lowest = Number.MAX_VALUE;
var totalGrade = 0;
var evenNumber = 0;
var numberState = 0; // if 0 = 0; if even = 2; if odd = 1


// make function that takes a number and returns the numberStates

var whatKindAmI = function(testNumber){
      var state;
        if (testNumber === 0) 
        {
            state = numberStates.ZERO
        } 
        else if (testNumber % 2 === 1)
        {
            state = numberStates.ODD
        } 
        else 
        {
            state = numberStates.EVEN
        }
  return state;
}

  var outputInfo = function(nState, theNumber) 
  {
      switch(nState) 
        {
        case numberStates.ZERO:
          console.log(theNumber + " - This number is 0");
          break;
        case numberStates.ODD: 
          console.log(theNumber + " is an odd number");
          break;
        case numberStates.EVEN: 
          console.log(theNumber + " is an even number");
        }

  }




for (i = 0; i < grades.length; i++) 
{
    totalGrade = totalGrade + grades[i];
    console.log("Number " + i + " in the array" + " is " + grades[i] + ".");
    console.log("Total grade is " + totalGrade);
    if (grades[i] > highest)
      highest = grades[i];
  
    if (grades[i] < lowest)
      lowest = grades[i];  

  numberState = whatKindAmI(grades[i]);
  

    outputInfo(numberState, grades[i]);
  
  
}

var averageGrade = totalGrade / grades.length;
console.log("Your overall grade average is " + averageGrade.toFixed(2));

//console.log("There are " + evenNumber + " even numbers in this array.");
console.log("Number of items in array is " + grades.length);
console.log("Highest number in array is " + highest);
console.log("Lowest number in array is " + lowest);
