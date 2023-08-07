

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
    // 이야기 필터링 함수
    function filterStories() {
        // 검색어, 선택된 카테고리, 선택된 검색 옵션을 가져옵니다.
        var keyword = $("#keyword").val(); // 검색어
        var selectedCategory = $("#category").val(); // 선택된 카테고리
        var selectedKey = $("#key").val(); // 선택된 검색 옵션

        // 모든 이야기를 숨기고, 필터링 조건에 맞는 이야기만 보여줍니다.
        $(".story").hide().filter(function() {
            var storyTitle = $(this).find("h3").text(); // 이야기 제목
            var storyContent = $(this).find("p").text(); // 이야기 내용

            // 선택된 카테고리와 이야기의 제목을 비교하여 카테고리가 일치하는지 확인합니다.
            var isCategoryMatch = selectedCategory === "all" || storyTitle.startsWith(categories[selectedCategory]);

            // 선택된 검색 옵션에 따라 이야기 제목 또는 내용에 검색어가 포함되는지 확인합니다.
            var isTitleMatch = selectedKey === "title" && storyTitle.indexOf(keyword) > -1; // 제목 검색
            var isContentMatch = selectedKey === "content" && storyContent.indexOf(keyword) > -1; // 내용 검색
            var isTitleOrContentMatch = selectedKey === "tc" && (storyTitle.indexOf(keyword) > -1 || storyContent.indexOf(keyword) > -1); // 제목 또는 내용 검색

            // 카테고리가 일치하고 검색 옵션에 맞는 검색어가 포함되면 해당 이야기를 보여줍니다.
            return isCategoryMatch && (isTitleMatch || isContentMatch || isTitleOrContentMatch);
        }).show();
    }

    // 검색어 입력 상자에 키보드 이벤트 발생 시, 이야기 필터링 함수를 호출합니다.
    $("#keyword").on("keyup", filterStories);

    // 카테고리 선택 상자 값이 변경되었을 때, 이야기 필터링 함수를 호출합니다.
    $("#category").on("change", filterStories);

    // 검색 옵션 선택 상자 값이 변경되었을 때, 이야기 필터링 함수를 호출합니다.
    $("#key").on("change", filterStories);

    // 초기에도 이야기 필터링 함수를 한번 호출하여 기본적으로 모든 이야기를 보여줍니다.
    filterStories();
});

// 카테고리와 해당 카테고리에 대한 한글 키워드를 매핑하는 객체입니다.
const categories = {
    "all": "",
    "novel": "단편소설",
    "romance": "연애소설",
    "poetry": "시",
    "proverb": "속담",
    "diary": "일기"
};


   
  
