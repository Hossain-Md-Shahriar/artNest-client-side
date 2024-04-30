import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { baseURL } from "../utility/base_url";

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleAddItem = (e) => {
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
    const email = form.email.value;
    const name = form.name.value;

    const craftItem = {
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
    };

    console.log(craftItem);

    fetch(`${baseURL}/crafts`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(craftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Craft Item Added",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="bg-[#ffc3700a] dark:bg-[#ffc37005]">
      <div className="max-w-6xl mx-auto py-16">
        <div className="mx-4">
          <h1 className="text-4xl font-medium border-l-4 border-[#4793AF] mb-8 p-4 dark:text-[#f0f0f0]">
            Add a Craft Item
          </h1>
          <form
            onSubmit={handleAddItem}
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
                  required
                />
              </div>
            </div>
            <div className="flex gap-6 flex-col sm:flex-row">
              <div className="w-full space-y-1">
                <label className="font-medium dark:text-[#f0f0f0]">Email</label>
                <input
                  className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                  type="email"
                  name="email"
                  placeholder="email"
                  defaultValue={user.email}
                />
              </div>
              <div className="w-full space-y-1">
                <label className="font-medium dark:text-[#f0f0f0]">
                  Username
                </label>
                <input
                  className="border-2 border-[#35353545] p-3 rounded-lg w-full bg-[#ffffffbd] dark:bg-[#00000066] dark:border-[#565656] dark:text-[#f0f0f0]"
                  type="text"
                  name="name"
                  placeholder="username"
                  defaultValue={user.displayName}
                />
              </div>
            </div>
            <input
              className="w-full text-center text-white text-lg font-semibold py-3 px-7 bg-[#dd5846] rounded-lg hover:bg-[#b34739] transition-all duration-150"
              type="submit"
              value="Add Craft Item"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
