const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;
document.getElementById("lastModified").innerHTML = document.lastModified;

const temp = "50";
const conditions = "Partly Cloudy";
const wind_speed = "5";

function calculateWindChill(temp, speed) {
  return 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
}
if (temp <= 50 && wind_speed > 3){
    const windchill = calculateWindChill(temp,wind_speed);
    document.getElementById('windchill').textContent = windchill.toFixed(1);
}
else {
    document.getElementById('windchill').textContent = 'N/A';
}
document.getElementById('temperature').textContent = temp;
document.getElementById('condition').textContent = conditions;
document.getElementById('wind').textContent = wind_speed;
