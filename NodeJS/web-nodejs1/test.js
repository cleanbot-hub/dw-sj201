//console.log(100);

var http=require('http');
var fs=require('fs');
var url=require('url');

var app=http.createServer(function(request,response){
    var _url=request.url;
    var query =url.parse(_url,true).query;
    //console.log(query.part);
    var title = query.part;
    if(request.url=='/'){
       // _url='/index.html'; //여기 있는 페이지만 보여진다.
       title='nodeJS 테스트';
    }
    if(request.url=='/login'){
        _url='/login.html';
    }
    if(request.url == 'favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
fs.readFile(`./${query.part}`,'utf8',function(arr,desct){  
    if(desct == undefined)desct=`<ol>
    <li>테스트1</li>
    <li>테스트2</li>
    <li>테스트3</li>
</ol>`;
    var tmp = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>nodeJS 테스트</title>
    </head>
    <body>
        <a href='/'>HOME</a>
        <a href="/login">로그인</a>
        <a href="?part=noitce">공지사항</a>
        <a href="?part=freeboard">자유게시판</a>
        <h1>${title}</h1>
        <p>${desct}</p>
    </body>
    </html>`;
    response.end(tmp);

});
   /* if(query.part != undefined)
    response.end(fs.readFileSync(__dirname + '/' +query.part+'.html'));
    else
    response.end(fs.readFileSync(__dirname+_url));*/
});
app.listen(3000);