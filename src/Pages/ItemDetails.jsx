import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { baseURL } from "../utility/base_url";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import Spinner from "../components/Spinner";

const ItemDetails = () => {
  // const craft = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [craft, setCraft] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${baseURL}/crafts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCraft(data);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const {
    image,
    item_name,
    subcategory_name,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    email,
    name,
  } = craft;

  return (
    <div className="dark:bg-[#101010] transition-all duration-150 pb-24">
      <div className="max-w-7xl mx-auto py-16">
        <Helmet>
          <title>ArtNest | Details</title>
        </Helmet>
        <div className="mx-4">
          <h1 className="text-4xl font-medium border-l-4 border-[#4793AF] p-4 dark:text-[#f0f0f0]">
            {item_name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
            <div className="bg-[#717171] h-[480px] rounded-md overflow-hidden">
              <img
                className="size-full object-cover object-center"
                src={image}
                alt=""
              />
            </div>
            <div className="dark:text-[#f0f0f0]">
              <p className="text-lg pb-2 font-medium">
                Subcategory:{" "}
                <span className="text-xl font-semibold">
                  {subcategory_name}
                </span>
              </p>
              <p className="font-medium mb-5">
                Description:{" "}
                <span className="text-[#6e6e6e] dark:text-[#d9d9d9]">
                  {description}
                </span>
              </p>
              <p className="text-3xl font-bold mb-3 text-[#DD5746]">
                $ {price}
              </p>
              <div className="flex gap-10 mb-12">
                <div>
                  <p className="font-medium text-lg mb-1">Rating:</p>
                  <p className="font-medium mb-1">Customization:</p>
                  <p className="font-medium mb-1">Processing Time:</p>
                  <p className="font-medium mb-1">Stock Status:</p>
                </div>
                <div>
                  <p className="font-medium text-lg mb-1">{rating}</p>
                  <p className="font-medium mb-1 text-[#6e6e6e] dark:text-[#d9d9d9]">
                    {customization}
                  </p>
                  <p className="font-medium mb-1 text-[#6e6e6e] dark:text-[#d9d9d9]">
                    {processingTime}
                  </p>
                  <p className="font-medium mb-1 text-[#6e6e6e] dark:text-[#d9d9d9]">
                    {stockStatus}
                  </p>
                </div>
              </div>
              <p className="mb-2 text-xl">Added by,</p>
              <div className="flex gap-6 flex-wrap">
                <div className="flex items-center gap-1">
                  <FaRegUserCircle />
                  <p>{name}</p>
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineEmail />
                  <p>{email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
