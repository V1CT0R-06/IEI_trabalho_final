// Add a custom icon
var customIcon = L.icon({
    iconUrl: 'marker-icon.png', // Path to your custom marker image
    iconSize: [38, 38],
    iconAnchor: [22, 38],
    popupAnchor: [-3, -38]
});

L.marker([51.5, -0.09], { icon: customIcon }).addTo(map)
  .bindPopup("This is a custom marker!")
  .openPopup();
