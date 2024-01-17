<template>
    <div id="map" class="widget" />
</template>

<script setup>
initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [69.236222, 41.313190],
                
                // Уровень масштабирования
                zoom: 18
            }
        }
    );
        
    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}
</script>

<style>
#map {
    padding: 0;
}

/* add border-radius */
.ymaps3x0--map-container {
    border-radius: 20px;
}

/* disable copyrights text */
.ymaps3x0--map-copyrights_bottom {
    display: none !important;
}
</style>