import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Cards from "./Cards";

const Home = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <Header></Header>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:pl-72 md:pr-52 md:pt-16 flex flex-col justify-center items-center pt-10">
        {allCourses.map((course) => (
          <Cards key={course.id} course={course}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Home;
