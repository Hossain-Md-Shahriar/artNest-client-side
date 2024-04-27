import { useLoaderData } from "react-router-dom"

const ItemDetails = () => {
    const craft = useLoaderData();
    const {
        image,
        item_name,
        subcategory_name,
        description,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        email,
        name,
      } = craft;

  return (
    <div>
      <h3 className="text-2xl">{email}</h3>
      <h3 className="text-2xl">{name}</h3>
    </div>
  )
}

export default ItemDetails
