import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { baseURL } from "../utility/base_url";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiPencilBold } from "react-icons/pi";
import { Tooltip } from "react-tooltip";
import { Helmet } from "react-helmet-async";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const loadedCrafts = useLoaderData();
  const [loading, setLoading] = useState(true);
  // const [loadedCrafts, setLoadedCrafts] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  // useEffect(() => {
  //   fetch(`${baseURL}/crafts`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setLoadedCrafts(data);
  //     });
  // }, []);

  const myCrafts = loadedCrafts.filter((craft) => craft?.email === user?.email);
  const [crafts, setCrafts] = useState(myCrafts);
  console.log(myCrafts);

  // if (loading) {
  //   return (
  //     <div className="h-screen flex items-center justify-center">
  //       <span className="loading loading-spinner loading-lg"></span>
  //     </div>
  //   );
  // }

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("delete confirmed");
        fetch(`${baseURL}/crafts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Craft Item has been deleted.",
                icon: "success",
              });
              const remaining = crafts.filter((craft) => craft._id !== _id);
              setCrafts(remaining);
            }
          });
      }
    });
  };

  const handleFilter = (e) => {
    const options = e.target.value;
    setSelectedValue(options);
    console.log(options);
    if (options === "all") {
      setCrafts(myCrafts);
    } else if (options === "yes") {
      const yesCrafts = myCrafts.filter(
        (craft) => craft.customization.toLowerCase() === "yes"
      );
      setCrafts(yesCrafts);
    } else {
      const noCrafts = myCrafts.filter(
        (craft) => craft.customization.toLowerCase() === "no"
      );
      setCrafts(noCrafts);
    }
  };

  return (
    <div className="dark:bg-[#101010] transition-all duration-150">
    <div className="bg-[#ffc3700a] dark:bg-[#ffc37005] pb-16">
      <Helmet>
        <title>ArtNest | My List</title>
      </Helmet>
      <div className="max-w-7xl mx-auto py-28">
        <div className="mx-4">
          <div className="flex justify-between items-end gap-4 flex-wrap mb-8">
            <h1 className="text-4xl font-medium border-l-4 border-[#4793AF] p-4 dark:text-[#f0f0f0]">
              My Arts & Crafts List
            </h1>
            <div>
              <label className="dark:text-[#f0f0f0] mr-2">
                Filter by Customization:{" "}
              </label>
              <select
                value={selectedValue}
                onChange={handleFilter}
                className="p-2 border-2 rounded-md bg-transparent dark:text-[#f0f0f0] dark:border-[#565656]"
              >
                <option className="text-black" value="all">
                  All
                </option>
                <option className="text-black" value="yes">
                  Yes
                </option>
                <option className="text-black" value="no">
                  No
                </option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {crafts.map((craft) => (
              <div
                key={craft._id}
                className="bg-[#ffc37033] dark:bg-[#ffc37021] p-4 flex flex-col gap-5 rounded-md shadow-lg"
              >
                <div className="bg-[#717171] w-full h-52 rounded-sm overflow-hidden">
                  <img
                    className="size-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                    src={craft.image}
                    alt=""
                  />
                </div>
                <div className="flex justify-between">
                  <div className="w-3/4 dark:text-[#f0f0f0]">
                    {/* <h3 className="text-2xl mb-4">Item Name: {craft.image}</h3> */}
                    <h3 className="text-2xl font-semibold">
                      Name: {craft.item_name}
                    </h3>
                    <div className="text-lg font-medium mt-4">
                      <p className="">Price: $ {craft.price}</p>
                      <p>Rating: {craft.rating}</p>
                      <p>Customization: {craft.customization}</p>
                      <p>Stock Status: {craft.stockStatus}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center gap-4 text-white">
                    <Link
                      to={`/updateItem/${craft._id}`}
                      className="bg-[#2c8715ab] text-3xl p-3 rounded-md hover:bg-green-800 transition-all duration-150"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Update"
                      data-tooltip-place="top"
                    >
                      <PiPencilBold />
                    </Link>
                    <button
                      onClick={() => handleDelete(craft._id)}
                      className="bg-[#e02525e2] text-3xl p-3 rounded-md hover:bg-red-700 transition-all duration-150"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Delete"
                      data-tooltip-place="top"
                    >
                      <RiDeleteBin6Line />
                    </button>
                    <Tooltip id="my-tooltip" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyList;
