import { useLoaderData } from "react-router-dom";

const AllItems = () => {
  const crafts = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto mt-28">
      <div className="mx-4">
        <table className="table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Subcategory</th>
              <th>Added By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              crafts.map(craft => (
                <tr key={craft._id}>
                  <td>{craft.item_name}</td>
                  <td>{craft.subcategory_name}</td>
                  <td>{craft.name}</td>
                  <td><button className="btn btn-primary">View Details</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems;
