// Function to add animation class when element is in view
const animateOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Stop observing once the animation has been triggered
      observer.unobserve(entry.target);
    }
  });
};

// Create an Intersection Observer
const observer = new IntersectionObserver(animateOnScroll, {
  threshold: 0.4, // Trigger when 50% of the element is in view
});

// Select elements to animate

document.querySelectorAll(".titlepage span").forEach((element) => {
  observer.observe(element);
});
document.querySelectorAll("#clear_mind img").forEach((element) => {
  observer.observe(element);
});

// document.querySelectorAll(".service_img figure img").forEach((element) => {
//   observer.observe(element);
// });
