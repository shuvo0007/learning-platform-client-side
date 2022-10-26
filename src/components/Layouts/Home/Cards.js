import React from "react";
import { Link } from "react-router-dom";

const Card = ({ course }) => {
  return (
    <div className=" w-96 flex flex-col overflow-hidden border-2 border-sky-500 rounded-lg mb-10 bg-white">
      <img className="h-64" src={course.image} alt="" />
      <p className="text-2xl text-justify p-5">
        {course.details.slice(0, 100) + "..."}
      </p>
      <Link to={`/courses/${course.id}`}>
        <button className="bg-blue-700 w-fit px-10 py-5 m-5 rounded-xl text-white text-xl hover:text-black hover:border-2 hover:border-blue-700 hover:bg-white">
          Read More
        </button>
      </Link>
      <div>
        <p className="text-2xl py-10 rounded bg-blue-800 text-white text-center">
          {course.name}
        </p>
      </div>
    </div>
  );
};

export default Card;
