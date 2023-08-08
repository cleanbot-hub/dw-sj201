// 스크립트에서 배열을 생성 할 때는 const 를 많이 사용한다 
// 배열의 주소는 변하지 않고 값만 변동 이 있기 때문에 배열의 주소 
/*

        자바스크립트 비동기 - aysnc , await , promose 
        자바스크립트에서 비동기 처리 3가지 방법 
        1. 콜백 함수 - 무한 콜백 , callback hell
        2. promise 
        3. aysnc/await 

        
        
*/


let data_list= new Object(); // json 데이터 저장할 전역변수 

        async function getData(){

        //             var d="";
        //         $.getJSON("./전국건강증진센터표준데이터.json",function(data){
        //             d=data.records;
        // });
        //             return "d";
        var data = await fetch("./전국건강증진센터표준데이터.json").then(function(res){return res.json();}).then(function(r){return r;})
        console.log(data);
        return data.records;
    }

$(async function(){
        $(".filterMore").click(function(){
            $(this).toggleClass("moreDown");
            $(this).toggleClass("moreUp");
            $(".filterDetail").slideToggle();
        });
        data_list = await getData();
        view(data_list);

    
    // 전체 텍스트에 대한 검색이 아니라 
    // 업무내용에 한해서만 검색이 가능하게 변경 하시오 
            $("#searchWord").on("keyup",function(){
                search();
         
        });

            $(".sort_obj").click(function(){
                  $(this).toggleClass("asc");
                  $(this).toggleClass("desc");
                  var name = $(this).data("name");
                    const sort_type = {centerName:"건강증진센터명", 
                    addr:"소재지도로명주소", nurseCount:"간호사수",doctorCount:"의사수"};
                    var has = -1;
                    if($(this).hasClass("asc") ) has=1;
                    
                 

                  
                    
                    data_list.sort(function(a,b){
                        if( a[sort_type[name]] > b[sort_type[name]] ) return 1*has;
                        if( a[sort_type[name]] < b[sort_type[name]] ) return -1*has;
                        if( a[sort_type[name]] === b[sort_type[name]] ) return 0*has;
 
                    });
                    
                    
                    view(data_list);
                    
            
                  });

                    /* 상세검색 부분 */
                    $("input[type=checkbox]").change(function(){
                      
                            search();

                    });
            });

            function search(){
                const word = $("#searchWord").val();
                $(".item_short").filter(function(){
                   var addr = $(this).find(".item_detail").children("li:eq(1)"); // 소재지 도로명 주소 
                    var task = $(this).find(".item_detail").children("li:eq(2)"); // 건강증진 업무내용 
                    var hasAddr = addr.text().indexOf(word) > -1; 
                    var hasTask = task.text().indexOf(word) > -1;
                    $(this).toggle(hasAddr || hasTask);
                });
            }





            function  view(data_list){
                $("#section").empty();
                $.each(data_list, function(i, item){
                    $("#section").append(
                        "<div class='item_short'><div class='item_image'>"+
                        "<img src='https://loremflickr.com/200/200/health?random="+i+"'></div>"+
                        "<div class='item_detail_box'><ul class='item_detail'>"+
                        "<li>"+item.건강증진센터명+"</li><li>"+item.소재지도로명주소+"</li>"+
                        "<li>"+item.건강증진업무내용+"</li><li>"+item.건강증진센터구분+"</li>"+
                        "<li>"+item.운영기관명+"</li><li>"+item.운영기관전화번호+"</li></ul></div></div>"
                    );
               });


            }

