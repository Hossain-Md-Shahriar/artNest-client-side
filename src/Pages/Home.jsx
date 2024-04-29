import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { baseURL } from "../utility/base_url";
import { Fade } from "react-awesome-reveal";
import Banner from "../components/Banner";

const Home = () => {
  // const craftCategories = useLoaderData();
  const [loading, setLoading] = useState(true);
  const [craftCategories, setCraftCategories] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/craftCategories`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCraftCategories(data);
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
    <div className="dark:bg-blue-500">
      <Banner />
      <div className="mt-28">
        <h2 className="text-3xl font-semibold">arts & crafts categories</h2>
        <div className="grid grid-cols-3 gap-4">
          {craftCategories.map((c) => (
            <Link
              to={`/matchedCategory/${c._id}`}
              key={c._id}
              className="border-2 p-5 cursor-pointer"
            >
              <h3 className="text-2xl">{c.image}</h3>
              <h3 className="text-2xl">{c.subcategory_name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
