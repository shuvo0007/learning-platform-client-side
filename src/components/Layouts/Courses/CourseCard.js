import React from "react";

const CourseCard = (getCardDetails) => {
  const cardDetails = getCardDetails.details;
  return (
    <div className="">
      <div class="flex flex-wrap -mx-1 overflow-hidden md:-mx-2">
        <div class=" flex flex-col items-center  my-1 px-1 w-full overflow-hidden md:my-2 md:px-2 md:w-2/3 border-2 border-gray-700 shadow-md shadow-gray-900">
          <h2 className="text-4xl m-10">{cardDetails.name}</h2>
          <img className="w-screen" src={cardDetails.image} alt="" />
          <p className="px-20 py-10 text-xl text-justify">
            {cardDetails.details}
          </p>
        </div>

        <div class="my-1 w-full overflow-hidden md:w-1/3 text-2xl p-24">
          <img
            className="rounded-full w-24 mb-5"
            src={cardDetails.instructor_image}
            alt=""
          />
          <p className="mb-10">Instructor Name: {cardDetails.instructor}</p>
          <p className="mb-10">Course Duration: {cardDetails.duration}</p>
          <p className="mb-10"> Course Price: {cardDetails.price}</p>
          <button className="bg-blue-500 rounded-lg p-5">Buy Course</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
