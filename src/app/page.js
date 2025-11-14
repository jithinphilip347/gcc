import CourseList from "@/components/course/CourseList";
import HomeAbout from "@/components/home/HomeAbout";
import HomeBanner from "@/components/home/HomeBanner";
import HomeContact from "@/components/home/HomeContact";
import HomeCourse from "@/components/home/HomeCourse";
import HomeTestimonial from "@/components/home/HomeTestimonial";
import HomeWhyCoose from "@/components/home/HomeWhyCoose";

export default function Home() {
  return (
   <div>
    <HomeBanner />
    <HomeAbout />
    <HomeCourse />
    <HomeWhyCoose />
    <HomeTestimonial />
    <HomeContact />
    <CourseList />
   </div>
  );
}
