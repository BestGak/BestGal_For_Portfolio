// hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
/*About*/

let buttonAbout = document.querySelector('#about');
let containerAbout = document.querySelector('#container_about');

buttonAbout.addEventListener('click', () => {
  containerAbout.scrollIntoView({ behavior: 'smooth' });
});


/*team*/

let buttonTeam = document.querySelector('#team');
let containerTeam = document.querySelector('#container_team');

buttonTeam.addEventListener('click', () => {
  containerTeam.scrollIntoView({ behavior: 'smooth' });
});

/*Booking*/

let buttonBooking = document.querySelector('#booking');
let containerBooking = document.querySelector('#container_booking');

buttonBooking.addEventListener('click', () => {
  containerBooking.scrollIntoView({ behavior: 'smooth' });
});


/*Menu*/

let buttonMenu = document.querySelector('#menu');
let containerMenu = document.querySelector('#container_menu');

buttonMenu.addEventListener('click', () => {
  containerMenu.scrollIntoView({ behavior: 'smooth' });
});

/*Galerie*/

let buttonGalerie = document.querySelector('#galerie');
let containerGalerie = document.querySelector('#container_galerie');

buttonGalerie.addEventListener('click', () => {
  containerGalerie.scrollIntoView({ behavior: 'smooth' });
});

/*Specialities*/
let buttonSpecialities = document.querySelector('#specialities');
let containerSpecialities = document.querySelector('#container_specialities');

buttonSpecialities.addEventListener('click', () => {
  containerSpecialities.scrollIntoView({ behavior: 'smooth' });
});

/*Events*/

let buttonEvents = document.querySelector('#events');
let containerEvents = document.querySelector('#container_events');

buttonEvents.addEventListener('click', () => {
  containerEvents.scrollIntoView({ behavior: 'smooth' });
});

/*Contact*/

let buttonContact = document.querySelector('#contact');
let containerContact = document.querySelector('#container_contact');

buttonContact.addEventListener('click', () => {
  containerContact.scrollIntoView({ behavior: 'smooth' });
});

/*Burger*/
const openMenu= document.querySelector('.dropdown');
const menu = document.querySelector('.dropdown-child');

openMenu.addEventListener('click', () => {
 menu.classList.toggle(".menu-open");
});

/*About*/

let buttonAbout1 = document.querySelector('#about1');
let containerAbout1 = document.querySelector('#container_about1');

buttonAbout1.addEventListener('click', () => {
  containerAbout1.scrollIntoView({ behavior: 'smooth' });
});

/*team*/

let buttonTeam1 = document.querySelector('#team1');
let containerTeam1 = document.querySelector('#container_team1');

buttonTeam1.addEventListener('click', () => {
  containerTeam1.scrollIntoView({ behavior: 'smooth' });
});

/*Booking*/

let buttonBooking1 = document.querySelector('#booking1');
let containerBooking1 = document.querySelector('#container_booking1');

buttonBooking1.addEventListener('click', () => {
  containerBooking1.scrollIntoView({ behavior: 'smooth' });
});

/*Menu*/

let buttonMenu2 = document.querySelector('#menu2');
let containerMenu1 = document.querySelector('#container_menu1');

buttonMenu2.addEventListener('click', () => {
  containerMenu1.scrollIntoView({ behavior: 'smooth' });
});

/*Galerie*/

let buttonGalerie1 = document.querySelector('#galerie1');
let containerGalerie1 = document.querySelector('#container_galerie1');

buttonGalerie1.addEventListener('click', () => {
  containerGalerie1.scrollIntoView({ behavior: 'smooth' });
});

/*Events*/

let buttonEvents1 = document.querySelector('#events1');
let containerEvents1 = document.querySelector('#container_events1');

buttonEvents1.addEventListener('click', () => {
  containerEvents1.scrollIntoView({ behavior: 'smooth' });
});

/*Contact*/

let buttonContact1 = document.querySelector('#contact1');
let containerContact1 = document.querySelector('#container_contact1');

buttonContact1.addEventListener('click', () => {
  containerContact1.scrollIntoView({ behavior: 'smooth' });
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.menu1')) {

  var dropdowns = document.getElementsByClassName("dropdown-child");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}
