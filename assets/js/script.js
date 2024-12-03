// respons 

const toggle = document.querySelector("#toggle");
const nav = document.querySelector(".responsive-navbar");
toggle.addEventListener("click", () => {
  nav.classList.toggle('active-nav')
})
























const courses = [
  {
    title: "Rust + Solana for Beginners",
    badge: "FREE",
    image: "./assets/images/course1.png",
    lectures: "56 lectures",
    price: "Free",
    arrowIcon: "./assets/images/login-icon.svg"
  },
  {
    title: "JavaScript Mastery Bootcamp",
    badge: "PAID",
    image: "./assets/images/course2.png",
    lectures: "100 lectures",
    price: "$49.99",
    arrowIcon: "./assets/images/login-icon.svg"
  },
  {
    title: "React & Redux for Professionals",
    badge: "FREE",
    image: "./assets/images/course3.png",
    lectures: "80 lectures",
    price: "Free",
    arrowIcon: "./assets/images/login-icon.svg"
  },
  {
    title: "Full-Stack Development with Node.js",
    badge: "PAID",
    image: "./assets/images/course4.png",
    lectures: "120 lectures",
    price: "$79.99",
    arrowIcon: "./assets/images/login-icon.svg"
  },
  {
    title: "Rust + Solana for Beginners",
    badge: "FREE",
    image: "./assets/images/course1.png",
    lectures: "56 lectures",
    price: "Free",
    arrowIcon: "./assets/images/login-icon.svg"
  },
  {
    title: "JavaScript Mastery Bootcamp",
    badge: "PAID",
    image: "./assets/images/course2.png",
    lectures: "100 lectures",
    price: "$49.99",
    arrowIcon: "./assets/images/login-icon.svg"
  },
  {
    title: "React & Redux for Professionals",
    badge: "FREE",
    image: "./assets/images/course3.png",
    lectures: "80 lectures",
    price: "Free",
    arrowIcon: "./assets/images/login-icon.svg"
  },
  {
    title: "Full-Stack Development with Node.js",
    badge: "PAID",
    image: "./assets/images/course4.png",
    lectures: "120 lectures",
    price: "$79.99",
    arrowIcon: "./assets/images/login-icon.svg"
  }

];

console.log(courses)
let clutter = '';
const container = document.querySelector(".course-section");

courses.forEach(course => {
  console.log(course)
  clutter += ` <div class="card">
                <div class="card-content">
                    <div class="title">
                        <h2>${course.title}</h2>
                    </div>
                    <div class="badge">${course.badge}</div>
                    <div class="image-section">
                        <img src="${course.image}" alt="Character" class="character">

                    </div>
                    <div class="details flex align-center justify-between">
                        <div>
                           <p>${course.lectures}</p>
                           <p>${course.price}</p>
                        </div>

                        <div class="arrow">
                          <img src="${course.arrowIcon}" alt="">
                        </div>
                    </div>

                </div>
            </div>`
  container.innerHTML = clutter;
});


// review silders

$('.review-silders').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
