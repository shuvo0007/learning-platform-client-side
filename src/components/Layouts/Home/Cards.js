import React from "react";
import { Link } from "react-router-dom";

const Card = ({ course }) => {
  return (
    <button>
      <Link to={`/courses/${course.id}`}>
        <div className=" w-96 flex flex-col overflow-hidden border-2 border-sky-500 rounded-lg mb-10">
          <img className="h-64" src={course.image} alt="" />
          <div>
            <p className="text-2xl py-10 rounded bg-blue-800 text-white">
              {course.name}
            </p>
          </div>
        </div>
      </Link>
    </button>
  );
};

export default Card;
