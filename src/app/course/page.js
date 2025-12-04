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
