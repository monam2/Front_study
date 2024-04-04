const serviceKey = 'D3SDtvloKpo9me7pADrbQmUmjyXb%2FwFIjypawVdh%2BYemPHu%2FBlNJIOA6t2Xqcr978QOAvsZjo5AtYHBYEZQu0A%3D%3D';

const endPoint = 'http://apis.data.go.kr/B551011/KorService1/';
let spots = [] // 로드된 장소들의 정보
let markers = []; // 지도에 표시된 마커 객체를 가지고 있을 배열입니다

let lat;
let lon;

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(35.20237253013088, 126.81069129115035), // 지도의 중심좌표
        level: 7 // 지도의 확대 레벨 
    }; 

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

//현재 위치에 마커 생성
if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        lat = position.coords.latitude; // 위도
        lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition);
      });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
        
    displayMarker(locPosition);
}

// spots 배열의 장소 객체를 마커로 표시

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition) {

    // 마커 생성
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
    marker.setDraggable(true); //드래그 가능한 마커로 생성
}

function setMap() {
    
    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    var mapTypeControl = new kakao.maps.MapTypeControl();
    
    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    
    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    
    // Zoom Event 로 데이터 리로드
    kakao.maps.event.addListener(map, 'zoom_changed', function () {
        
        // 지도 중심좌표를 얻어옵니다 
        var latlng = map.getCenter();
        
        // 기존 markers clear
        markers.forEach((marker) => marker.setMap(null)); // 개수는 계속 누적되는 듯 // TODO 성능 이슈 ?
        
        // 드래그로 변경된 좌표로 데이터 로드
        loadData(latlng.getLat(), latlng.getLng());
    });
    
    // 마우스 드래그로 지도 이동이 완료되었을 때 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, 'dragend', function() {        
        
        // 지도 중심좌표를 얻어옵니다 
        var latlng = map.getCenter(); 
        
        // 기존 markers clear
        markers.forEach((marker) => marker.setMap(null)); // 개수는 계속 누적되는 듯 // TODO 성능 이슈 ?
        
        // 드래그로 변경된 좌표로 데이터 로드
        loadData(latlng.getLat(), latlng.getLng());
    });
}

// loadDataToLocationBasedList
window.onload = function () {
    let url = endPoint;
    url += "locationBasedList1?";
    url += "serviceKey=" + serviceKey;
    url += "&numOfRows=100";
    url += "&pageNo=1";
    url += "&MobileOS=ETC";
    url += "&MobileApp=AppTest";
    url += "&arrange=A";
    url += "&mapX="+lon;
    url += "&mapY="+lat;
    url += "&radius=1000";
    url += "&listYN=Y";
    url += "&_type=json";

    //샘플 url
    // let newUrl = "https://apis.data.go.kr/B551011/KorService1/locationBasedList1?serviceKey=D3SDtvloKpo9me7pADrbQmUmjyXb%2FwFIjypawVdh%2BYemPHu%2FBlNJIOA6t2Xqcr978QOAvsZjo5AtYHBYEZQu0A%3D%3D&numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&mapX=126.983745&mapY=37.563446&radius=100&listYN=Y&_type=json";
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            saveSpots(data.response);
            updateMapMarker();
            loadFirstDataToSideBar();
        })
        .catch(error => {
            console.error('fetch 에러 발생:', error);
        });

    
}

//장소 클래스
class Spot {
    constructor(addr1, addr2, areacode, contentid, contenttypeid, firstimage, mapx, mapy, tel, title) {
        this.addr1 = addr1;
        this.addr2 = addr2;
        this.contenttypeid = contenttypeid;
        this.mapx = mapx;
        this.mapy = mapy;
        this.tel = tel;
        this.title = title;
        this.contentid = contentid;
        this.firstimage = firstimage;
        this.areacode = areacode;
    }
}
function saveSpots(response) {
    
    var itemList = response.body.items.item;
    
    // 빈 값일 때 undefined 처리
    if (itemList == undefined)
    return;
    
    spots.length = 0; // 초기화
    
    itemList.forEach(item => {
        spots.push(new Spot(item.addr1, item.addr2, item.areacode, item.contentid, item.contenttypeid, item.firstimage, item.mapx, item.mapy, item.tel, item.title));
    });
}

function updateMapMarker() {    
    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
    for (var i = 0; i < spots.length; i ++) {
        
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        spots.forEach(spot => {
            console.log(spot);
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: new kakao.maps.LatLng(spot.mapy, spot.mapx), // 마커를 표시할 위치
                title: spot.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage // 마커 이미지
            });
            
            markers.push(marker);
        });
    }
}

function loadFirstDataToSideBar() {
    const firstTitle = spots[0].title;
    const firstImg = spots[0].firstimage;
    const firstAdd = spots[0].addr1;
    document.querySelector(".sidebar-content-img").setAttribute("src", `${firstImg}`);
    document.querySelector(".info-location-title").textContent = firstTitle;
    document.querySelector(".info-location-address").textContent = firstAdd;
}

//이제 해야되는거
//각 장소? 마커?마다 이벤트 리스너 달아서 그 마커 클릭하면 사이드바 정보를 그 내용으로 교체하기