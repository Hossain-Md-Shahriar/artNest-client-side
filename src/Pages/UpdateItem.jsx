import { useLoaderData, useParams } from "react-router-dom";
import { baseURL } from "../utility/base_url";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const UpdateItem = () => {
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
  const [selectedSubcategory, setSelectedSubcategory] =
    useState(subcategory_name);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

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
    <div className="bg-[#ffc3700a] dark:bg-[#ffc37005]">
      <div className="max-w-6xl mx-auto py-16">
        <div className="mx-4">
          <h1 className="text-4xl font-medium border-l-4 border-[#4793AF] mb-8 p-4 dark:text-[#f0f0f0]">
            Update Information
          </h1>
          <form
            onSubmit={handleUpdateItem}
            className="flex flex-col gap-6 p-5 sm:p-8 md:p-12 lg:p-24 rounded-lg bg-[#ffc37033] dark:bg-[#ffc37021] shadow-lg"
          >
            <div className="flex gap-6 flex-col sm:flex-row">
              <div className="w-full space-y-1">
                <label className="font-medium dark:text-[#f0f0f0]">
                  Image URL
                </label>
                <input
                  className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                  type="url"
                  name="image"
                  placeholder="image"
                  defaultValue={image}
                  required
                />
              </div>
              <div className="w-full space-y-1">
                <label className="font-medium dark:text-[#f0f0f0]">
                  Item Name
                </label>
                <input
                  className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                  type="text"
                  name="item_name"
                  placeholder="item name"
                  defaultValue={item_name}
                  required
                />
              </div>
            </div>
            <div className="flex gap-6 flex-col sm:flex-row">
              <div className="w-full space-y-1">
                <label className="font-medium dark:text-[#f0f0f0]">
                  Subcategory Name
                </label>
                <select
                  name="subcategory_name"
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                >
                  <option value="Landscape Painting">Landscape Painting</option>
                  <option value="Portrait Drawing">Portrait Drawing</option>
                  <option value="Watercolour Painting">
                    Watercolour Painting
                  </option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
              </div>
              <div className="w-full space-y-1">
                <label className="font-medium dark:text-[#f0f0f0]">Price</label>
                <input
                  className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                  type="text"
                  name="price"
                  placeholder="price"
                  defaultValue={price}
                  required
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="font-medium dark:text-[#f0f0f0]">
                Description
              </label>
              <input
                className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                type="text"
                name="description"
                placeholder="description"
                defaultValue={description}
                required
              />
            </div>
            <div className="flex gap-6 flex-col sm:flex-row">
              <div className="w-full space-y-1">
                <label className="font-medium dark:text-[#f0f0f0]">
                  Rating
                </label>
                <input
                  className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                  type="text"
                  name="rating"
                  placeholder="rating"
                  defaultValue={rating}
                  required
                />
              </div>
              <div className="w-full space-y-1">
                <label className="font-medium dark:text-[#f0f0f0]">
                  Customization
                </label>
                <input
                  className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                  type="text"
                  name="customization"
                  placeholder="customization"
                  defaultValue={customization}
                  required
                />
              </div>
            </div>
            <div className="flex gap-6 flex-col sm:flex-row">
              <div className="w-full space-y-1">
                <label className="font-medium dark:text-[#f0f0f0]">
                  Processing Time
                </label>
                <input
                  className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                  type="text"
                  name="processingTime"
                  placeholder="processing time"
                  defaultValue={processingTime}
                  required
                />
              </div>
              <div className="w-full space-y-1">
                <label className="font-medium dark:text-[#f0f0f0]">
                  Stock Status
                </label>
                <input
                  className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                  type="text"
                  name="stockStatus"
                  placeholder="stock status"
                  defaultValue={stockStatus}
                  required
                />
              </div>
            </div>
            <input
              className="w-full text-center text-white text-lg font-semibold py-3 px-7 bg-[#dd5846] rounded-lg hover:bg-[#b34739] transition-all duration-150"
              type="submit"
              value="Save Changes"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;

{
  /* <div className="max-w-6xl mx-auto mt-28">
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
    </div> */
}
