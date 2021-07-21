
createMap();

function createMap() {
    var mapContainer = document.getElementById('map');
    var mapOption = {
            center: new kakao.maps.LatLng(37.558058, 126.936716),
            level: 4
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); 

    var positions = [
        {
            title: '현대신촌점', 
            latlng: new kakao.maps.LatLng(37.556095, 126.935835)
        },
        {
            title: '이대 익스프레스점', 
            latlng: new kakao.maps.LatLng(37.559056, 126.945869)
        },
        {
            title: '신촌 연세로점', 
            latlng: new kakao.maps.LatLng(37.558058, 126.936716)
        },
        ];

    var imageSrc = "images/icon_map.png"; 

    for (var i = 0; i < positions.length; i ++) {

        var imageSize = new kakao.maps.Size(24, 30); 

        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

        var marker = new kakao.maps.Marker({
            map: map,
            position: positions[i].latlng,
            title : positions[i].title,
            image : markerImage
            });
    }

    var content = '<div class="info">' +
                        '<div class="top_info">' +
                            '<h3>신촌연세로점</h3>' +
                            '<button type="button" class="btn_close">정보창 닫기</button>' +
                        '</div>' +
                        '<div class="mid_info">' +
                            '<dl>' +
                                '<dt>· 주소</dt>' +
                                '<dd>서울특별시 서대문구 창천동 33-30</dd>' +
                                '<dt>· 연락처</dt>' +
                                '<dd>02-3143-0404</dd>' +
                                '<dt>· 영업시간</dt>' +
                                '<dd>08:00 - 22:30</dd>' +
                            '</dl>' +
                        '</div>' +
                        '<div class="bottom_info">' +
                            '<a href="#" target="_blank" class="btn_detail">' +
                                '자세히보기' +
                                '<span class="detail_arrow"></span>' +
                            '</a>' +
                        '</div>' +
                    '</div>';

    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition()       
    });

    kakao.maps.event.addListener(marker, 'click', function() {
        overlay.setMap(map);
        panTo();
    });

    function closeOverlay() {
        overlay.setMap(null);
    }

    // 인포윈도우 닫는버튼
    document.querySelector('.info .btn_close').addEventListener('click', function(){
        closeOverlay();
    });

    function panTo() {
        var moveMap01 = new kakao.maps.LatLng(37.558058, 126.936716);
        map.panTo(moveMap01);            
        overlay.setMap(map);
    }
    
    
    // 검색결과창 아이콘 클릭시 해당 지점이있는 마커로 지도 중심좌표이동 
    $('.list_result .icon_map').on('click', function(e) {
        e.preventDefault();
        if($(this).hasClass('icon_map1')) {
            panTo();
    }
    });
};



// 좌표와 지점 이름, 주소를 배열에 넣어서 마커와 인포윈도우를 각각 띄우고
// 마커 클릭시 해당 인덱스의 인포윈도우가 나오고 다른인포윈도우 모두 닫히는 코드
// 하지만 닫기버튼이 안눌러서 일단 제거
// createMap();

// function createMap() {
//     var mapContainer = document.getElementById('map');
//     var mapOption = {
//             center: new kakao.maps.LatLng(37.558058, 126.936716),
//             level: 4
//     };

//     var map = new kakao.maps.Map(mapContainer, mapOption); 

//     var positions = [
//         [37.556095, 126.935835, '현대신촌점', '서울특별시 서대문구 창천동 30-33 현대백화점 지하 1층',],
//         [37.559056, 126.945869, '이대 익스프레스점', '서울특별시 서대문구 이화여대길 48(대현동)'],
//         [37.558058, 126.936716, '신촌 연세로점', '서울특별시 서대문구 창천동 33-30']
//     ];

//     var infowindows = [];

//     var imageSrc = "images/icon_map.png"; 
//     var imageSize = new kakao.maps.Size(24, 30); 
//     var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
//     var btnClose = document.querySelector('.info .btn_close');

//     positions.forEach(function(data) {
//         var marker = new kakao.maps.Marker({
//             position: new kakao.maps.LatLng(data[0], data[1]),
//             map: map,
//             image: markerImage
//         });

//         var infowindow = new kakao.maps.InfoWindow({
//             position:marker.getPosition(),
//             content:'<div class="info">' +
//                         '<div class="top_info">' +
//                             '<h3>'+data[2] +'</h3>' +
//                             '<button type="button" class="btn_close">정보창 닫기</button>' +
//                         '</div>' +
//                         '<div class="mid_info">' +
//                             '<dl>' +
//                                 '<dt>· 주소</dt>' +
//                                 '<dd>'+data[3]+'</dd>' +
//                                 '<dt>· 연락처</dt>' +
//                                 '<dd>02-3143-0404</dd>' +
//                                 '<dt>· 영업시간</dt>' +
//                                 '<dd>08:00 - 22:30</dd>' +
//                             '</dl>' +
//                         '</div>' +
//                         '<div class="bottom_info">' +
//                             '<a href="#" target="_blank" class="btn_detail">' +
//                                 '자세히보기' +
//                                 '<span class="detail_arrow"></span>' +
//                             '</a>' +
//                         '</div>' +
//                     '</div>'
//         });

//         infowindows.push(infowindow);
//         marker.infowindowIdx = infowindows.length - 1;

//         kakao.maps.event.addListener(marker, 'click', function(mouseEvent) {
//             allInfowindowClose();

//             var infowindow = infowindows[this.infowindowIdx];
//             infowindow.open(map, this);
//         });

//     });

    
//     function allInfowindowClose() {
        
//         for(var i=0; i<infowindows.length; i++) {
//             var infowindow = infowindows[i];
//             infowindow.close();
//         }
//     }

    
// };
