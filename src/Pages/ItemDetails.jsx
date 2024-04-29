import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { baseURL } from "../utility/base_url";

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
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
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
    <div>
      <h3 className="text-2xl">{email}</h3>
      <h3 className="text-2xl">{name}</h3>
    </div>
  );
};

export default ItemDetails;
