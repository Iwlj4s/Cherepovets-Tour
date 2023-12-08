ymaps.ready(function () {
    // Карта
    var main_map = new ymaps.Map('main-map', {
        center: [59.089255, 37.919518],
        zoom: 15,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
    }, {
        yandexMapDisablePoiInteractivity: true // Отключение взаимодействия с объектами на карте
    });

    // Маршрут
    var myRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            // Координаты точек маршрута
            [59.089255, 37.919518], // Ледовый Дворец
            [59.108317, 37.905117], // Октябрьский Мост
            [59.120796, 37.919356], // Соляной Сад
            [59.119752, 37.928020], // Воскресный собор
            [59.121141, 37.932118], // Мемориальный Дом музей Верещагиных
            [59.125495, 37.941750], // Набережная
            [59.124632, 37.930021], // Камерный Театр
            [59.128096, 37.922022], // Дом Музыки и Кино Комсомолец
            [59.128416, 37.918675], // Комсомольский парк
            [59.121428, 37.900914], // Дворец Металлургов
            [59.133101, 37.845876], // Музей Металлургической промышленности
            [59.129880, 37.992554] // Парк 200-Летия Череповца
        ],
        params: {
            // Параметры маршрута (например, вид транспорта)
            routingMode: 'auto'
        },
        options: {
            wayPointVisible: false,
            wayPointIconFillColor: 'blue'
        }
    }, {
        // Внешний вид маршрута
        routeStrokeWidth: 2,
        routeStrokeColor: '0000ffff',
        routeActiveStrokeWidth: 4,
        routeActiveStrokeColor: 'ff0000ff'
    });

    // Добавляем маршрут на карту
    main_map.geoObjects.add(myRoute);

        // Изменяем размер мини-карты при просмотре панорамы
    myMap.container.events.add('fullscreenenter', function () {
        myMap.container.fitToViewport();
    });

    myMap.container.events.add('fullscreenexit', function () {
        myMap.container.fitToViewport();
    });

});