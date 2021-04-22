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