const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" 
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},

{
	templeName: "Mesa Arizona",
    location: "	Mesa, Arizona, United States",
    dedicated: "1927, October, 23",
    area: 113916,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_main.jpeg"
},
  {
    templeName: "Seoul Korea",
    location: "	Seoul, South Korea",
    dedicated: "1985, December, 14 ",
    area: 	28057,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22314.jpg"
  },
  {
    templeName: "Raleigh North Carolina",
    location: "	Apex, North Carolina, United States",
    dedicated: "1999, December, 18",
    area: 	12864,
    imageUrl:"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/raleigh-north-carolina/400x250/3-83ddf01d389928892e38cac8f2865b16a8649e17.jpeg"
  },
];

makeTempleCard(temples);

const oldButton = document.getElementById('old');
oldButton.addEventListener("click", () => {makeTempleCard(temples.filter(temple => Number(temple.dedicated.split(",")[0]) <= 1900))});

const newButton = document.getElementById('new');
newButton.addEventListener("click", () => {makeTempleCard(temples.filter(temple => Number(temple.dedicated.split(",")[0]) >= 2000))});

const homeButton = document.getElementById('home');
homeButton.addEventListener("click", () => {makeTempleCard(temples)})

const largeButton = document.getElementById('large');
largeButton.addEventListener('click', () => { makeTempleCard(temples.filter(temple => temple.area > 90000))});

const smallButton = document.getElementById('small');
smallButton.addEventListener('click', () => {makeTempleCard(temples.filter(temple => temple.area < 10000))});

function makeTempleCard(filtertmp) {
  document.querySelector(".images").innerHTML = '';  
  filtertmp.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p")
    let imge =document.createElement("img");

    name.textContent = temple.templeName;
    location.textContent = `Location: ${temple.location}`;
    dedicated.textContent = `Dedicated ${temple.dedicated}`;
    area.textContent = `Size: ${temple.area}`;
    imge.setAttribute("src", temple.imageUrl);
    imge.setAttribute("alt", `${temple.templeName} Temple`);
    imge.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(imge);
    document.querySelector(".images").appendChild(card);
  });
};