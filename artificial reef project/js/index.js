$(document).ready(async function () {
    const API_URL = "https://api.odcloud.kr/api/15031992/v1/uddi:3c46e4ef-78dc-4da6-97b1-ad226624eff5_201911131644?";

    // 데이터를 불러오고 화면에 출력하는 함수 호출
    const data_list = await getData();
    draw(data_list);

    // 체크박스나 라디오 버튼의 상태 변경 시 검색 함수 호출
    $("input[type=checkbox]").change(function () {
        search();
    });

    // 검색어 입력 시 검색 함수 호출
    $("#searchWord").on("input", function () {
        search();
    });

    // 데이터를 API에서 가져오는 함수
    function getData() {
        return fetch(API_URL + "page=1&perPage=500&serviceKey=dmf4bP1j26Vi7Fp%2B%2FDgCnRUANSLptixXrjDNHXRDoasZKn6hQiDcxhKn2IoSp4SfIavjt%2BBRwS391lEKXF5umA%3D%3D")
            .then(res => res.json())
            .then(r => r.data)
            .catch(error => console.error("API request error:", error));
    }

    // 검색 기능을 수행하는 함수
    function search() {
        // 검색어 입력값 가져오기
        const searchWord = $("#searchWord").val().toLowerCase();

        // 선택된 어초 종류, 수량, 설치년도 가져오기
        const selectedTypes = $("input[name=type]:checked").map(function () {
            return $(this).val();
        }).get();

        const selectedCounts = $("input[name=count]:checked").map(function () {
            return $(this).val();
        }).get();

        const selectedYears = $("input[name=year]:checked").map(function () {
            return $(this).val();
        }).get();

        // 각 항목마다 조건에 따라 보이기/숨기기 결정
        $(".item_short").each(function () {
            const idx = $(this).index();
            const item = data_list[idx];

            // 각 조건에 따라 맞는지 확인
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(item.어초종류);
            const countMatch = selectedCounts.length === 0 || (
                // 수량에 따른 조건 확인
                selectedCounts.includes("9") && Number(item.어초확인수량) < 10 ||
                selectedCounts.includes("10") && Number(item.어초확인수량) >= 10 ||
                selectedCounts.includes("50") && Number(item.어초확인수량) >= 50 ||
                selectedCounts.includes("100") && Number(item.어초확인수량) >= 100 ||
                selectedCounts.includes("150") && Number(item.어초확인수량) >= 150 ||
                selectedCounts.includes("200") && Number(item.어초확인수량) >= 200 ||
                selectedCounts.includes("250") && Number(item.어초확인수량) >= 250 ||
                selectedCounts.includes("300") && Number(item.어초확인수량) >= 300
            );
            const yearMatch = selectedYears.length === 0 || (
                Number(item.설치년도) >= Number(selectedYears[0]) &&
                Number(item.설치년도) < Number(selectedYears[0]) + 100
            );

            // 검색어에 따른 조건 확인
            const searchWordMatch = searchWord === "" ||
                item.어초종류.toLowerCase().includes(searchWord) ||
                item.어초확인수량.toLowerCase().includes(searchWord);

            // 모든 조건을 만족하면 보이게, 그렇지 않으면 숨기게
            const isShow = typeMatch && countMatch && yearMatch && searchWordMatch;
            $(this).toggle(isShow);
        });
    }

    // 데이터를 화면에 그리는 함수
    function draw(data_list) {
        const welldone = $("#welldone");
        welldone.empty();

        data_list.forEach(function (item) {
            const itemHtml = `
                <div class="item_short">
                    <div class="item_detail_box">
                        <ul class="item_detail">
                            <li>어초 종류 - ${item.어초종류}</li>
                            <li>어초확인수량 - ${item.어초확인수량}</li>
                            <li>설치년도 - ${item.설치년도}</li>
                        </ul>
                    </div>
                </div>
            `;
            welldone.append(itemHtml);
        });
    }
});
