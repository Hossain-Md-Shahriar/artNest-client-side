import { useLoaderData } from "react-router-dom";
import { baseURL } from "../utility/base_url";
import Swal from "sweetalert2";
import { useState } from "react";

const UpdateItem = () => {
  const craft = useLoaderData();
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = craft;
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategory_name);

  const handleUpdateItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item_name = form.item_name.value;
    const subcategory_name = form.subcategory_name.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;

    const updatedCraft = {
      image,
      item_name,
      subcategory_name,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
    };

    console.log(updatedCraft);

    fetch(`${baseURL}/crafts/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Craft Updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="max-w-6xl mx-auto mt-28">
      <div className="mx-4">
        <form onSubmit={handleUpdateItem} className="flex flex-wrap gap-4">
          <input
            className="border-2 p-2"
            type="text"
            name="image"
            placeholder="image"
            defaultValue={image}
          />
          <input
            className="border-2 p-2"
            type="text"
            name="item_name"
            placeholder="item name"
            defaultValue={item_name}
          />
          <select
            name="subcategory_name"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="p-2 border-2"
          >
            <option value="Landscape Painting">Landscape Painting</option>
            <option value="Portrait Drawing">Portrait Drawing</option>
            <option value="Watercolour Painting">Watercolour Painting</option>
            <option value="Oil Painting">Oil Painting</option>
            <option value="Charcoal Sketching">Charcoal Sketching</option>
            <option value="Cartoon Drawing">Cartoon Drawing</option>
          </select>
          <input
            className="border-2 p-2"
            type="text"
            name="description"
            placeholder="description"
            defaultValue={description}
          />
          <input
            className="border-2 p-2"
            type="text"
            name="price"
            placeholder="price"
            defaultValue={price}
          />
          <input
            className="border-2 p-2"
            type="text"
            name="rating"
            placeholder="rating"
            defaultValue={rating}
          />
          <input
            className="border-2 p-2"
            type="text"
            name="customization"
            placeholder="customization"
            defaultValue={customization}
          />
          <input
            className="border-2 p-2"
            type="text"
            name="processingTime"
            placeholder="processing time"
            defaultValue={processingTime}
          />
          <input
            className="border-2 p-2"
            type="text"
            name="stockStatus"
            placeholder="stock status"
            defaultValue={stockStatus}
          />
          <input className="btn" type="submit" value="Update Craft Item" />
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
