import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { baseURL } from "../utility/base_url";
import { Fade } from "react-awesome-reveal";
import Banner from "../components/Banner";
import HomeCraftItem from "../components/HomeCraftItem";
import { Helmet } from "react-helmet-async";
import background from "../assets/background.jpg";
import Spinner from "../components/Spinner";

const Home = () => {
  // const loadedCrafts = useLoaderData();
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
    return <Spinner />;
  }

  return (
    <div className="bg-white dark:bg-[#101010] transition-all duration-150">
      <Helmet>
        <title>ArtNest | Home</title>
      </Helmet>
      <Banner />
      {/* Craft Items section */}
      <div className="max-w-6xl mx-auto my-24 lg:my-32">
        <div className="mx-4">
          <HomeCraftItem />
        </div>
      </div>

      {/* Craft Categories section */}
      <div className="max-w-7xl mx-auto my-24 lg:my-32">
        <div className="mx-4">
          <Fade cascade direction="down" duration={900} delay={200} triggerOnce>
            <h2 className="text-4xl font-bold dark:text-[#f0f0f0] text-center">
              Arts & Crafts Categories
            </h2>
          </Fade>
          <div className="flex justify-center items-center mt-5 mb-7">
            <div className="bg-[#4793AF] w-[1px] h-24"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {craftCategories.map((c) => (
              <Link
                to={`/matchedCategory/${c._id}`}
                key={c._id}
                className="group hover:drop-shadow-2xl transition-all duration-[270ms] p-5 cursor-pointer"
              >
                <div className="bg-[#717171] w-full h-60 rounded-sm overflow-hidden">
                  <img
                    className="size-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                    src={c.image}
                    alt=""
                  />
                </div>
                <h3 className="text-2xl font-semibold mt-2 mb-3 dark:text-[#f0f0f0] text-center">
                  {c.subcategory_name}
                </h3>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-medium text-[#DD5746] text-center">
                    {c.origins}
                  </p>
                  <p className="font-medium dark:text-[#f0f0f0] text-center px-3">
                    {" "}
                    {c.key_elements}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Home Background */}
      <div className="size-full -z-40 fixed top-0">
        <img
          className="size-full object-cover object-center"
          src={background}
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
