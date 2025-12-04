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

import dynamic from "next/dynamic";

const CourseList = dynamic(() => import("@/components/course/CourseList"), {
  ssr: false,
});

export default function CoursePage() {
  return (
    <div>
      <CourseList />
    </div>
  );
}
