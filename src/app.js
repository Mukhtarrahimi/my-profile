let home = document.querySelector('.home');
let work = document.querySelector('.work');
let contact = document.querySelector('.contact');
let skill = document.querySelector('.skill');

let homeBtn = document.querySelector('.home-btn');
let workBtn = document.querySelector('.work-btn');
let contactBtn = document.querySelector('.contact-btn');
let skillBtn = document.querySelector('.skill-btn');

homeBtn.addEventListener('click', () => {
    home.style.display = 'flex';
    work.style.display = 'none';
    contact.style.display = 'none';
    skill.style.display = 'none';
    // btn 
    homeBtn.classList.add('active')
    homeBtn.classList.remove('active')
    contactBtn.classList.remove('active')
    skillBtn.classList.remove('active')
});
workBtn.addEventListener('click', () => {
    home.style.display = 'none';
    work.style.display = 'flex';
    contact.style.display = 'none';
    skill.style.display = 'none';
    // btn 
    workBtn.classList.add('active')
    homeBtn.classList.remove('active')
    contactBtn.classList.remove('active')
    skillBtn.classList.remove('active')
});
contactBtn.addEventListener('click', () => {
    home.style.display = 'none';
    work.style.display = 'none';
    contact.style.display = 'flex';
    skill.style.display = 'none';
    // btn 
    workBtn.classList.remove('active')
    homeBtn.classList.remove('active')
    contactBtn.classList.add('active')
    skillBtn.classList.remove('active')
});
skillBtn.addEventListener('click', () => {
    home.style.display = 'none';
    work.style.display = 'none';
    contact.style.display = 'none';
    skill.style.display = 'flex';
    // btn 
    workBtn.classList.remove('active')
    homeBtn.classList.remove('active')
    contactBtn.classList.remove('active')
    skillBtn.classList.add('active')
});




// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab(tabname) {
//   for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for (tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }
