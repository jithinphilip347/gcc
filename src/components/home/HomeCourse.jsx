"use client";
import Image from "next/image";
import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Logo1 from "../../assets/images/DHA.svg";
import Logo2 from "../../assets/images/moh-uae.webp";
import Logo3 from "../../assets/images/moh-kuwait.png";
import Logo4 from "../../assets/images/doh.png";
import Logo5 from "../../assets/images/sple-saudi.svg";
import Logo6 from "../../assets/images/bple-beharin.png";

const HomeCourse = () => {
  return (
    <div id="HomeCourse">
      <div className="container">
        <div className="HomeAboutHead">
          <h2>
            Our <span>Courses</span>
          </h2>
        </div>

        <div className="ViewAll">
          <Link href="/course">
            <p>View All</p>
            <VscArrowRight />
          </Link>
        </div>

        <div className="CourseMain">
          <div className="HomeCourseLeft">
            <div className="HomeCourseLeftHeadView">
              <div className="HomeCourseLeftHead">
                <h2>Pharmacy</h2>
              </div>
            </div>

            <div className="HomeCourseLeftBox">
              <Swiper
                spaceBetween={30}
                loop
                grabCursor
                breakpoints={{
                  0: {
                    slidesPerView: 1, // 0 - 767px ➜ 1 slide
                  },
                  768: {
                    slidesPerView: 1, // 768px ➜ 1 slide
                  },
                  1024: {
                    slidesPerView: 2, // 1024px & above ➜ 2 slides
                  },
                }}
              >
                {/* <Swiper slidesPerView={2} spaceBetween={30} loop grabCursor> */}
                <SwiperSlide>
                  <Link href="/course" className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo1} alt="DHA Course" />
                      </div>
                      <div className="CourseTitle">
                        <p>DHA (DUBAI)</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          Get the best coaching for the Dubai Health Authority
                          (DHA) Exam to become a licensed pharmacist in Dubai.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link href="/course" className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo2} alt="MOH UAE" />
                      </div>
                      <div className="CourseTitle">
                        <p>MOH (UAE)</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          Ace the MOH Pharmacy Technician Exam on your first
                          attempt with our all-in-one online coaching program –
                          designed for guaranteed success.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link href="/course" className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo3} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>KUWAIT - MOH</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          Prepare with confidence and pass the Kuwait MOH
                          Pharmacist Exam on your first attempt with the most
                          trusted coaching program available.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link href="/course" className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo4} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>DOH (HAAD)-Abu Dhabi</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          HAAD stands for Health Authority – Abu Dhabi.
                          It&apos;s now officially part of the Department of
                          Health – Abu Dhabi (DOH-Abu Dhabi). Get licensed as a
                          Pharmacy Technician in Abu Dhabi, UAE with our
                          comprehensive DOH Exam Preparation Course.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link href="/course" className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo5} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>SPLE (SAUDI)</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          Saudi Pharmacist Licensure Examination is required for
                          all pharmacists who want to practise in Saudi Arabia.
                          Prepare successfully and take a major step toward your
                          pharmacy career in Saudi Arabia
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link href="/course" className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo6} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>BAHRAIN (BPLE)</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          Bahrain Pharmacy Licensure Examination is administered
                          by National Health Regulatory Authority (NHRA)
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="HomeCourseRight">
            <div className="HomeCourseRightHeadView">
              <div className="HomeCourseRightHead">
                <h2>Radiology</h2>
              </div>
            </div>

            <div className="HomeCourseRightBox">
              <Swiper
                spaceBetween={30}
                loop
                grabCursor
                breakpoints={{
                  0: {
                    slidesPerView: 1, // 0 - 767px ➜ 1 slide
                  },
                  768: {
                    slidesPerView: 1, // 768px ➜ 1 slide
                  },
                  1024: {
                    slidesPerView: 2, // 1024px & above ➜ 2 slides
                  },
                }}
              >
                {/* <Swiper slidesPerView={2} spaceBetween={30} loop grabCursor> */}
                <SwiperSlide>
                  <Link href="/course" className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo1} alt="DHA Course" />
                      </div>
                      <div className="CourseTitle">
                        <p>DHA (DUBAI)</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          Get the best coaching for the Dubai Health Authority
                          (DHA) Exam to become a licensed Radiographer in Dubai.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link href="/course" className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo2} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>MOH (UAE)</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          Ace the MOH radiographer Exam on your first attempt
                          with our all-in-one online coaching program – designed
                          for guaranteed success
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link href="/course" className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo4} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>DOH (HAAD)-Abu Dhabi</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          HAAD stands for Health Authority – Abu Dhabi.
                          It&apos;s now officially part of the Department of
                          Health – Abu Dhabi (DOH-Abu Dhabi). Get licensed as a
                          Pharmacy Technician in Abu Dhabi, UAE with our
                          comprehensive DOH Exam Preparation Course.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>

                <SwiperSlide>
                  <Link href="/course" className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo5} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>SPLE (SAUDI)</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          Saudi Radiographer Licensure Examination is required
                          for all Radiographers who want to practise in Saudi
                          Arabia. It is done by Saudi Commission for Health
                          Specialties (SCFHS).
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCourse;
