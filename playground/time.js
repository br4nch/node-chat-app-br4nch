var moment = require('moment');

var date = moment();
console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();

console.log(someTimestamp);