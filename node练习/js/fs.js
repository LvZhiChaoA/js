var fs = require("fs");

fs.readFile("../file.json","utf-8",function(error,data){
    console.log(typeof JSON.parse(data));
});