<template>
  <div class="h-full z-10" id="map">

  </div>
</template>

<script>
import { onMounted } from 'vue';
import leaflet from 'leaflet';
import config from '@/config';

export default {
  name: 'TrackerMap',
  setup() {
    let map = null;

    onMounted(() => {
      map = leaflet
        .map('map')
        .setView([51.505, -0.09], 13);

      leaflet
        .tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${config.mapboxAccessToken}`, {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: config.mapboxAccessToken,
        })
        .addTo(map);
    });
  },
};
</script>
