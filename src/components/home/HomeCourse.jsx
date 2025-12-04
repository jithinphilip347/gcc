"use client";
import Image from "next/image";
import React from "react";
import { VscArrowRight } from "react-icons/vsc";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

import Logo1 from "../../assets/images/DHA.svg";
import Logo2 from "../../assets/images/moh-uae.webp";
import Logo3 from "../../assets/images/moh-kuwait.png";
import Logo4 from "../../assets/images/doh.png";
import Logo5 from "../../assets/images/sple-saudi.svg";
import Logo6 from "../../assets/images/bple-beharin.png";
import Logo7 from "../../assets/images/omsb.png";

const HomeCourse = () => {
  return (
    <div id="HomeCourse">
      <div className="container">
        <div className="HomeAboutHead">
          <h2>
            Our <span>Courses</span>
          </h2>
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
                modules={[Pagination]}
                spaceBetween={30}
                loop
                grabCursor
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    pagination: { enabled: true },
                  },
                  480: {
                    slidesPerView: 1,
                    pagination: { enabled: true },
                  },
                  768: {
                    slidesPerView: 1,
                    pagination: { enabled: true },
                  },
                  1024: {
                    slidesPerView: 2,
                    pagination: { enabled: true },
                  },
                  1200: {
                    slidesPerView: 2,
                    pagination: { enabled: false }, 
                  },
                }}
              >

                <SwiperSlide>
                  <Link href={`/course?section=pharmacy&expand=${encodeURIComponent("DHA (DUBAI)")}`} className="CourseLink">
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
                  <Link href={`/course?section=pharmacy&expand=${encodeURIComponent("MOH (UAE)")}`} className="CourseLink">
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
                  <Link href={`/course?section=pharmacy&expand=${encodeURIComponent("KUWAIT - MOH")}`} className="CourseLink">
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
                  <Link href={`/course?section=pharmacy&expand=${encodeURIComponent("DOH (HAAD) – Abu Dhabi")}`} className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo4} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>DOH (HAAD) – Abu Dhabi</p>
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
                  <Link href={`/course?section=pharmacy&expand=${encodeURIComponent("SPLE (Saudi Arabia)")}`} className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo5} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>SPLE (Saudi Arabia)</p>
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
                  <Link href={`/course?section=pharmacy&expand=${encodeURIComponent("BAHRAIN (BPLE)")}`} className="CourseLink">
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

                   <SwiperSlide>
                  <Link href={`/course?section=pharmacy&expand=${encodeURIComponent("OMSEB (Oman Medical Specialty Board)")}`} className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo7} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>OMSEB (Oman Medical Specialty Board)</p>
                      </div>
                      <div className="CourseDesc">
                        <p>
                          Get the best coaching for the OMSB / OMSEB Pharmacist Licensing Exam to become a licensed pharmacist in the Sultanate of Oman.
                        </p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>
            <Link href="/course?section=pharmacy" className="ViewMoreBtn">
            View More <VscArrowRight />
            </Link>
          </div>

          <div className="HomeCourseRight">
            <div className="HomeCourseRightHeadView">
              <div className="HomeCourseRightHead">
                <h2>Radiology</h2>
              </div>
            </div>

            <div className="HomeCourseRightBox">
                    <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    loop
                    grabCursor
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                        pagination: { enabled: true },
                      },
                      480: {
                        slidesPerView: 1,
                        pagination: { enabled: true },
                      },
                      768: {
                        slidesPerView: 1,
                        pagination: { enabled: true },
                      },
                      1024: {
                        slidesPerView: 2,
                        pagination: { enabled: true },
                      },
                      1200: {
                        slidesPerView: 2,
                        pagination: { enabled: false },
                      },
                    }}
                  >

                <SwiperSlide>
                  <Link href={`/course?section=radiology&expand=${encodeURIComponent("DHA (DUBAI)")}`} className="CourseLink">
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
                  <Link href={`/course?section=radiology&expand=${encodeURIComponent("MOH (UAE)")}`} className="CourseLink">
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
                  <Link href={`/course?section=radiology&expand=${encodeURIComponent("DOH (HAAD) – Abu Dhabi")}`} className="CourseLink">
                    <div className="CourseBox">
                      <div className="CourseIcon">
                        <Image src={Logo4} alt="KUWAIT MOH" />
                      </div>
                      <div className="CourseTitle">
                        <p>DOH (HAAD) – Abu Dhabi</p>
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
                  <Link href={`/course?section=radiology&expand=${encodeURIComponent("SPLE (SAUDI)")}`} className="CourseLink">
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
            <Link href="/course?section=radiology" className="ViewMoreBtn">
              View More <VscArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCourse;
