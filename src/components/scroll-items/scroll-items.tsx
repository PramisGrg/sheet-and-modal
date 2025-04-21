import mountain from "../../assets/images/mountain.jpeg";

const ScrollItems = () => {
  return (
    <div className="border max-w-6xl mx-auto rounded-md space-y-6 py-4 border-gray-200">
      <h1 className="p-4">Top Products</h1>
      <div className="flex gap-8 p-4 border border-red-400 overflow-x-auto">
        <img className="w-72 h-72 rounded-md" src={mountain} />
        <img className="w-72 h-72 rounded-md" src={mountain} />
        <img className="w-72 h-72 rounded-md" src={mountain} />
        <img className="w-72 h-72 rounded-md" src={mountain} />
        <img className="w-72 h-72 rounded-md" src={mountain} />
        <img className="w-72 h-72 rounded-md" src={mountain} />
        <img className="w-72 h-72 rounded-md" src={mountain} />
        <img className="w-72 h-72 rounded-md" src={mountain} />
        <img className="w-72 h-72 rounded-md" src={mountain} />
        <img className="w-72 h-72 rounded-md" src={mountain} />
      </div>
    </div>
  );
};

export default ScrollItems;
