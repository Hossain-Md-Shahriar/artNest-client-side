import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { baseURL } from "../utility/base_url";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { LiaTruckLoadingSolid } from "react-icons/lia";

const MatchedCategory = () => {
  const loadedCategory = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/crafts`)
      .then((res) => res.json())
      .then((data) => {
        const filteredCrafts = data.filter(
          (item) => item.subcategory_name === loadedCategory.subcategory_name
        );
        setCrafts(filteredCrafts);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl min-h-screen mx-auto py-16">
      <div className="mx-4">
        <h1 className="text-2xl font-medium border-l-4 border-[#4793AF] p-2 dark:text-[#f0f0f0]">
          <p className="text-base text-[#767676] dark:text-[#a6a6a6] mb-1">
            Selected Category:
          </p>
          {loadedCategory.subcategory_name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {crafts.map((craft) => (
            <div
              key={craft._id}
              className="group flex flex-col justify-between p-4 rounded-lg border dark:bg-[#1b1b1b] dark:hover:bg-transparent dark:border-[#565656] shadow-lg hover:shadow-2xl transition-all duration-[270ms]"
            >
              <div className="bg-[#717171] w-full h-64 rounded-sm overflow-hidden">
                <img
                  className="size-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                  src={craft.image}
                  alt=""
                />
              </div>
              <div className="w-full">
                <p className="text-2xl font-semibold mt-2 mb-1 dark:text-[#f0f0f0]">
                  {craft.item_name}
                </p>
                <p className="font-medium text-[#767676] dark:text-[#a6a6a6] mb-2">
                  {craft.subcategory_name}
                </p>
                <p className="text-[15px] dark:text-[#d9d9d9] mb-4">
                  {craft.description}
                </p>
                <div className="flex justify-between items-center gap-2 text-lg mb-4 dark:text-[#f0f0f0]">
                  <div className="flex items-center gap-2">
                    <IoPricetagsOutline />
                    <p>$ {craft.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegStar />
                    <p>{craft.rating}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <LiaTruckLoadingSolid />
                    <p>{craft.processingTime}</p>
                  </div>
                </div>
                <div className="flex">
                  <Link
                    to={`/craftItems/${craft._id}`}
                    className="w-full text-center text-white text-lg font-semibold py-3 px-7 bg-[#dd5846] rounded-sm hover:bg-[#b34739] transition-all duration-150"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchedCategory;
