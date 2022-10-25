import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";

const Courses = () => {
  const courseDetails = useLoaderData();
  return (
    <div>
     {
      courseDetails.map(details=><CourseCard key={details.id} details={details}></CourseCard>)
     }
    </div>
  );
};

export default Courses;
