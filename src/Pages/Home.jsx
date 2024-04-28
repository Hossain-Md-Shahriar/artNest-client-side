import { Link, useLoaderData } from "react-router-dom"

const Home = () => {
  const craftCategories = useLoaderData();
  return (
    <div className="dark:bg-blue-500">
      <h3 className="text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit.sequuntur nobis molestiae, ullam recusandae!</h3>
      <div className="mt-28">
        <h2 className="text-3xl">arts & crafts categories</h2>
        <div className="grid grid-cols-3 gap-4">
          {
            craftCategories.map(c => (
              <Link to={`/matchedCategory/${c._id}`} key={c._id} className="border-2 p-5 cursor-pointer">
                <h3 className="text-2xl">{c.image}</h3>
                <h3 className="text-2xl">{c.subcategory_name}</h3>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
