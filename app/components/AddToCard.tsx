"use client";
const AddToCard = () => {
  return (
    <div>
      <button
        className="p-3 my-2 text-slate-800 rounded-md bg-indigo-500 text-sm hover:bg-indigo-300"
        onClick={() => console.log("Clicked")}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCard;
