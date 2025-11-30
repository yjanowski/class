/* global google */
(async function () {
  'use strict';

  const bmgLoc = { lat: 40.096044749672394, lng: -74.22197586384449 };

  const pcsLoc = { lat: 40.10804504828912, lng: -74.21780159002883 };

  const { Map } = await google.maps.importLibrary('maps');
  const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

  const map = new Map(document.querySelector('#map'), {
    center: bmgLoc,
    zoom: 18,
    mapTypeId:google.maps.MapTypeId.SATELLITE,
    mapId: 'DEMO_MAP_ID'
  });


  const infoWindow = new google.maps.InfoWindow({
    //content: 'BMG'
  });

  const marker = new AdvancedMarkerElement({
    map,
    position: bmgLoc,
    title: 'BMG'
  });

  marker.addListener('click', () => {
    infoWindow.setContent(`Beth Medrash Govoha
Established in spring 1942 by Rabbi Aharon Kotler Ztl, Beth Medrash Govoha was the first kollel in the United States. BMG started out with 14 students and ...<a href='https://www.bmg.edu'>more info</a>`);
    infoWindow.open({
      anchor: marker
    });
  });

  const marker2 = new AdvancedMarkerElement({
    map,
    position: pcsLoc,
    title: 'PCS'
  });

  marker2.addListener('click', () => {
    infoWindow.setContent('PCS');
    infoWindow.open({
      anchor: marker2
    });
  });

  map.addListener('center_changed', () => {
    const newCenter = map.getCenter();
    console.log(newCenter.lat(), newCenter.lng());
  });
}());
