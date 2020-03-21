const webUrl = 'https://randomuser.me/api/'; // Api link for profiles

// Call function for elements in HTML form framework
const grid = document.getElementsByClassName('search-container');
const header = document.querySelector('header');
const bodyModal = document.querySelector('body');
const gallery = document.getElementById('gallery');
const card = document.createElement('div');
const name = document.createElement('h3');
const button = document.createElement('button');
const prevBtn = document.createElement('button');
const nextBtn = document.createElement('button');

card.classList = 'card';
name.classList = 'card-name cap';
button.classList = 'modal-close-btn';
prevBtn.classList = 'modal-prev btn';
nextBtn.classList = 'modal-next btn';

// Function to create attribute helper for muliple element attributes
function setAttributes(all, attr) {
  for (var key in attr) {
    all.setAttribute(key, attr[key]);
  }
}

// Create, add attribute and append elements for search form attributes
const form = document.createElement('FORM');
setAttributes(form, {
  "action" : "#",
  "method" : "GET"
});

const searchInput = document.createElement('input');
setAttributes(searchInput, {
  "type" : "search",
  "id" : "search-input",
  "class" : "search-input",
  "placeholder" : "Search...",
  "onkeyup" : "searchDisplay()"
});

const submit = document.createElement('input');
setAttributes(submit, {
  "type" : "submit",
  "id" : "search-submit",
  "class" : "search-submit",
  "onclick" : "searchDisplay()"
});

header.appendChild(form);
form.appendChild(searchInput);
form.appendChild(submit);

// Function to display array results and append to specified elements
function generateHTML(data) {
  data.forEach( data => {

// Create variable elements for profile display
    const gallery = document.getElementById('gallery');
    const card = document.createElement('div');
    const imageContainer = document.createElement('div');
    const infoContainer = document.createElement('div');
    const image = document.createElement('IMG');
    const name = document.createElement('h3');
    const cardText = document.createElement('p');
    const cardTextCap = document.createElement('p');

// Create variable attributes for profile display
    card.classList = 'card';
    imageContainer.classList = 'card-img-container';
    infoContainer.classList = 'card-info-container';
    image.classList = 'card-img';
    image.src = 'https://placehold.it/90x90';
    name.classList = 'card-name cap';
    cardText.classList = 'card-text';
    cardTextCap.classList = 'card-text cap';

// Append elements to arrange display of profiles
    gallery.appendChild(card);
    card.appendChild(imageContainer);
    card.appendChild(infoContainer);
    imageContainer.appendChild(image);
    infoContainer.appendChild(name);
    infoContainer.appendChild(cardText);
    infoContainer.appendChild(cardTextCap);

// Assign API attributes to display elements
  if (typeof(data.picture.medium) != 'undefined') {
      name.textContent = data.name.first + ' ' + data.name.last;
      cardText.textContent = data.email;
      cardTextCap.textContent = data.location.city + ', ' + data.location.state;
     }
      image.src = data.picture.medium;
      name.textContent = data.name.first + ' ' + data.name.last;
      cardText.textContent = data.email;
      cardTextCap.textContent = data.location.city + ', ' + data.location.state;
    });
}

// function to display the pop up of profile with extra details of profile when clicked
  function generateModal(data) {
    data.forEach( data => {

    const bodyModal = document.querySelector('body');
    const modalContainer = document.createElement('div');
    const modalImageContainer = document.createElement('div');
    const modalInfoContainer = document.createElement('div');
    const modal = document.createElement('div');
    const button = document.createElement('button');
    const modalImage = document.createElement('IMG');
    const nameTwo = document.createElement('h3');
    const modalEmail = document.createElement('p');
    const modalCity = document.createElement('p');
    const group = document.createElement('hr');
    const phoneNumber = document.createElement('p');
    const address = document.createElement('p');
    const birthday = document.createElement('p');
    const btnContainer = document.createElement('div');
    const prevBtn = document.createElement('button');
    const nextBtn = document.createElement('button');

    modalContainer.classList = 'modal-container';
    modalImageContainer.classList = 'modal-info-container';
    modalInfoContainer.classList = 'modal-info-container';
    modal.classList = 'modal';
    modalImage.classList = 'modal-img';
    nameTwo.classList = 'modal-text cap';
    modalEmail.classList = 'modal-text';
    modalCity.classList = 'modal-text cap';
    phoneNumber.classList = 'modal-text';
    address.classList = 'modal-text';
    birthday.classList = 'modal-text';
    button.classList = 'modal-close-btn';
    btnContainer.classList = 'modal-btn-container';
    prevBtn.classList = 'modal-prev btn';
    nextBtn.classList = 'modal-next btn';


    bodyModal.appendChild(modalContainer);
    modalContainer.appendChild(modal);
    modal.appendChild(button);
    modal.appendChild(modalInfoContainer);
    modalContainer.style.display = 'none';

    modalInfoContainer.appendChild(modalImage);
    modalInfoContainer.appendChild(nameTwo);
    modalInfoContainer.appendChild(modalEmail);
    modalInfoContainer.appendChild(modalCity);
    modalInfoContainer.appendChild(group);
    modalInfoContainer.appendChild(phoneNumber);
    modalInfoContainer.appendChild(address);
    modalInfoContainer.appendChild(birthday);
    modalInfoContainer.appendChild(btnContainer);
    btnContainer.appendChild(prevBtn);
    btnContainer.appendChild(nextBtn);

    modalImage.src = data.picture.large;
    nameTwo.textContent = data.name.first + ' ' + data.name.last;
    modalEmail.textContent = data.email;
    phoneNumber.textContent = data.cell;
    address.textContent = data.location.street.number + ' ' + data.location.street.name + ', ' + data.location.postcode;
    // Regular expression converter to show birthday in correct date order
    function replaceBirthday(date){
      let currentDisplay = /(\d+)(-)(\d+)(-)(\d+)/;
      let replaceDate = date.replace(currentDisplay, "$3/$5/$1");
         return replaceDate.substr(0, 10);
    }
    birthday.textContent = "Birthday: " + replaceBirthday(data.dob.date);
    button.textContent = "X";
    nextBtn.textContent = "Next";
    prevBtn.textContent = "Prev";
    })
  }
