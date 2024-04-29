import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { baseURL } from "../utility/base_url";

const AllItems = () => {
  // const crafts = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [crafts, setCrafts] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/crafts`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCrafts(data);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-28">
      <div className="mx-4">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Subcategory</th>
              <th>Added By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {crafts.map((craft) => (
              <tr key={craft._id}>
                <td>{craft.image}</td>
                <td>{craft.subcategory_name}</td>
                <td>{craft.name}</td>
                <td>
                  <Link
                    to={`/craftItems/${craft._id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems;
