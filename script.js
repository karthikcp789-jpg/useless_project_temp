const teamDestinations = [
  {
    title: "Alleppey",
    tag: "backwaters",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    duration: "4 nights",
    price: "₹12,499",
    rating: "4.9",
    description: "Houseboat stays, paddy fields, and unforgettable sunrise moments."
  },
  {
    title: "Munnar",
    tag: "hills",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    duration: "3 nights",
    price: "₹10,999",
    rating: "4.8",
    description: "Tea gardens, cool breezes, and scenic mountain drives."
  },
  {
    title: "Kovalam",
    tag: "beaches",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    duration: "5 nights",
    price: "₹14,700",
    rating: "4.9",
    description: "Golden beaches, seafood dinners, and relaxed sunset walks."
  },
  {
    title: "Fort Kochi",
    tag: "culture",
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=900&q=80",
    duration: "2 nights",
    price: "₹8,199",
    rating: "4.7",
    description: "Heritage streets, spice markets, and vibrant coastal culture."
  },
  {
    title: "Wayanad",
    tag: "hills",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    duration: "4 nights",
    price: "₹11,750",
    rating: "4.8",
    description: "Waterfalls, forest trails, and peaceful eco-resorts."
  },
  {
    title: "Ashtamudi",
    tag: "backwaters",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    duration: "3 nights",
    price: "₹9,999",
    rating: "4.8",
    description: "Quiet lagoons, backwater cruises, and village charm."
  }
];

const destinationGrid = document.getElementById("destinationGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const form = document.getElementById("tripForm");
const feedback = document.getElementById("formFeedback");
const year = document.getElementById("year");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

function renderDestinations(filter = "all") {
  const items = filter === "all"
    ? teamDestinations
    : teamDestinations.filter((place) => place.tag === filter);

  destinationGrid.innerHTML = items
    .map(
      (place) => `
        <article class="destination-card reveal">
          <img src="${place.image}" alt="${place.title}">
          <div class="card-body">
            <div class="card-top">
              <span class="card-tag">${place.tag}</span>
              <span class="rating">★ ${place.rating}</span>
            </div>
            <h3>${place.title}</h3>
            <p>${place.description}</p>
            <div class="card-meta">
              <span>${place.duration}</span>
              <strong>${place.price}</strong>
            </div>
            <button class="btn btn-primary">Explore Plan</button>
          </div>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    renderDestinations(button.dataset.filter);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name");
  const destination = formData.get("destination");
  const duration = formData.get("duration");

  feedback.textContent = `Thanks, ${name}! Your ${duration} plan for ${destination} is being crafted for you.`;
  form.reset();
});

const testimonials = document.querySelectorAll(".testimonial");
let activeTestimonialIndex = 0;

setInterval(() => {
  testimonials[activeTestimonialIndex].classList.remove("active");
  activeTestimonialIndex = (activeTestimonialIndex + 1) % testimonials.length;
  testimonials[activeTestimonialIndex].classList.add("active");
}, 3000);

if (year) {
  year.textContent = new Date().getFullYear();
}

navToggle?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

renderDestinations();
document.querySelectorAll(".destination-card.reveal").forEach((element) => observer.observe(element));
