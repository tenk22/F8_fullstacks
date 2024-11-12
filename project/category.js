document.addEventListener("DOMContentLoaded", () => {
  const categoriesContainer = document.querySelector(".product-categories");

  fetch("http://localhost:3000/categories")
    .then((response) => response.json())
    .then((categories) => {
      categoriesContainer.innerHTML = categories
        .map(
          (category) => `
              <div class="category-card">
                <a href="#"><img src="${category.image}" alt="${category.name}" /></a>
                <h3><a href="#">${category.name}</a></h3>
              </div>
            `
        )
        .join("");
    })
    .catch((error) => console.error("Error fetching categories:", error));
});
