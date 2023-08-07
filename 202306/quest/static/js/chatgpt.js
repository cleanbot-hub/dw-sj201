// 질문 입력과 답변 출력을 처리하는 함수
async function submitQuestion() {
    // 질문 입력란에서 질문 가져오기
    const questionInput = document.getElementById('question-input');
    const question = questionInput.value;

    // ChatGPT API 호출
    const response = await getChatGptResponse(question);

    // 답변 출력
    const resultDiv = document.getElementById('result');
    if (response.choices && response.choices.length > 0 && response.choices[0].text) {
        resultDiv.innerText = response.choices[0].text;
    } else {
        resultDiv.innerText = '답변을 찾을 수 없습니다.';
    }
}

// ChatGPT API에 요청을 보내고 응답을 받는 함수
async function getChatGptResponse(question) {
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
    };
    const data = {
        'prompt': '질문: ' + question + '\n대답:',
        'max_tokens': 50
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    });

    return response.json();
}
