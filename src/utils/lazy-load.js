const countryCards = document.querySelectorAll("country-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let target = entry.target;
    target.classList.add("show");

    if (entry.isIntersecting) {
      observer.unobserve(target);
    }
  });
});

countryCards.forEach((card) => observer.observe(card));
