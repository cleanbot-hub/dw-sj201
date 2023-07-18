document.addEventListener("DOMContentLoaded", function() {
    // chatbot-toggle 클릭 이벤트 핸들러
    document.getElementById("chatbot-toggle").addEventListener("click", function() {
        // chat-box 클래스를 갖고 있는 요소를 찾음
        var chatBox = document.querySelector(".chat-box");
        
        // chat-box 요소가 보이지 않을 경우 보이도록 설정
        if (chatBox.style.display === "none") {
            chatBox.style.display = "block";
        } else {
            chatBox.style.display = "none";
        }
    });
});



