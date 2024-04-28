import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { baseURL } from "../utility/base_url";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const loadedCrafts = useLoaderData();
  const myCrafts = loadedCrafts.filter((craft) => craft?.email === user?.email);
  const [crafts, setCrafts] = useState(myCrafts);

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
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = crafts.filter(craft => craft._id !== _id);
              setCrafts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-28">
      <div className="mx-4">
        <div className="grid grid-cols-2 gap-5">
            {
                crafts.map(craft => (
                    <div key={craft._id} className="border-2 p-5">
                        <h3 className="text-2xl mb-4">Item Name: {craft.image}</h3>
                        <Link to={`/updateItem/${craft._id}`} className="btn btn-success mr-4">Update</Link>
                        <button onClick={() => handleDelete(craft._id)} className="btn btn-error">Delete</button>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default MyList;
