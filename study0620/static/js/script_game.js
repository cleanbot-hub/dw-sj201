window.onload = function() {
    var startButton = document.getElementById('start');
    var imgList = document.getElementById('imglist');
    var guessContainer = document.getElementById('guess-container');
    var guessInput = document.getElementById('guess-input');
    var guessButton = document.getElementById('guess-button');
    var images;

    startButton.addEventListener('click', function() {
        images = Array.from(imgList.getElementsByTagName('img'));

        for (var i = images.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = images[i].src;
            images[i].src = images[j].src;
            images[j].src = temp;
        }

        startButton.style.display = 'none';
        guessContainer.style.display = 'block';
    });

    guessButton.addEventListener('click', function() {
        var guess = guessInput.value.trim().toLowerCase();
        var correctGuess = false;
    
        for (var i = 0; i < images.length; i++) {
            var imageName = images[i].src.split('/').pop().split('.')[0].toLowerCase();
    
            if (imageName === guess) {
                correctGuess = true;
                images[i].style.border = '3px solid green';
                break; // 올바른 이미지를 찾았으므로 반복문 종료
            } else {
                images[i].style.border = '1px solid black';
            }
        }
    
        if (correctGuess) {
            alert("입력 한"+imageName);
        } else {
            alert('다시 시도 해보세요.');
        }
    
        guessInput.value = '';
    });

       
};