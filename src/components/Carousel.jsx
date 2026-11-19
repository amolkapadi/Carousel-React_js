
import { useState } from "react";


const users = [
  {
    name: "David Dell",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "A passionate developer who loves building creative solutions and exploring new technologies.",
  },
  {
    name: "Rose Bush",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "A creative designer focused on creating beautiful, user-friendly and meaningful digital experiences.",
  },
  {
    name: "Jones Gail",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    description:
      "An enthusiastic professional who enjoys teamwork, learning new skills and solving challenges.",
  },
  {
    name: "Sarah Smith",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description:
      "A dedicated problem solver with a passion for innovation, creativity and continuous improvement.",
  },
  {
    name: "Michael John",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    description:
      "A technology enthusiast who believes in turning innovative ideas into impactful solutions.",
  },
];


export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const previousSlide = () => {
    setActiveIndex((prev) => (prev - 1 + users.length) % users.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % users.length);
  };

  // Show previous, active and next cards
  const visibleUsers = [
    users[(activeIndex - 1 + users.length) % users.length],
    users[activeIndex],
    users[(activeIndex + 1) % users.length],
  ];

  return (
    <section className="carousel-section">
      <div className="carousel-wrapper">
        <button
          className="arrow-btn prev-btn"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          <span className="arrow arrow-left"></span>
        </button>

        <div className="cards-container">
          {visibleUsers.map((user, index) => (
            <article
              className={`profile-card ${
                index === 1 ? "active-card" : "side-card"
              }`}
              key={user.name}
            >
              <div className="card-header">
                <div className="profile-image-wrapper">
                  <img src={user.image} alt={user.name} />
                </div>
              </div>

              <div className="card-content">
                <h3>{user.name}</h3>

                <p>{user.description}</p>

                <button
                  className="view-btn"
                >
                  View More
                </button>
              </div>
            </article>
          ))}
        </div>

        <button
          className="arrow-btn next-btn"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <span className="arrow arrow-right"></span>
        </button>
      </div>

      <div className="carousel-dots">
        {users.map((user, index) => (
          <button
            key={user.name}
            className={`dot ${activeIndex === index ? "active-dot" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>

    </section>
  );
}
