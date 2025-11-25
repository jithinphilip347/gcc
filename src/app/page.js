import HomeAbout from "@/components/home/HomeAbout";
import HomeBanner from "@/components/home/HomeBanner";
import HomeContact from "@/components/home/HomeContact";
import HomeCourse from "@/components/home/HomeCourse";
import HomeGoogleReview from "@/components/home/HomeGoogleReview";
import HomeSpatilization from "@/components/home/HomeSpatilization";
import HomeTeam from "@/components/home/HomeTeam";
import HomeTestimonial from "@/components/home/HomeTestimonial";
import HomeWhyCoose from "@/components/home/HomeWhyCoose";

export default function Home() {
  return (
   <div>
    <HomeBanner />
    <HomeWhyCoose />
     <HomeTestimonial />
     <HomeGoogleReview />
      <HomeCourse />
       <HomeTeam />
    <HomeAbout />
    <HomeContact />
    {/* <HomeSpatilization /> */}
  
   </div>
  );
}
