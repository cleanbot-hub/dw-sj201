

// - 입력한 키워드에 맞는 story 만 보여야 한다 
// - 제목을 선택하고 키워드 입력하면 제목에 해당 키워드를 포함하는 story만 보이기 
// - 내용을 선택하고 키워드 입력하면 내용에 해당 키워드를 포함하는 story만 보이기
// - 제목/내용 선택하고 키워드 입력하면 제목과 내용에 둘중 하나에 키워드를 포함하는 story 보이기 

// - 분류 선택하면 해당 분류 인 story 만 보이기 
// - 분류 선택하고 키워드 입력하면 선택한 분류 내에서 키워드 포함 하는 story 보이기 
// - 분류 선택하고 키워드 입력하고 내용 선택 했으면 키워드 포함하는 story 보이기 

// $(function() {
    
//     $("#keyword").on("keyup",function(){
//         var keyword = $(this).val(); // keyword 아이디를 가져온다
//         $(".story").filter(function(){
//             $(this).toggle($(this).text().indexOf(keyword) > -1);
//             });
//         });
    
//         $("#key").on("keyup",function(){     // key value를 가져온다    
//            var key = $(this).value();
//            $(".story").filter(function(){
//            $(this).toggle($(this).text().indexOf(key) > -1);       
        
//         });
//     });

//     $("#category").on("keyup",function(){   // category value를 가져온다    
//         var category = $(this).value();
//         $(".story").filter(function(){
//         $(this).toggle($(this).text().indexOf(category) > -1);       
     
//      });
//  });

// });




$(function() {
    function filterStories() {
        var keyword = $("#keyword").val();
        var selectedCategory = $("#category").val();
        var selectedKey = $("#key").val();

        $(".story").hide().filter(function() {
            var storyTitle = $(this).find("h3").text();
            var storyContent = $(this).find("p").text();

           
            var isCategoryMatch = selectedCategory === "all" || storyTitle.startsWith(categories[selectedCategory]);
            var isTitleMatch = selectedKey === "title" && storyTitle.indexOf(keyword) > -1;
            var isContentMatch = selectedKey === "content" && storyContent.indexOf(keyword) > -1;
            var isTitleOrContentMatch = selectedKey === "tc" && (storyTitle.indexOf(keyword) > -1 || storyContent.indexOf(keyword) > -1);
            
            return isCategoryMatch && (isTitleMatch || isContentMatch || isTitleOrContentMatch);
        }).show();
    }

    
    $("#keyword").on("keyup", filterStories);
    $("#category").on("change", filterStories);
    $("#key").on("change", filterStories);

    filterStories();
});


const categories = {
    "all": "",
    "novel": "단편소설",
    "romance": "연애소설",
    "poetry": "시",
    "proverb": "속담",
    "diary": "일기"
};

   
  
