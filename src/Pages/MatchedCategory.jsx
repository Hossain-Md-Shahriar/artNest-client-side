import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { baseURL } from "../utility/base_url";

const MatchedCategory = () => {
  const loadedCategory = useLoaderData();
  const [loading, setLoading] = useState(true)
  const [crafts, setCrafts] = useState([]);
  useEffect(() => {
    fetch(`${baseURL}/crafts`)
      .then((res) => res.json())
      .then((data) => {
        const filteredCrafts = data.filter(
          (item) => item.subcategory_name === loadedCategory.subcategory_name
        );
        setCrafts(filteredCrafts);
        setLoading(false);
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
    <div className="mt-28">
      <h2 className="text-2xl">
        This is the matched category {loadedCategory.subcategory_name}
      </h2>
      <div>
        {crafts.map((craft) => (
          <div key={craft._id}>{craft.subcategory_name} <Link to={`/craftItems/${craft._id}`} className="btn btn-outline">View Details</Link></div>
        ))}
      </div>
    </div>
  );
};

export default MatchedCategory;
