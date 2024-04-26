// Get all elements with class .rte
const rteEl = document.querySelectorAll(".rte");

const navList = document.querySelector(".scroll-spy__list");

if(navList && rteEl) {
  // Loop through each .rte element
  rteEl.forEach(function (element) {
    // Find all h2 elements within the .rte element
    const h2Elements = element.querySelectorAll("h2");

    // Loop through each h2 element
    h2Elements.forEach(function (h2) {
      // Get the text content of the h2 element
      const h2Content = h2.textContent;

      // Remove any special characters and spaces from the h2 content
      const id = h2Content.replace(/[^\w]+/g, "-");

      // Set the id attribute of the h2 element to the modified content
      h2.setAttribute("id", id);

      h2.setAttribute("tabindex", "-1");

      // Create a new list item for the h2 spy
      const listItem = document.createElement("li");
      listItem.classList.add("scroll-spy__item", "faq__item");

      // Create a new anchor element and set its href attribute to the id
      const anchor = document.createElement("a");
      anchor.setAttribute("data-smooth-scroll", "data-smooth-scroll");
      23;

      anchor.classList.add("scroll-spy__anchor", "heading", "heading--small");
      anchor.href = "#" + id;
      anchor.textContent = h2Content;

      // Append the anchor to the list item
      listItem.appendChild(anchor);

      // Append the list item to the navigation list
      navList.appendChild(listItem);
    });
  });
}

