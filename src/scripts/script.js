/* WEB ATTRIBUTES */

const hero = document.querySelector(".hero");
const attribute = document.querySelectorAll(".attribute");
let hoveredCount = 0;

attribute.forEach((attribute) => {
  attribute.addEventListener("mouseover", attributeHovered);
  console.log("hovered!");
});

function attributeHovered(event) {
  const clickedAttribute = event.target;
  if (!clickedAttribute.classList.contains("hovered")) {
    hoveredCount++;
    console.log(hoveredCount);
    clickedAttribute.style.color = "var(--accent2)";
    console.log("color changed!");
    clickedAttribute.classList.add("hovered");
  }

  if (hoveredCount == 10) {
    hero.style.backgroundImage = "url(pics/PB_C1.webp)";
    attribute.forEach((attribute) => {
      attribute.style.color = "var(--secondary)";
    });
  }
}

/* MOBILE ATTRIBUTES */

let clickedCount = 0;

const isMobile = "ontouchstart" in document.documentElement;

attribute.forEach((attribute) => {
  if (isMobile) {
    attribute.addEventListener("click", attributeClicked);
  }
});

function attributeClicked(event) {
  const clickedAttribute = event.target;
  if (!clickedAttribute.classList.contains("clicked")) {
    clickedCount++;
    clickedAttribute.style.color = "var(--accent2)";
    clickedAttribute.classList.add("clicked");
  }

  const textbox = clickedAttribute.nextElementSibling;
  const allTextBoxes = document.querySelectorAll(".textbox");

  allTextBoxes.forEach((textbox) => {
    if (textbox.classList.contains("textbox-clicked")) {
      textbox.classList.remove("textbox-clicked");
    }
  });

  attribute.forEach((attr) => {
    if (attr !== clickedAttribute) {
      attr.style.textDecoration = "none";
    }
  });

  if (clickedAttribute.style.textDecoration === "underline") {
    clickedAttribute.style.textDecoration = "none";
    textbox.classList.remove("textbox-clicked");
  } else {
    clickedAttribute.style.textDecoration = "underline";
    textbox.classList.add("textbox-clicked");
  }

  if (clickedCount === 10) {
    hero.style.backgroundImage = "url(pics/PB_C1.webp)";
    attribute.forEach((attribute) => {
      attribute.style.color = "var(--secondary)";
    });
  }
}

/* BURGIRR */
const burgerIcon = document.querySelector(".burger-icon");
const burgerBar = document.querySelectorAll(".bar");
const menu = document.querySelector(".menu");

burgerIcon.addEventListener("click", checkBurger);

function checkBurger() {
  const menuContainer = document.querySelector(".menu-container");

  if (menuContainer.style.left === "0px") {
    menuContainer.style.left = "-50%";
    burgerIcon.classList.remove("extra-margin");
    burgerBar.forEach((bar) => {
      bar.classList.remove("open");
    });
  } else {
    menuContainer.style.left = "0px";
    burgerIcon.classList.add("extra-margin");
    burgerBar.forEach((bar) => {
      bar.classList.add("open");
    });
  }
}

const links = document.querySelectorAll(".menu-container ul li");
links.forEach((link) => {
  link.addEventListener("click", checkBurger);
});
