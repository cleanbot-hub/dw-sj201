$.getJSON("https://jsonplaceholder.typicode.com/users",function(data){
    $.each(data,function(i,item){
        $("#person_wrap").append("<div class='name'>"+item.name+"</div>");
    });

});