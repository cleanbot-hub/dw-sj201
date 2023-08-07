$(function() {
    // JSON 데이터를 가져와서 랜덤하게 10개의 이미지를 화면에 표시
    $.getJSON("https://jsonplaceholder.typicode.com/photos", function(data) {
        // JSON 데이터를 랜덤하게 섞기 위해 shuffleArray 함수를 사용
        var shuffledData = shuffleArray(data);

        // 10개의 이미지만 화면에 표시
        for (var i = 0; i < 10; i++) {
            var item = shuffledData[i];
            $(".thumbnail").eq(i).data('id', item.id);
            $(".thumbnail").eq(i).text(item.id);

            // 이미지 URL에서 "via."를 제거하고 설정해줍니다.
            var imageUrl = item.thumbnailUrl.replace("via.", "");
            $(".thumbnail").eq(i).attr("src", imageUrl);
        }
    });

    // 썸네일을 클릭할 때 정보 모달 표시하는 이벤트
    $(".thumbnail").click(function() {
        // 클릭한 썸네일의 ID를 가져옴
        var id = $(this).data("id");

        // 이미지 정보를 가져와서 모달에 표시
        $.getJSON("https://jsonplaceholder.typicode.com/photos?id=" + id, function(data) {
            data = data[0];

            // 모달에 정보를 채워넣습니다.
            $("#original").attr("src", data.url);
            $("#title").text(data.title);
            $("#albumId").text(data.albumId);

            // 모달을 보여줍니다.
            $("#modal").show();
        });
    });

    // 모달 닫기 버튼에 클릭 이벤트 핸들러 추가
    $("#modal_close").click(function() {
        // 모달 숨기기
        $("#modal").hide();
    });
});

// 배열을 랜덤하게 섞는 함수
function shuffleArray(array) {
    var currentIndex = array.length, randomIndex, temporaryValue;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
