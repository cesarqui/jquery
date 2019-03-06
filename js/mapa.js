var map = L.map('map').setView([19.432608, -99.133209], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



cities = [
	'silicon valley',
	'guadalajara',
	'monterrey',
	'CDMX',
	'honk kong',
	'MCCarthis Campeche']
for (var i = 0; i < map.length; i++) {
 if (true) {}
}

L.marker([19.8454, -90.5237]).addTo(map)
.bindPopup('Campechido.')
.openPopup();

L.marker([37.387474000, -122.057543400]).addTo(map)
.bindPopup('silicon.')
.openPopup();

L.marker([20.659698800, -103.349609200]).addTo(map)
.bindPopup('Guadalajara.')
.openPopup();

L.marker([25.686614200, -100.316112600]).addTo(map)
.bindPopup('Monterrey.')
.openPopup();

L.marker([19.432607700, -99.133208000]).addTo(map)
.bindPopup('CDMX.')
.openPopup();

L.marker([22.396428000, 114.109497000]).addTo(map)
.bindPopup('Honk Hong.')
.openPopup();

L.marker([19.855250700, -90.528440800]).addTo(map)
.bindPopup('MCCarthis Campeche.')
.openPopup();