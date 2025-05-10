import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Story.css';

function Story() {
  const reviews = [
    {
      name: "Robert Lee",
      role: "Construction Worker",
      img: "/reviewer-1.jpg"
    },
    {
      name: "Banson Doe",
      role: "Marathon Runner",
      img: "/reviewer-2.jpg"
    },
    {
      name: "Johan Duo",
      role: "Professional Athlete",
      img: "/reviewer-3.jpg"
    },
    {
      name: "Robert Lee",
      role: "Construction Worker",
      img: "/reviewer-1.jpg"
    },
    {
      name: "Banson Doe",
      role: "Marathon Runner",
      img: "/reviewer-2.jpg"
    },
    {
      name: "Johan Duo",
      role: "Professional Athlete",
      img: "/reviewer-3.jpg"
    }
  ];

  return (
    <div className="story-container">
      <div className="story-header">
        <div className="story-label">Review</div>
        <h2>What Our Client Say</h2>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="story-review">
              <div className="story-stars">⭐️⭐️⭐️⭐️⭐️</div>
              <p>
                We understand that injuries and acute pain can happen unexpectedly. 
                Our emergency physiotherapy services are designed to provide prompt.
              </p>
              <div className="story-reviewer">
                <img src={review.img} alt={review.name} />
                <div>
                  <h3>{review.name}</h3>
                  <p>{review.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Story;
