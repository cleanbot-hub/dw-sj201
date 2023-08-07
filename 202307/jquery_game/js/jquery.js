function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file && file.type.match('text.*')) {
      const reader = new FileReader();

      reader.onload = function(e) {
          const contents = e.target.result;
          showFileContents(contents);
      };

      reader.readAsText(file);
  } else {
      alert('텍스트 파일 (.txt)을 선택해주세요.');
  }
}

function showFileContents(contents) {
  const list = document.getElementById('list');
  list.innerHTML = '';

  const lines = contents.split('\n');
  for (let line of lines) {
      const li = document.createElement('li');
      li.textContent = line;
      list.appendChild(li);
  }
}