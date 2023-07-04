var a = 0;
var b = 0;
var c = 0;
var d = 0;
var isReverse = false; // 열차의 운행 방향을 추적하기 위한 플래그

window.onload = function train() {
    var st = document.getElementsByClassName("station");
    a = 0;
    b = 0;
    c = 0;
    d = 0;

    // 열차를 정방향으로 운행하는 함수
    function moveForward() {
        if (isReverse) {
            // 열차의 운행 방향을 역전시킴
            isReverse = false;
            moveForward();
        } else {
            // 1호차
            var first_t = setInterval(function () {
                if (a == 39) clearInterval(first_t);
                st[a].style.background = 'yellow';
                st[a].style.borderRadius = '0px';
                st[a].style.width = '40px';
                ++a;
                document.getElementById("station1").innerText = a;
            }, 1000);

            setTimeout(function () {
                var first_e = setInterval(function () {
                    if (a == 40) {
                        clearInterval(first_e);
                        st[a - 2].style.background = 'white';
                        st[a - 2].style.borderRadius = '100%';
                        st[a - 2].style.width = '15px';
                        setTimeout(function () {
                            st[a - 1].style.background = 'white';
                            st[a - 1].style.borderRadius = '100%';
                            st[a - 1].style.width = '15px';
                            // 40개 역을 지났으면 역순 운행을 시작
                            if (a === 40) {
                                isReverse = true;
                                moveReverse();
                            }
                        }, 1000);
                    } else {
                        st[a - 2].style.background = 'white';
                        st[a - 2].style.borderRadius = '100%';
                        st[a - 2].style.width = '15px';
                    }
                }, 1000);
            }, 1000);

            // 2호차
            setTimeout(function () {
                var second_t = setInterval(function () {
                    if (b == 39) clearInterval(second_t);
                    st[b].style.background = 'green';
                    st[b].style.borderRadius = '0px';
                    st[b].style.width = '50px';
                    ++b;
                    document.getElementById("station2").innerText = b;
                }, 1000);

                setTimeout(function () {
                    var second_e = setInterval(function () {
                        if (b == 40) {
                            clearInterval(second_e);
                            st[b - 2].style.background = 'white';
                            st[b - 2].style.borderRadius = '100%';
                            st[b - 2].style.width = '15px';
                            setTimeout(function () {
                                st[b - 1].style.background = 'white';
                                st[b - 1].style.borderRadius = '100%';
                                st[b - 1].style.width = '15px';
                            }, 1000);
                        } else {
                            st[b - 2].style.background = 'white';
                            st[b - 2].style.borderRadius = '100%';
                            st[b - 2].style.width = '40px';
                        }
                    }, 1000);
                }, 1000);
            }, 3000);

            // 3호차
            setTimeout(function () {
                var third_t = setInterval(function () {
                    if (c == 39) clearInterval(third_t);
                    st[c].style.background = 'blue';
                    st[c].style.borderRadius = '0px';
                    st[c].style.width = '40px';
                    ++c;
                    document.getElementById("station3").innerText = c;
                }, 1000);

                setTimeout(function () {
                    var third_e = setInterval(function () {
                        if (c == 40) {
                            clearInterval(third_e);
                            st[c - 2].style.background = 'white';
                            st[c - 2].style.borderRadius = '100%';
                            st[c - 2].style.width = '15px';
                            setTimeout(function () {
                                st[c - 1].style.background = 'white';
                                st[c - 1].style.borderRadius = '100%';
                                st[c - 1].style.width = '15px';
                            }, 1000);
                        } else {
                            st[c - 2].style.background = 'white';
                            st[c - 2].style.borderRadius = '100%';
                            st[c - 2].style.width = '15px';
                        }
                    }, 1000);
                }, 1000);
            }, 6000);

            // 4호차
            setTimeout(function () {
                var fourth_t = setInterval(function () {
                    if (d == 39) clearInterval(fourth_t);
                    st[d].style.background = 'pink';
                    st[d].style.borderRadius = '0px';
                    st[d].style.width = '40px';
                    ++d;
                    document.getElementById("station4").innerText = d;
                }, 1000);

                setTimeout(function () {
                    var fourth_e = setInterval(function () {
                        if (d == 40) {
                            clearInterval(fourth_e);
                            st[d - 2].style.background = 'white';
                            st[d - 2].style.borderRadius = '100%';
                            st[d - 2].style.width = '15px';
                            setTimeout(function () {
                                st[d - 1].style.background = 'white';
                                st[d - 1].style.borderRadius = '100%';
                                st[d - 1].style.width = '15px';
                            }, 1000);
                        } else {
                            st[d - 2].style.background = 'white';
                            st[d - 2].style.borderRadius = '100%';
                            st[d - 2].style.width = '40px';
                        }
                    }, 1000);
                }, 1000);
            }, 9000);
        }
    }

    // 열차를 역방향으로 운행하는 함수
    function moveReverse() {
        // 4호차
        var fourth_t = setInterval(function () {
            if (d == 0) clearInterval(fourth_t);
            st[d - 1].style.background = 'pink';
            st[d - 1].style.borderRadius = '0px';
            st[d - 1].style.width = '40px';
            --d;
            document.getElementById("station4").innerText = d;
        }, 1000);

        setTimeout(function () {
            var fourth_e = setInterval(function () {
                if (d == -1) {
                    clearInterval(fourth_e);
                    st[d + 2].style.background = 'white';
                    st[d + 2].style.borderRadius = '100%';
                    st[d + 2].style.width = '15px';
                    setTimeout(function () {
                        st[d + 1].style.background = 'white';
                        st[d + 1].style.borderRadius = '100%';
                        st[d + 1].style.width = '15px';
                        // 40개 역을 지났으면 다시 정방향 운행을 시작
                        if (d === -1) {
                            isReverse = false;
                            moveForward();
                        }
                    }, 1000);
                } else {
                    st[d + 2].style.background = 'white';
                    st[d + 2].style.borderRadius = '100%';
                    st[d + 2].style.width = '40px';
                }
            }, 1000);
        }, 1000);
    }

    if (isReverse) {
        moveReverse();
    } else {
        moveForward();
    }
};
