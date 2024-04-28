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
    <div className="max-w-6xl mx-auto mt-28">
      <div className="mx-4">
        <form onSubmit={handleAddItem} className="flex flex-wrap gap-4">
          <input
            className="border-2 p-2"
            type="text"
            name="image"
            placeholder="image"
          />
          <input
            className="border-2 p-2"
            type="text"
            name="item_name"
            placeholder="item name"
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
          />
          <input
            className="border-2 p-2"
            type="text"
            name="price"
            placeholder="price"
          />
          <input
            className="border-2 p-2"
            type="text"
            name="rating"
            placeholder="rating"
          />
          <input
            className="border-2 p-2"
            type="text"
            name="customization"
            placeholder="customization"
          />
          <input
            className="border-2 p-2"
            type="text"
            name="processingTime"
            placeholder="processing time"
          />
          <input
            className="border-2 p-2"
            type="text"
            name="stockStatus"
            placeholder="stock status"
          />
          <input
            className="border-2 p-2"
            type="email"
            name="email"
            placeholder="email"
            defaultValue={user.email}
          />
          <input
            className="border-2 p-2"
            type="text"
            name="name"
            placeholder="username"
            defaultValue={user.displayName}
          />
          <input className="btn" type="submit" value="Add Craft Item" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
