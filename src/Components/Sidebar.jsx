import axios from "axios";
import React, { useEffect, useState } from "react";

function Sidebar() {
  const [Categories, setCategories] = useState([]);
  const [keywords] = useState([
    "Apple",
    "Watch",
    "Fashion",
    "Trend",
    "Shoes",
    "Shirt",
  ]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products/categories");
        console.log(res.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategory(); 
  }, []);

  return (
    <div className=" h-screen border-2 w-[300px]">
      <div className="font-bold ml-3 mt-2 text-xl">React Store</div>
      <input
        type="text"
        placeholder="Search Product..."
        className="border-2 h-8 w-[260px] px-2 mt-3 ml-2"
      />
      <div className="flex">
        <input
          type="number"
          className="border-2 w-[120px] mt-2 ml-3 px-2"
          placeholder="MIN"
        />
        <input
          type="number"
          className="border-2 w-[120px] mt-2 ml-4 px-2"
          placeholder="MAX"
        />
      </div>
    </div>
  );
}

export default Sidebar;
