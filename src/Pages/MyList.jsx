import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const loadedCrafts = useLoaderData();
  const myCrafts = loadedCrafts.filter((craft) => craft?.email === user?.email);
  const [crafts, setCrafts] = useState(myCrafts);

  return (
    <div className="max-w-6xl mx-auto py-28">
      <div className="mx-4">
        <div className="grid grid-cols-2 gap-5">
            {
                crafts.map(craft => (
                    <div key={craft._id} className="border-2 p-5">
                        <h3 className="text-2xl mb-4">Item Name: {craft.image}</h3>
                        <Link to={`/updateItem/${craft._id}`} className="btn btn-success mr-4">Update</Link>
                        <button className="btn btn-error">Delete</button>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default MyList;
