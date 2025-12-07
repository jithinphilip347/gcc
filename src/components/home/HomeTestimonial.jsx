"use client";
import React from "react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Pagination } from "swiper/modules";
import "swiper/css/pagination";

import "swiper/css";

import Student1 from "../../assets/images/Students/Divya Mariam(DHA).jpg";
import Student2 from "../../assets/images/Students/Karthikeyan A.jpg";
import Student3 from "../../assets/images/Students/Maham Shakoor(DHA).jpg";
import Student4 from "../../assets/images/Students/Binish (DHA).jpg";
import Student5 from "../../assets/images/Students/Ratna Deepka Manda.jpg";

const testimonials = [
  {
    img: Student1,
    name: "Divya Mariam",
    date: "13 November 2025",
    title: "Great learning experience!",
    desc: "The flexible schedule allowed me to balance my studies with other commitments. The comprehensive study materials and expert guidance prepared me well for the MOH exam.",
  },
  {
    img: Student2,
    name: "Karthikeyan A",
    date: "09 March 2025",
    title: "Highly recommended!",
    desc: "I not only understood difficult subjects but also learned effective exam strategies. I'm grateful for their experienced instructors. Passed OMAN Pearson VUE!",
  },
  {
    img: Student3,
    name: "Maham Shakoor",
    date: "25 November 2023",
    title: "Very supportive team",
    desc: "The interactive sessions and personalized feedback helped me grasp complex concepts. With their guidance, I confidently passed DHA with 65%.",
  },
  {
    img: Student4,
    name: "BINISH",
    date: "13 December 2024",
    title: "Amazing coaching!",
    desc: "The instructors were knowledgeable and approachable. The practice tests and quizzes were invaluable. Passed DHA with confidence!",
  },
    {
    img: Student5,
    name: "DEEPIKA RATNA",
    date: "25 February 2024",
    title: "Exceptional Guidance & Support",
    desc: "Complete guidance with updated information. Good support and Stand along with us until we succeed",
  },
];

const HomeTestimonial = () => {
  return (
    <div id="HomeTestimonial">
      <div className="container">
        <div className="HomeAboutHead">
          <h2>
            Student <span>Testimonials</span>
          </h2>
        </div>

        <div className="TestimonialMain">
          {/* <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            className="testimonialSwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 },
            }}
          > */}
             <Swiper
              modules={[Autoplay, Pagination]}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              className="testimonialSwiper"
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  pagination: {
                    enabled: true,
                  },
                },
                480: {
                  slidesPerView: 1,
                  pagination: {
                    enabled: true,
                  },
                },
                768: {
                  slidesPerView: 2,
                  pagination: {
                    enabled: true,
                  },
                },
                1024: {
                  slidesPerView: 3,
                  pagination: {
                    enabled: true,
                  },
                },
                1200: {
                  slidesPerView: 4,
                  pagination: {
                    enabled: false, // Desktop il dots OFF
                  },
                },
              }}
            >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="TestimonialBox">
                  <div className="TestimonialProfileBox">
                    <div className="StudentPhoto">
                      <Image src={item.img} alt={item.name} />
                    </div>
                    <div className="StudentNameDateBox">
                      <p className="StudentName">{item.name}</p>
                      <p className="StudentDate">{item.date}</p>
                    </div>
                  </div>

                  <div className="TestimonialRateBox">
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} className="star" />
                    ))}
                  </div>

                  <div className="TestimonialTitleBox">
                    <p>{item.title}</p>
                  </div>

                  <div className="TestimonialDescBox">
                    <p>{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
