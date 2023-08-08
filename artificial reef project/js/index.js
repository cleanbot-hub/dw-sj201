$(document).ready(async function () {
    const API_URL = "https://api.odcloud.kr/api/15031992/v1/uddi:3c46e4ef-78dc-4da6-97b1-ad226624eff5_201911131644?"; // 수정된 부분

    const data_list = await getData();
    draw(data_list);

    $("input[type=checkbox], input[type=radio]").change(function () {
        search();
    });
    $("input[name=year]").change(function () {
        search();
    });


    $("#searchWord").on("input", function () {
        search();
    });


    function getData() {
        return fetch(API_URL + "page=1&perPage=500&serviceKey=dmf4bP1j26Vi7Fp%2B%2FDgCnRUANSLptixXrjDNHXRDoasZKn6hQiDcxhKn2IoSp4SfIavjt%2BBRwS391lEKXF5umA%3D%3D") // 수정된 부분
            .then(res => res.json())
            .then(r => r.data)
            .catch(error => console.error("API request error:", error));
    }

    function search() {
        const searchWord = $("#searchWord").val().toLowerCase(); // 검색어를 소문자로 변환하여 일치 검색을 수행
    
        const selectedTypes = $("input[name=type]:checked").map(function () {
            return $(this).val();
        }).get();
    
        const selectedCounts = $("input[name=count]:checked").map(function () {
            return $(this).val();
        }).get();
    
        const selectedYears = $("input[name=year]:checked").map(function () {
            return $(this).val();
        }).get();
    
        $(".item_short").each(function () {
            const idx = $(this).index();
            const item = data_list[idx];
    
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(item.어초종류);
            const countMatch = selectedCounts.length === 0 || Number(item.어초확인수량) >= Number(selectedCounts[0]);
            const yearMatch = selectedYears.length === 0 || (
                Number(item.설치년도) >= Number(selectedYears[0]) &&
                Number(item.설치년도) < Number(selectedYears[0]) + 100
            );
    
            const searchWordMatch = searchWord === "" || // 검색어가 비어있거나
                item.어초종류.toLowerCase().includes(searchWord) || // 어초 종류에 일치하는지 확인
                item.어초확인수량.toLowerCase().includes(searchWord); // 어초확인수량에 일치하는지 확인
    
            const isShow = typeMatch && countMatch && yearMatch && searchWordMatch;
            $(this).toggle(isShow);
        });
    }

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
