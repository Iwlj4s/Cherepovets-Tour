ymaps.ready(function () {
    // Карта
    var main_map = new ymaps.Map('main-map', {
        center: [59.089255, 37.919518],
        zoom: 14,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
    });

    // Массив с координатами и названиями объектов
    var objects = [
        { name: 'Ледовый Дворец', coords: [59.089363, 37.919456] },
        { name: 'Октябрьский Мост', coords: [59.109136, 37.904910] },
        { name: 'Соляной Сад', coords: [59.119401, 37.917570] },
        { name: 'Воскресный собор', coords: [59.120108, 37.928687] },
        { name: 'Мемориальный Дом музей Верещагиных', coords: [59.122125, 37.932474] },
        { name: 'Набережная', coords: [59.125495, 37.941750] },
        { name: 'Камерный Театр', coords: [59.124632, 37.930021] },
        { name: 'Дом Музыки и Кино Комсомолец', coords: [59.128096, 37.922022] },
        { name: 'Комсомольский парк', coords: [59.128416, 37.918675] },
        { name: 'Дворец Металлургов', coords: [59.121428, 37.900914] },
        { name: 'Музей Металлургической', coords: [59.133101, 37.845876] },
        { name: 'Парк 200-Летия Череповца', coords: [59.129880, 37.992554] }
    ];

    // Добавление меток на карту
    var placemarks = [];
    for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        var placemark = new ymaps.Placemark(object.coords, {
            hintContent: object.name,
            balloonContent: object.name
        });
        placemarks.push(placemark);
        main_map.geoObjects.add(placemark);
    }

    // Создание маршрута
    ymaps.route(placemarks.map(function (placemark) {
        return placemark.geometry.getCoordinates();
    }), {
        mapStateAutoApply: true
    }).then(function (route) {
        main_map.geoObjects.add(route);
    });
});