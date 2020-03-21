// Elements and functions saved into js/elements.js file

// Function to check the status of response
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}

// Function to check for errors from above response test and display error message to the console if errors found
function fetchData(url) {
 return fetch(url)
 .then(checkStatus)
 .then((response) => {
   return response.json();
 })
 .catch(error => console.log('Something went wrong ' + error));
}

// Function to fetch API Url and return array results
fetchData('https://randomuser.me/api/?results=12&language=en')
 .then((data) => {
   const results = data.results;
   generateResults = [ ...results ];
   generateHTML(generateResults);
   generateModal(generateResults);
   showDisplay();
   hideDisplay();
   nextDisplay();
   prevDisplay();
   searchDisplay();
 })

 function showDisplay() {
   const card = document.querySelectorAll('div.card');
   const modalGenerator = document.querySelectorAll('div.modal-container');
   for (let i = 0; i < card.length; i++) {
       card[i].addEventListener('click', (e) => {
       let show = Array.prototype.indexOf.call(card, e.currentTarget);
       modalGenerator[show].style.display = 'block';
     })
   }
 }

 function hideDisplay() {
   const button = document.querySelectorAll('modal-close-btn');
   const modalGenerator = document.querySelectorAll('div.modal-container');
   for (let i = 0; i < modalGenerator.length; i++) {
     modalGenerator[i].addEventListener('click', (e) => {
       if (e.target.className === 'modal-close-btn') {
         let notShow = Array.prototype.indexOf.call(modalGenerator, e.currentTarget);
         modalGenerator[notShow].style.display = 'none';
        }
     })
   }
 }

 function nextDisplay() {
   const card = document.querySelectorAll('div.card');
   const modalGenerator = document.querySelectorAll('div.modal-container');
   for (let i = 0; i < modalGenerator.length; i++) {
     modalGenerator[i].addEventListener('click', (e) => {
     const nextBtn = Array.prototype.indexOf.call(modalGenerator, e.currentTarget);
       if (e.target.className === 'modal-next btn') {
         if (nextBtn <= 10) {
             modalGenerator[nextBtn].style.display = 'none';
             modalGenerator[nextBtn + 1].style.display = '';
         } else {
             modalGenerator[nextBtn].style.display = 'none';
             }
           }
       })
     }
 }

 function prevDisplay() {
   const card = document.querySelectorAll('div.card');
   const modalGenerator = document.querySelectorAll('div.modal-container');
   for (let i = 0; i < modalGenerator.length; i++) {
     modalGenerator[i].addEventListener('click', (e) => {
     const prevBtn = Array.prototype.indexOf.call(modalGenerator, e.currentTarget);
       if (e.target.className === 'modal-prev btn') {
         if (prevBtn >= 1) {
             modalGenerator[prevBtn].style.display = 'none';
             modalGenerator[prevBtn - 1].style.display = '';
         } else {
             modalGenerator[prevBtn].style.display = 'none';
             }
           }
       })
     }
 }

 //Function to construct individual search through employees profiles if typed into search box
   function searchDisplay() {
     const searchInput = document.getElementById('search-input');
     const profiles = document.querySelectorAll('div.card');
     const filterSearch = searchInput.value.toUpperCase();
       for (let i = 0; i < profiles.length; i++) {
         let cardName = profiles[i].getElementsByTagName('h3')[0];
         let showProfiles = cardName.textContent;
           if (showProfiles.toUpperCase().indexOf(filterSearch) > -1) {
               profiles[i].style.display = '';
             } else {
               profiles[i].style.display = 'none';

          }
       }
   }
