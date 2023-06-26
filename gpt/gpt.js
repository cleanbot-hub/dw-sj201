document.addEventListener("DOMContentLoaded", function() {
    var chatLog = document.getElementById("chat-log");
    var userMessageInput = document.getElementById("user-message");
    var sendButton = document.getElementById("send-button");
  
    // ChatGPT API 키
    async function getBotResponse(userMessage) {
        const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";
        const prompt = `Q: ${userMessage}\nA:`;
        const temperature = 0.7;
        const maxTokens = 50;
      
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${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}`
          },
          body: JSON.stringify({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: temperature,
            max_tokens: maxTokens
          })
        });
      
        const data = await response.json();
      
        if (data.choices && data.choices.length > 0) {
          const botResponse = data.choices[0].text.trim();
          return botResponse;
        } else {
          throw new Error("Invalid API response: No choices found.");
        }
      }
    sendButton.addEventListener("click", async function() {
      var userMessage = userMessageInput.value;
  
      // 사용자 메시지를 채팅 로그에 추가
      var userMessageElement = document.createElement("div");
      userMessageElement.className = "message user";
      userMessageElement.textContent = "사용자: " + userMessage;
      chatLog.appendChild(userMessageElement);
  
      try {
        // ChatGPT API 호출하여 챗봇 응답 가져오기
        var botResponse = await getBotResponse(userMessage);
  
        // 챗봇 응답 추가
        var botResponseElement = document.createElement("div");
        botResponseElement.className = "message bot";
        botResponseElement.textContent = "도우미: " + botResponse;
        chatLog.appendChild(botResponseElement);
  
        // 사용자 입력 필드 초기화
        userMessageInput.value = "";
  
        // 채팅 로그를 스크롤하여 가장 최근 메시지 표시
        chatLog.scrollTop = chatLog.scrollHeight;
      } catch (error) {
        console.error("ChatGPT API 호출 중 오류가 발생했습니다:", error);
      }
    });
  });
  