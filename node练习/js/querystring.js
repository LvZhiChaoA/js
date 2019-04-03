var querystring = require("querystring");

var str = "name=jack&age=100";

console.log(typeof querystring.parse(str));
