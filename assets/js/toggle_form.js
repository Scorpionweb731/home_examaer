let careerLink = document.querySelector('#careerLink');
let contactLink = document.querySelector('#contactLink');
let carrerbutton = document.querySelectorAll('.showCareerButton');
let contactbutton = document.querySelectorAll('.showContactButton')
// JavaScript to toggle visibility of career and contact forms with smooth animation
carrerbutton.forEach((btn)=>{
  btn.addEventListener('click', function() {
    carrerbutton[1].style.backgroundColor = 'white';
    carrerbutton[1].style.color = '#7a6ad8';
    contactbutton[1].style.backgroundColor = '#7a6ad8';
    contactbutton[1].style.color = 'white';
    document.getElementById('career').classList.add('show');
    document.getElementById('contact').classList.remove('show');
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
    document.getElementById('contact').classList.add('show');
    document.getElementById('career').classList.remove('show');
    careerLink.setAttribute('href', '#contact');
    contactLink.setAttribute('href', '#contact');
  });
})


// Specific Dates
function convertToDateTimeLocalString(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const currentTime = new Date();
document.getElementById("schedule").min = convertToDateTimeLocalString(currentTime);

const maxTime = new Date(currentTime.getTime() + 15 * 24 * 60 * 60 * 1000);
document.getElementById("schedule").max = convertToDateTimeLocalString(maxTime);