const forwardReadMoreBTN = document.getElementsByClassName("about-us-btn")[1];
const backwardReadMoreBTN = document.getElementsByClassName("about-us-btn")[0];
const titlepage = document.getElementsByClassName("titlepage")[2];
let firstSpan = document.querySelector(".about-us");

const aboutUsText = [
  firstSpan.textContent,
  `From the moment you step through our doors, you'll be greeted by a team of passionate trainers and staff who are dedicated to helping you achieve your fitness aspirations. Whether you're looking to build strength, improve flexibility, or simply enhance your overall well-being, we're here to guide and support you every step of the way.

But BeBetter Gym is more than just a place to break a sweat. It's a place where friendships are formed, goals are achieved, and lives are transformed. Our vibrant community of members inspires and motivates one another, creating a positive and uplifting atmosphere that makes every workout feel like a celebration of progress and growth.`,
  `At BeBetter Gym, we believe in the power of holistic wellness – nurturing not only the body but also the mind and spirit. That's why we offer a variety of classes and programs designed to nourish every aspect of your being, from high-intensity workouts to restorative yoga sessions to mindfulness workshops.

But perhaps the most important part of our story is you – our members. You are the heart and soul of BeBetter Gym, and it's your dedication, perseverance, and unwavering commitment to self-improvement that drives us forward every day. Together, we are stronger, healthier, and more vibrant than we could ever be alone`,
  `So whether you're a seasoned athlete or just starting out on your fitness journey, we invite you to join us at BeBetter Gym and become a part of our story. Together, let's embark on a journey of vitality, strength, and empowerment. Because at BeBetter Gym, we believe that everyone deserves to live life to the fullest – and we're here to help you make it happen.`,
];
forwardReadMoreBTN.addEventListener("click", (e) => {
  let index = aboutUsText.indexOf(firstSpan.textContent) + 1;
  if (index === aboutUsText.length) {
    index = 0;
  }
  const span = document.createElement("span");
  span.classList.add("about-us");
  span.textContent = aboutUsText[index];
  titlepage.removeChild(firstSpan);
  titlepage.appendChild(span);
  firstSpan = span;
});

backwardReadMoreBTN.addEventListener("click", () => {
  let index = aboutUsText.indexOf(firstSpan.textContent) - 1;
  if (index < 0) {
    index = aboutUsText.length - 1;
  }
  const span = document.createElement("span");
  span.classList.add("about-us");
  span.textContent = aboutUsText[index];
  titlepage.removeChild(firstSpan);
  titlepage.appendChild(span);
  firstSpan = span;
});
