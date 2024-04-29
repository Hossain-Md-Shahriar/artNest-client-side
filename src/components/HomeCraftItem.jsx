import { useEffect, useState } from "react";
import { baseURL } from "../utility/base_url";
import { Link } from "react-router-dom";

const HomeCraftItem = () => {
  const [loadedCrafts, setLoadedCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseURL}/crafts`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setLoadedCrafts(data);
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
    <div>
      <h2 className="text-4xl font-bold dark:text-[#f0f0f0] text-center">
        Craft Items
      </h2>
      <div className="flex justify-center items-center mt-5 mb-7">
        <div className="bg-[#4793AF] w-[1px] h-24"></div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {/* card */}
        {loadedCrafts.slice(0, 6).map((craft) => (
          <div
            key={craft._id}
            className="p-4 flex flex-col items-center rounded-lg border dark:bg-[#1b1b1b] dark:hover:bg-transparent dark:border-[#565656] shadow-lg hover:shadow-2xl transition-all duration-[270ms]"
          >
            <div className="w-full h-52 rounded-sm overflow-hidden">
              <img
                className="size-full object-cover object-center"
                src={craft.image}
                alt=""
              />
            </div>
            <h3 className="text-2xl font-semibold mt-2 mb-1 dark:text-[#f0f0f0]">
              {craft.item_name}
            </h3>
            <p className="font-medium text-[#767676] dark:text-[#a6a6a6]">
              {craft.subcategory_name}
            </p>
            <Link to={`/craftItems/${craft._id}`}>
              <button className="text-white text-lg font-semibold mt-4 py-2 px-7 bg-[#dd5846] rounded-sm hover:bg-[#b34739] transition-all duration-150">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCraftItem;
