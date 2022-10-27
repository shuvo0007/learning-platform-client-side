import { Button } from "flowbite-react";
import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsPDF from "jspdf";

const showTowst = () => {
  toast.success("Premium Purchase Successful", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
const CourseCard = (getCardDetails) => {
  const cardDetails = getCardDetails.details;
  const generatePDF = () => {
    var doc = new jsPDF( "p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
  };
  return (
    <div className="text-black">
      <div class="flex flex-wrap -mx-1 overflow-hidden md:-mx-2">
        <div class="bg-neutral-300 rounded-md flex flex-col items-center  my-1 px-1 w-full overflow-hidden md:my-2 md:px-2 md:w-2/3 border-2 border-gray-700 shadow-md shadow-gray-900 ">
          {/* course tag and pdf button  */}
          <div className="flex justify-between w-full">
            <h2 className="text-4xl m-10 md:ml-80 ml-36">{cardDetails.name}</h2>
            <button
              onClick={generatePDF}
              className="mt-2 bg-slate-100 h-fit w-fit border-2 border-black p-4 rounded-2xl"
            >
              <FaFileDownload></FaFileDownload>
            </button>
          </div>

          {/* course image and details */}
          <img className="w-screen" src={cardDetails.image} alt="" />
          <p className="px-20 py-10 text-xl text-justify">
            {cardDetails.details}
          </p>
        </div>

        {/* instructor info and premium access */}
        <div
          id="content"
          class="my-1 w-full overflow-hidden md:w-1/3 text-2xl p-24"
        >
          <img
            className="rounded-full w-24 mb-5"
            src={cardDetails.instructor_image}
            alt=""
          />
          <p className="mb-10">Instructor Name: {cardDetails.instructor}</p>
          <p className="mb-10">Course Duration: {cardDetails.duration}</p>
          <p className="mb-10"> Course Price: {cardDetails.price}</p>

          <button>
            <Link
              className="bg-amber-500 rounded-lg p-5 text-white"
              to={`/courses/private/${cardDetails.id}`}
              onClick={() => showTowst()}
            >
              Get premium access
            </Link>
          </button>

          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
