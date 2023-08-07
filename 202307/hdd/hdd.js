// 현재 위치 지도에 표시하기
function initMap() {
    getCurrentLocation()
      .then(location => {
        var map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: location.latitude, lng: location.longitude },
          zoom: 15,
        });
  
        var marker = new google.maps.Marker({
          position: { lat: location.latitude, lng: location.longitude },
          map: map,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  // 현재 위치 가져오기
  function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          error => {
            reject('Failed to get current location.');
          }
        );
      } else {
        reject('Geolocation not supported.');
      }
    });
  }
  
  // IP 주소 가져오기
  function getIpAddress() {
    return new Promise((resolve, reject) => {
      fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
          resolve(data.ip);
        })
        .catch(error => {
          reject('Failed to get IP address.');
        });
    });
  }
  
  // IP 주소와 현재 위치 가져와서 HTML에 표시
  function showData() {
    Promise.all([getIpAddress(), getCurrentLocation()])
      .then(([ipAddress]) => {
        var ipAddressElement = document.getElementById("ipAddress");
        ipAddressElement.textContent = `IP Address: ${ipAddress}`;
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  // 페이지 로드 시 IP 주소와 현재 위치 가져오기 실행
  window.addEventListener('load', showData);
  