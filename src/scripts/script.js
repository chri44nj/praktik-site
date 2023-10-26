const hero = document.querySelector(".hero");
const attribute = document.querySelectorAll(".attribute");
let hoveredCount = 0;

attribute.forEach((attribute) => {
  attribute.addEventListener("mouseover", attributeHovered);
  console.log("hovered!");
});

function attributeHovered(event) {
  if (!event.target.classList.contains("hovered")) {
    hoveredCount++;
    console.log(hoveredCount);
    event.target.style.color = "var(--accent)";
    console.log("color changed!");
    event.target.classList.add("hovered");
  }

  if (hoveredCount == 10) {
    hero.style.backgroundImage = "url(pics/PB_C1.webp)";
    attribute.forEach((attribute) => {
      attribute.style.color = "var(--secondary)";
    });
  }
}

let clickedCount = 0;

const isMobile = "ontouchstart" in document.documentElement;

attribute.forEach((attr) => {
  if (isMobile) {
    attr.addEventListener("touchstart", attributeClicked);
    attr.addEventListener("touchend", attributeUnClicked);
  }
});

function attributeClicked(event) {
  if (!event.target.classList.contains("clicked")) {
    clickedCount++;
    event.target.style.color = "var(--accent)";
    event.target.classList.add("clicked");
  }

  const textbox = event.target.nextElementSibling;
  textbox.classList.toggle("textbox-clicked");

  if (clickedCount === 10) {
    hero.style.backgroundImage = "url(pics/PB_C1.webp)";
    attribute.forEach((attr) => {
      attr.style.color = "var(--secondary)";
    });
  }
}

function attributeUnClicked(event) {
  const textbox = event.target.nextElementSibling;
  textbox.classList.toggle("textbox-clicked");
}
