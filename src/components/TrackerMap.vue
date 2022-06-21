<template>
  <div class="h-full z-10" id="map" />
</template>

<script>
import { onMounted, watch } from 'vue';
import leaflet from 'leaflet';
import config from '@/config';

export default {
  name: 'TrackerMap',
  props: {
    coords: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    let map = null;

    watch(() => props.coords, (coords) => {
      if (coords.lat && coords.lng) {
        leaflet
          .marker([coords.lat, coords.lng])
          .addTo(map);

        map
          .setView([coords.lat, coords.lng]);
      }
    }, { deep: true, immediate: true });

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
