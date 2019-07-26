// *3. При каждом изменении в коде нам приходится делать рестарт сервера! Как решить эту задачу? 
// (Подсказка - посмотреть сторонний модуль). При старте сервера ми не можем закрыть терминал 
// - иначе сервер остановится! Как справится с этой проблемой?




const http = require("http");
 
let message = "Hello World!";
http.createServer(function(request,response){
     
    console.log(message);
    response.end(message);
     
}).listen(3000, ()=>{
    console.log("Сервер начал прослушивание запросов");
});

// nodemon app.js
