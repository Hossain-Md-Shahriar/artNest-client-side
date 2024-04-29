import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { baseURL } from "../utility/base_url";

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
    <div className="max-w-6xl mx-auto py-28">
      <div className="mx-4 flex flex-col items-center gap-8">
        <div>
          <label className="mr-2">Filter by Customization: </label>
          <select
            value={selectedValue}
            onChange={handleFilter}
            className="p-3 border-2"
          >
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {crafts.map((craft) => (
            <div key={craft._id} className="border-2 p-5">
              <h3 className="text-2xl mb-4">Item Name: {craft.image}</h3>
              <h3 className="text-2xl mb-4">
                Customization: {craft.customization}
              </h3>
              <Link
                to={`/updateItem/${craft._id}`}
                className="btn btn-success mr-4"
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(craft._id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyList;
