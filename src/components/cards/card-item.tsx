import { productData } from "../../data/product.data";
const CardItem = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-10 max-w-6xl mx-auto py-20">
      {productData.map((product) => (
        <div
          className="relative border group w-56 h-64 border-gray-200 rounded-xl"
          key={product.id}
        >
          <img
            className="w-full h-4/5 object-cover rounded-t-xl "
            src={product.image}
          />

          <div>{product.title}</div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition duration-300">
            <button className="py-2 px-6 bg-red-600 text-white cursor-pointer rounded-md transform translate-y-6 group-hover:translate-y-0 transition duration-300">
              Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
