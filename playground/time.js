const moment = require('moment');

var date  = moment();

//console.log(date.format('MMM Do YYYY'));
date.subtract(8, "h");
date.subtract(49,"minutes");
console.log(date.format('H:mm a'));