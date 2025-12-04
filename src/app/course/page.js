// import CourseList from '@/components/course/CourseList'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//        <CourseList />
//     </div>
//   )
// }

// export default page

"use client"; 

import CourseList from "@/components/course/CourseList";
import React from "react";

export default function CoursePage() {
  return (
    <div>
      <CourseList />
    </div>
  );
}
