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

                    window.onload=function(){
                        var search_bt = document.getElementsByClassName("search_button");
                        search_bt[0].addEventListener("click",function(){
                            var bar = document.querySelectorAll(".search_bar")[0];
                            bar.style.display="block";
                        })

                            var search_close = document.getElementsByClassName("search_close");
                            search_close[0].addEventListener("click",function(){
                            var bar = document.querySelectorAll(".search_bar")[0];
                            bar.style.display="none";






                      


                        });
                    }