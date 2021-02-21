

var today = moment().format('MMMM Do YYYY, h:mm:ss a');
var hour = moment().format('LT');

console.log(hour)

document.getElementById('currentDay').innerHTML =

  `Today is: ${today}`;

nineshade = () => {
  console.log('test1')

  if (document.getElementById(9) < hour) {

    document.getElementById(9).classList.add('past');
    console.log('test')
  }
}

nineshade();

//   .classList.add('past');
// .classList.add('present');
// .classList.add('future');
