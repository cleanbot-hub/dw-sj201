window.onload = function() {
    var startButton = document.getElementById('start');
    var imgList = document.getElementById('imglist');

    startButton.addEventListener('click', function() {
        var images = Array.from(imgList.getElementsByTagName('img'));

        for (var i = images.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = images[i].src;
            images[i].src = images[j].src;
            images[j].src = temp;
        }
    });
};