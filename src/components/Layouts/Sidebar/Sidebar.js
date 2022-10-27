import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch(
      "https://b610-lerning-platform-server-side-shuvo0007.vercel.app/category"
    )
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <button className="text-left">
      {category.map((category) => (
        <Link to={`/courses/${category.id}`}>
          <div className="py-5 border-2 border-green-600 m-2 bg-blue-500 text-white px-5 text-2xl">
            <p key={category.id}>{category.name}</p>
          </div>
        </Link>
      ))}
    </button>
  );
};

export default Sidebar;
