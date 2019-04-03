var http = require("http");
var fs = require("fs");
var querystring = require("querystring");
http.createServer(function (request,response) {
    //设置跨域
    response.setHeader("Access-Control-Allow-Origin","*");
    //设置响应的字符编码
    response.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    var info = null;
    var strData = "";
//  var tData = "asdzxcqwe";
    request.on("data",function (data) {
        strData += data;
    });
    request.on("end",function () {
        strData = querystring.parse(strData);
        fs.readFile("login.json","utf8",function (error,data) {
             var userData = JSON.parse(data);
             if(strData.user == userData.user && strData.pass == userData.pass){
                 info = {"code":0,"message" : "success","token" : "成功"};
                response.write(JSON.stringify(info,null,4));
             }else{
                 info = {"code":1,"message" : "error","token" : "失败"};
                 response.write(JSON.stringify(info,null,4));
             }
             response.end();
        })
    })
}).listen(8021);
