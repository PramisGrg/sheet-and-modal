import { productData } from "../../data/product.data";
const CardItem = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-10 max-w-6xl mx-auto py-20">
      {productData.map((product) => (
        <div
          className="border w-56 h-64 border-gray-200 rounded-xl"
          key={product.id}
        >
          <img
            className="w-full h-4/5 object-cover rounded-t-xl "
            src={product.image}
          />

          <div>{product.title}</div>
          <div>
            <button>Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
