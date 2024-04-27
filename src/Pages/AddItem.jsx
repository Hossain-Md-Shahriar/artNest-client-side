import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { baseURL } from "../utility/base_url";

const AddItem = () => {
  const { user } = useContext(AuthContext);

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
            position: "center",
            icon: "success",
            title: "Craft Item Added",
            showConfirmButton: false,
            timer: 1500,
          });
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
          <input
            className="border-2 p-2"
            type="text"
            name="subcategory_name"
            placeholder="subcategory"
          />
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
