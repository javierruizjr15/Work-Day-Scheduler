

var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var hour = moment().format('H mm');

console.log(hour)

document.getElementById('currentDay').innerHTML =

  `Today is: ${today}`;


// past present future shade start++
// 9 block start++
nineshade = () => {

  if (hour >= 10 & hour > 17) {


    document.getElementById(9).classList.add('past');
  }



  if (hour >= 9 && hour <= '9 59') {
    document.getElementById(9).classList.add('present');
  }



  if (hour < 9 && hour < 17) {
    document.getElementById(9).classList.add('future');
  }

}

// call the fuction
nineshade();
// 9 block end--


// 10 block start++
tenshade = () => {

  if (hour >= 11 & hour > 17) {


    document.getElementById(9).classList.add('past');
  }



  if (hour >= 10 && hour <= '10 59') {
    document.getElementById(9).classList.add('present');
  }



  if (hour < 10 && hour < 17) {
    document.getElementById(9).classList.add('future');
  }

}
// call the function
tenshade();

// 10 block end--


// past present future shade end--


//   .classList.add('past');
// .classList.add('present');
// .classList.add('future');
