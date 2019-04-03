//引入http模块,通过http模块搭建nodejs服务器
var http = require("http");
var fs = require("fs")
//通过http模块创建服务器
var server = http.createServer(function(request,response){
     //设置字符编码
     //设置cros
     response.setHeader("Access-Control-Allow-Origin","*");
     //设置响应的字符编码
     response.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
     response.write("有人访问我了！！·");
     response.end();
}).listen(8001);
