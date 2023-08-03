$(function() {
    // JSON 데이터를 가져와서 각 사용자의 이름을 목록에 표시하는 함수
    $.getJSON("https://jsonplaceholder.typicode.com/users", function(data) {
        $.each(data, function(i, item) {

            // 사용자 이름과 ID를 가진 <div> 요소에 데이터 설정 후 텍스트 표시
            $(".name").eq(i).data('id', item.id);
            $(".name").eq(i).text(item.name);

            // 주석 처리된 코드는 동일한 결과를 주지만, 위와 같은 방법으로도 동작 가능
            // $("#person_wrap").append("<div class='name' data-id='"+item.id+"'>"+item.name+"</div>");
        });

    });

    // 각 사용자 이름을 클릭할 때 정보 모달 표시하는 이벤트 핸들러
    $(".name").click(function() {
        // 클릭한 사용자의 ID를 가져옴
        var id = $(this).data("id");

        // 해당 ID로 사용자 정보를 가져와서 정보를 모달에 표시
        $.getJSON("https://jsonplaceholder.typicode.com/users?id=" + id, function(data) {
            data = data[0];

            $("#info_name").text(data.name);
            $("#info_username").text(data.username);
            $("#info_email").text(data.email);
            $("#info_street").text(data.address.street);
            $("#info_suite").text(data.address.suite);
            $("#info_city").text(data.address.city);
            $("#info_zipcode").text(data.address.zipcode);
            $("#info_geo").text(data.address.geo.lat + "," + data.address.geo.lng);
            $("#info_phone").text(data.phone);
            $("#info_website").text(data.website);
            $("#info_companyName").text(data.company.name);
            $("#info_companyBs").text(data.company.bs);

            // 모달 표시
            $("#modal").show();

            // 모달 닫기 버튼에 클릭 이벤트 핸들러 추가
            $("#modal_close").click(function() {
                // 모달 숨기기
                $("#modal").hide();
            })
        });
    });
});
