"use strict";
const items = document.querySelectorAll(".faq__item__cta");
console.log(items);

function toggleAccordion() {
	const itemToggle = this.getAttribute("aria-expanded");

	for (let i = 0; i < items.length; i++) {
		items[i].setAttribute("aria-expanded", "false");
	}

	if (itemToggle == "false") {
		this.setAttribute("aria-expanded", "true");
	}
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
