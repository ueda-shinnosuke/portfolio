(() => {
  "use strict";

  // スマホ用ナビゲーション
  const menuButton = document.querySelector(".menu-toggle");
  const globalNav = document.querySelector("#global-nav");

  if (menuButton && globalNav) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      globalNav.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      globalNav.classList.toggle("is-open", !isExpanded);
    });

    globalNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (
        menuButton.getAttribute("aria-expanded") === "true" &&
        !globalNav.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMenu();
      }
    });
  }

  // 作品のカテゴリー絞り込み
const filterButtons = document.querySelectorAll(".filter-button");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    workCards.forEach((card) => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.hidden = !matches;
    });
  });
});

 
})();
