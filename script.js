const swiper = new Swiper('.my-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000
  },
  speed: 800,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

AOS.init({
  duration: 900,
  offset: 120,
  once: true
});

 function filterMenu(category) {
  const items = document.querySelectorAll(".food-menu .f1");

  items.forEach(item => {
    const itemCategory = item.dataset.category;

    if (category === "all" || itemCategory === category) {
      item.style.display = "";        // ?? original CSS restore
    } else {
      item.style.display = "none";
    }
  });

  document.getElementById("menu").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}