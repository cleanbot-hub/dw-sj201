    /*
    오늘의 project
        돋보기 모양 아이콘을 눌렀을 때 , 
            <div class="search_bar" style="display: none;">
                        <div class="search_close">
                            <i class="bi bi-x-circle"></i>
                        </div>
                        <form id="searchform" name="searchform" method="get" action="index.html">
                            <div>
                                <input type="text" id="s" placeholder="검색입력">
                                <button class="srh_button">검색</button>
                            </div>
                        </form>
                        해당하는 코드의 부분이 화면에 나타나야하고 , 

                    <div class="search_close">
                            <i class="bi bi-x-circle"></i>
                        </div>
                        close 모양의 아이콘을 눌렀을 떄 , 창이 나오게 해야함.
    */

                        document.addEventListener('DOMContentLoaded', function() {
                            const searchButton = document.querySelector('.search_button');
                            const searchBar = document.querySelector('.search_bar');
                            const searchClose = document.querySelector('.search_close');
                        
                            searchButton.addEventListener('click', function() {
                                searchBar.classList.toggle('show');
                            });
                        
                            searchClose.addEventListener('click', function() {
                                searchBar.classList.remove('show');
                            });
                        });