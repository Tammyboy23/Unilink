import updateNavbar from './login.js';


const listings = [
  {
    title: "Graphic Designer",
    description: "I design flyers & logos",
    price: "₦3,000",
    whatsapp: "2348012345678"
  },
  {
    title: "Laptop Repair",
    description: "Fast repairs & upgrades",
    price: "₦5,000",
    whatsapp: "2348098765432"
  },
  {
    title: "Math Tutor",
    description: "WAEC & JAMB tutorials",
    price: "₦2,500",
    whatsapp: "2348123456789"
  }
];

const container = document.getElementById("listingContainer");

listings.forEach(item => {
  container.innerHTML += `
    <div class="listing-card">
      <h4>${item.title}</h4>
      <p>${item.description}</p>
      <span>${item.price}</span><br>
      <a 
        href="https://wa.me/${item.whatsapp}?text=Hi%20I%20saw%20your%20listing%20on%20Unilink" 
        target="_blank"
        class="whatsapp"
      >
        Chat on WhatsApp
      </a>
    </div>
  `;
});
document.getElementById("login").onclick = function() {
  window.location.href = "login.html";
}
document.getElementById("sign-up").onclick = function() {
  window.location.href = "sign-up.html";
}

// Simulated login status
 // change to true to test

const guestNav = document.querySelector('.nav-buttons');
const userNav = document.querySelector('.nav-user');

function updateNavbar() {
  if(isLoggedIn) {
    guestNav.style.display = 'none';
    userNav.style.display = 'flex';
  } else {
    guestNav.style.display = 'flex';
    userNav.style.display = 'none';
  }
}

// Call on page load
updateNavbar();

// Wait until everything (images, CSS, scripts) fully loads
$(window).on('load', function() {
    $('.loader').fadeOut('slow');
});