let careerLink = document.querySelector('#careerLink');
let contactLink = document.querySelector('#contactLink');
let carrerbutton = document.querySelectorAll('.showCareerButton');
let contactbutton = document.querySelectorAll('.showContactButton')
let career =  document.querySelector('#career');
let contact =  document.querySelector('#contact');
let bookdemos =  document.querySelectorAll('.book-demos');
// JavaScript to toggle visibility of career and contact forms with smooth animation
carrerbutton.forEach((btn)=>{
  btn.addEventListener('click', function() {
    carrerbutton[1].style.backgroundColor = 'white';
    carrerbutton[1].style.color = '#7a6ad8';
    contactbutton[1].style.backgroundColor = '#7a6ad8';
    contactbutton[1].style.color = 'white';
    career.classList.add('show');
    contact.classList.remove('show');
    contactLink.setAttribute('href', '#career');
    careerLink.setAttribute('href', '#career');
  });
})

contactbutton.forEach((btn)=>{
  btn.addEventListener('click', function() {
    contactbutton[1].style.backgroundColor = 'white';
    contactbutton[1].style.color = '#7a6ad8';
    carrerbutton[1].style.backgroundColor = '#7a6ad8';
    carrerbutton[1].style.color = 'white';
    contact.classList.add('show');
    career.classList.remove('show');
    careerLink.setAttribute('href', '#contact');
    contactLink.setAttribute('href', '#contact');
  });
})


bookdemos.forEach((book) => {
  book.addEventListener('click', (e) => contactLink.click())
})




