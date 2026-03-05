const map = L.map('map').setView([20, 78], 4);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CartoDB'
}).addTo(map);

// 🔹 Geocoding function
async function geocodeLocation(place) {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
    );
    const data = await res.json();
    return data[0];
}

// 🔹 Red marker icon
const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// 🔹 Get coordinates and create marker
geocodeLocation(listingLocation).then(result => {
    const lat = result.lat;
    const lon = result.lon;

    map.setView([lat, lon], 12);

    const marker = L.marker([lat, lon], { icon: redIcon }).addTo(map);

    // 🔥 Custom popup content
    marker.bindPopup(`
        <b>${listingTitle}</b><br>
        <small>Further details will be provided after booking...</small>
    `);

    // 🔥 Open popup on hover
    marker.on('mouseover', function () {
        this.openPopup();
    });

    marker.on('mouseout', function () {
        this.closePopup();
    });
});