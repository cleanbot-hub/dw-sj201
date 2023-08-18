async function getData() {
    try {
        const response = await fetch('./a.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
}

async function main() {
    const jsonData = await getData();
    if (jsonData) {
        console.log(jsonData);
        // 여기에서 데이터를 활용하여 원하는 작업을 수행할 수 있습니다.
    }
}

main();
