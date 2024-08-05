
var beachIcon = L.icon({
    iconUrl: 'pics/beach_icon.webp',
    

    iconSize:     [60, 60], // size of the icon
    iconAnchor:   [30, 30], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

var boatIcon = L.icon({
    iconUrl: 'pics/boat_icon.png',
    

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

var dogIcon = L.icon({
    iconUrl: 'pics/dog_icon.png',
    

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

var sailboatIcon = L.icon({
    iconUrl: 'pics/sailboat_icon.png',
    

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [20, 20], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
});

var map = L.map('map').setView([42.04560, -87.67232], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var lighthouse = L.marker([42.0640, -87.6744], {icon:beachIcon}).addTo(map);
lighthouse.bindPopup("Lighthouse Beach");
var clark = L.marker([42.0493, -87.6728], {icon:beachIcon}).addTo(map);
clark.bindPopup("Clark Street Beach");
var dog_beach = L.marker([42.0470, -87.6724], {icon:dogIcon}).addTo(map);
dog_beach.bindPopup("Dog Beach")
var church = L.marker([42.04560, -87.67232], {icon:boatIcon}).addTo(map);
church.bindPopup("Boat Ramp")
var greenwood = L.marker([42.0432, -87.6714], {icon:beachIcon}).addTo(map);
greenwood.bindPopup("Greenwood Street Beach")
var dempster = L.marker([42.0408, -87.6696], {icon:sailboatIcon}).addTo(map);
dempster.bindPopup("Dempster Street Sailing Beach + Beach Office");
var lee = L.marker([42.0363, -87.6699], {icon:beachIcon}).addTo(map);
lee.bindPopup("Lee Street Beach");
var south = L.marker([42.0275, -87.6678], {icon:beachIcon}).addTo(map);
south.bindPopup("South Boulevard Beach");


function displayElement(id)
{
    document.getElementById(id).style.display = "block";
}

function hideElement(id)
{
    document.getElementById(id).style.display = "none";
}


function toggleContent(button) {
    const contentId = button.getAttribute("toggle-content");
    const contentElement = document.getElementById(contentId);
    const isCurrentlyVisible = contentElement.style.display === "block";
    
    if (isCurrentlyVisible) {
        hideElement(contentId);
    } else {
        displayElement(contentId);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input[type="checkbox"][toggle-content]').forEach(checkbox => {
        toggleContent(checkbox);
    });
    });