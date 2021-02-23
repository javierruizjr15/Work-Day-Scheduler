

$('#currenDay').text(moment().format('MMMM Do YYYY'))
// var hour = moment().format('H mm');

// create an array to store time blocks to access.
var timeBlocks = []

var planEvent = JSON.parse(localStorage.getItem('planEvent')) || []


// creates section elements for timeblocks 9am-5pm
for (let i = 0; i <= 8; i++) {


  // create new section element, then add class,
  let block = $('<section>')
  block.addClass("row time-block")

  let ampm = ''
  if (i < 3) {
    ampm = "AM"
  } else {
    ampm = "PM"
  }


  // set innter HTMl for blocks
  block.html(`
    <div class="col-sm-1 hour">${(((i + 8) % 12) + 1)}${ampm}</div>
    <textArea class="col-sm-10"></textArea>
    <div class="col-sm-1 saveBtn">
      <i class="fa fa-save save"></i>
    </div>
  `)

  if (i + 9 < moment().hour()) {
    block.addClass('past')
  } else if (i + 9 > moment().hour()) {
    block.addClass('future')
  } else {
    block.addClass('present')
  }

  if (planEvent[i] !== undefined) {
    block.children("textArea").val(planEvent)
  }

  timeBlocks.push(block[0])
  $('#schedule').append(block)
}

$("*").click(event => {

  if ($(event.target).hasClass('save')) {

    let newEvent = $(event.target).parent().parent().children("textArea").val()

    let index = jQuery.inArray($(event.target).parent().parent()[0], timeBlocks)

    planEvent[index] = newEvent

    localStorage.setItem('planEvent', JSON.stringify(planEvent))
  }
})

// past present future shade start++
// 9 block start++
// nineshade = () => {

//   if (hour >= '10 00' && hour > '17 00') {
//     document.getElementById(9).classList.add('past');
//   }



//   else if (hour >= '9 00' && hour <= '9 59') {
//     document.getElementById(9).classList.add('present');
//   }



//   else if (hour < '9 00' && hour < '17 00') {
//     document.getElementById(9).classList.add('future');
//   }

// }

// // call the fuction
// nineshade();
// // 9 block end--


// // 10 block start++
// tenshade = () => {

//   if (hour >= '11 00' && hour > '17 00') {
//     document.getElementById(10).classList.add('past');
//   }



//   if (hour >= '10  00' && hour <= '10 59') {
//     document.getElementById(10).classList.add('present');
//   }



//   if (hour < '10 00' && hour < '17 00') {
//     document.getElementById(10).classList.add('future');
//   }

// }

// // call the fuction
// tenshade();
// // 10 block end--


// // 11 block start++
// elevenshade = () => {

//   if (hour >= '12 00' && hour > '17 00') {
//     document.getElementById(11).classList.add('past');
//   }



//   if (hour >= '11  00' && hour <= '11 59') {
//     document.getElementById(11).classList.add('present');
//   }



//   if (hour < '11 00' && hour < '17 00') {
//     document.getElementById(11).classList.add('future');
//   }

// }

// // call the fuction
// elevenshade();
// // 11 block end--

// // 12 block start++
// twelveshade = () => {

//   if (hour >= '12 00' && hour > '17 00') {
//     document.getElementById(12).classList.add('past');
//   }



//   if (hour >= '12  00' && hour <= '12 59') {
//     document.getElementById(12).classList.add('present');
//   }



//   if (hour < '12 00' && hour < '17 00') {
//     document.getElementById(12).classList.add('future');
//   }

// }

// // call the fuction
// twelveshade();
// // 12 block end--

// // 13 block start++
// thirteenshade = () => {

//   if (hour >= '13 00' && hour > '17 00') {
//     document.getElementById(13).classList.add('past');
//   }



//   if (hour >= '13  00' && hour <= '13 59') {
//     document.getElementById(13).classList.add('present');
//   }



//   if (hour < '13 00' && hour < '17 00') {
//     document.getElementById(13).classList.add('future');
//   }

// }

// // call the fuction
// thirteenshade();
// // 13 block end--


// // 14 block start++
// fourteenshade = () => {

//   if (hour >= '14 00' && hour > '17 00') {
//     document.getElementById(14).classList.add('past');
//   }



//   if (hour >= '14  00' && hour <= '14 59') {
//     document.getElementById(14).classList.add('present');
//   }



//   if (hour < '14 00' && hour < '17 00') {
//     document.getElementById(14).classList.add('future');
//   }

// }

// // call the fuction
// fourteenshade();
// // 14 block end--


// // 15 block start++
// fifteenshade = () => {

//   if (hour >= '15 00' && hour > '17 00') {
//     document.getElementById(15).classList.add('past');
//   }



//   if (hour >= '15  00' && hour <= '15 59') {
//     document.getElementById(15).classList.add('present');
//   }



//   if (hour < '15 00' && hour < '17 00') {
//     document.getElementById(15).classList.add('future');
//   }

// }

// // call the fuction
// fifteenshade();
// // 15 block end--

// // 16 block start++
// sixteenshade = () => {

//   if (hour >= '16 00' && hour > '17 00') {
//     document.getElementById(16).classList.add('past');
//   }



//   if (hour >= '16  00' && hour <= '16 59') {
//     document.getElementById(16).classList.add('present');
//   }



//   if (hour < '16 00' && hour < '17 00') {
//     document.getElementById(16).classList.add('future');
//   }

// }

// // call the fuction
// sixteenshade();
// // 16 block end--

// // seven block start++
// seventeenshade = () => {

//   if (hour >= '17 00' && hour > '17 00') {
//     document.getElementById(17).classList.add('past');
//   }



//   if (hour >= '17  00' && hour <= '17 59') {
//     document.getElementById(17).classList.add('present');
//   }



//   if (hour < '17 00' && hour < '17 00') {
//     document.getElementById(17).classList.add('future');
//   }

// }

// // call the fuction
// seventeenshade();
// 17 block end--
// past present future shade end--


