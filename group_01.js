var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];


var employees = [atticus, jem, boo, scout, robert, mayella];


// ** SCOTT NOTES ** //

for( var i = 0; i<array.length; i++) {
  array[i]= (processEmployee(array[i]));
}

var max_bonus = 0.13;// defines the max_bonus on line 40
//process through the array selected by the bonusCalc for loop

function calculateSTI( array ){
  var newArray = [];

        newArray[0] = array[0]; //employee name

        var employeeNumber = array[1]; // employee number from original array
        var baseSalary = array[2]; //base salary from original array
        var reviewScore = array[3]; //review score from original array

  var bonus = getBasesSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
    if(bonus > max_bonus){
       bonus = max_bonus; //0.13 is a "magic number". no commentary or variable that defines purpose of number
    }

newArray[1] = bonus; // percentage of STI employee to receive
newArray[2] = Math.round(baseSalary * (1.0 + bonus)); // adjusted annual compensation
newArray[3] = Math.round(baseSalary + bonus); // total bonus rounded to nearest dollar

  }
}

caclulateSTI( employees )

//add switch case 2-5 from GROUP WORK and add comment below:
//add case 1 and 2 to bonusPercent switch in case the client changes mind about rating

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length += 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

  function getIncomeAdjustment(salary) {
    var incomeAdjustment = 0;
    salary = parseInt(salary);
    if(salary > 65000){
      incomeAdjustment = 0.01;
    }
    return incomeAdjustment;
  }

  // ** END SCOTTY ** //

// ** GROUP WORK erin, emily, me, brianna **

function processEmployees( array ) {
  for (var i = 0; i < array.length; i++) {
    this.name = array [i][0];
    // console.log(this.name);
    this.bonus = bonusPercent(array[i][1],array[i][2], array[i][3]);
    // console.log(this.bonus);
  }

}

processEmployees(employees);

function bonusPercent( idNumber, salary, employeeRating ){
  var bonusRate = 0;

// if (salary > "65000"){
//     return (bonusRate - 0.01)

  switch (employeeRating){
      case 3:
        bonusRate = 0.04;
       break;
      case 4:
        bonusRate = 0.06;
       break;
      case 5:
        bonusRate = 0.1;
       break;
       default:
       bonusRate = 0;

     }

console.log(bonusRate);

      if (idNumber.length < 5){
        console.log('go here');
        console.log(bonusRate);
        bonusRate += 0.05;
        // console.log(bonusRate);
      } else if (salary > "65000") {
        // console.log(bonusRate);
                    (bonusRate -= 0.01);
                    // console.log(bonusRate);
      } else if (bonusRate > 0.13){
        // console.log(bonusRate);
            return bonusRate === 0.13;
      } else {
            return (bonusRate);
    }
}
