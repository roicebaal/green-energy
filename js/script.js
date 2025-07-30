// Preload Images
function preloader() {
  const imagesList = [
    "img/Community Wind Projects.jpg",
    "img/Energy Efficient Appliances.jpg",
    "img/Solar Panel Subsidies.jpg"
  ];
  const images = [];
  for (let i = 0; i < imagesList.length; i++) {
    images[i] = new Image();
    images[i].src = imagesList[i];
  }
  console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}
window.addEventListener("load", preloader);

// Resource Object
const resources = {
  solar: {
    headingContent: "Solar Panel Subsidies",
    bodyText: "Governments can provide subsidies to make solar panels affordable for average-income households.",
    imgUrl: "img/Solar Panel Subsidies.jpg",
    imgAlt: "Solar Panels"
  },
  wind: {
    headingContent: "Community Wind Projects",
    bodyText: "Local wind projects can generate shared energy at reduced costs for communities.",
    imgUrl: "img/Community Wind Projects.jpg",
    imgAlt: "Wind Turbines"
  },
  efficient: {
    headingContent: "Energy Efficient Appliances",
    bodyText: "Switching to efficient appliances reduces energy bills and lowers consumption.",
    imgUrl: "img/Energy Efficient Appliances.jpg",
    imgAlt: "Efficient Appliances"
  }
};

// Buttons and Content Handling
const buttons = document.querySelectorAll(".buttons button");
const contentContainer = document.getElementById("dynamic-content");

function handleSelection(event) {
  buttons.forEach(btn => btn.removeAttribute("id"));
  event.target.setAttribute("id", "active-button");

  if (event.target.textContent === "Solution 1") {
    updateContent(resources.solar);
  } else if (event.target.textContent === "Solution 2") {
    updateContent(resources.wind);
  } else {
    updateContent(resources.efficient);
  }
}

function updateContent(resource) {
  contentContainer.innerHTML = `
    <h1>${resource.headingContent}</h1>
    <img src="${resource.imgUrl}" alt="${resource.imgAlt}">
    <p>${resource.bodyText}</p>
  `;
}

buttons.forEach(button => button.addEventListener("click", handleSelection));

// ✅ Hamburger Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
