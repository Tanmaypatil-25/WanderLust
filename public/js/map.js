document.addEventListener("DOMContentLoaded", async () => {

    // ✅ Create map
    const map = L.map('map').setView([20, 78], 4);

    // ✅ Tile Layer
    L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
            attribution:
                '&copy; OpenStreetMap contributors &copy; CartoDB'
        }
    ).addTo(map);


    // ✅ Red Marker Icon
    const redIcon = new L.Icon({

        iconUrl:
            'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',

        shadowUrl:
            'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',

        iconSize: [25, 41],

        iconAnchor: [12, 41],

        popupAnchor: [1, -34],

        shadowSize: [41, 41]

    });


    // ✅ Geocode Function
    async function geocodeLocation(place) {

        try {

            const res = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`
            );

            const data = await res.json();

            if (data.length > 0) {
                return data[0];
            }

            return null;

        } catch (err) {

            console.error("Geocoding Error:", err);

            return null;
        }
    }


    console.log("Location:", listingLocation);
    console.log("Title:", listingTitle);


    // ✅ Get coordinates
    const result = await geocodeLocation(listingLocation);

    if (!result) {

        console.error("Location not found");

        return;
    }

    const lat = result.lat;
    const lon = result.lon;

    // ✅ Move map
    map.setView([lat, lon], 12);

    // ✅ Add marker
    const marker = L.marker(
        [lat, lon],
        { icon: redIcon }
    ).addTo(map);

    // ✅ Popup
    marker.bindPopup(`
        <b>${listingTitle}</b><br>
        <small>
            Further details will be provided after booking...
        </small>
    `);

    // ✅ Hover popup
    marker.on('mouseover', function () {
        this.openPopup();
    });

    marker.on('mouseout', function () {
        this.closePopup();
    });

});