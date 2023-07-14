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
                        
                        var pre = document.getElementsByClassName("prev")[0];
                        var next= document.getElementsByClassName("next")[0];
                        pre.addEventListener("click",function(){
                          

                        
                        });

                        next.addEventListener("click",function(){
                            var slideview = document.getElementsByClassName("eventslide")[0];
                            var now_left = slideview.style.left.split("px")[0];
                            if(now_left == -936) return;
                            var left=now_left -312;
                            slideview.style.left=left+"px";

                        });

                        
                        
                        
                        
                        
                        
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