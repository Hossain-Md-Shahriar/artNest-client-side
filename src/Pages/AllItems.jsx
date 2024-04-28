import { Link, useLoaderData } from "react-router-dom";

const AllItems = () => {
  const crafts = useLoaderData();

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
