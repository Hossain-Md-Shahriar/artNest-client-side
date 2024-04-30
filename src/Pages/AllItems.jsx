import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { baseURL } from "../utility/base_url";
import { Helmet } from "react-helmet-async";
import Spinner from "../components/Spinner";

const AllItems = () => {
  // const crafts = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/crafts`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCrafts(data);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="dark:bg-[#101010] transition-all duration-150 pb-20">
      <div className="max-w-6xl mx-auto py-20">
        <Helmet>
          <title>ArtNest | All Items</title>
        </Helmet>
        <div className="mx-4">
          <h1 className="text-4xl font-medium border-l-4 border-[#4793AF] mb-14 p-4 dark:text-[#f0f0f0]">
            All Arts & Crafts Items
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full dark:text-[#f0f0f0]">
              <thead>
                <tr>
                  <th className="border-b dark:border-[#565656] p-2 text-left">
                    Item Name
                  </th>
                  <th className="border-b dark:border-[#565656] p-2 text-left">
                    Subcategory
                  </th>
                  <th className="border-b dark:border-[#565656] p-2 text-left">
                    Price
                  </th>
                  <th className="border-b dark:border-[#565656] p-2 text-left">
                    Added By
                  </th>
                  <th className="border-b dark:border-[#565656] p-2 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {crafts.map((craft) => (
                  <tr key={craft._id}>
                    <td className="border-b dark:border-[#565656] p-2">
                      {craft.item_name}
                    </td>
                    <td className="border-b dark:border-[#565656] p-2">
                      {craft.subcategory_name}
                    </td>
                    <td className="border-b dark:border-[#565656] p-2">
                      $ {craft.price}
                    </td>
                    <td className="border-b dark:border-[#565656] p-2">
                      {craft.name}
                    </td>
                    <td className="border-b dark:border-[#565656] py-2 text-right">
                      <Link to={`/craftItems/${craft._id}`}>
                        <button className="text-white font-medium py-3 px-4 bg-[#dd5846e5] rounded-sm hover:bg-[#b34739] transition-all duration-150">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;
