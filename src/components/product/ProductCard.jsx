import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";

const ProductCard = (probs) => {
  const dispatch = useDispatch();
  const handleAddToCart = () =>{
    dispatch(addToCart(probs))
  }
  return (
    <div className="relative p-3 flex flex-col justify-between shadow text-gray-900">
      <div className="absolute right-2 cursor-pointer">
        <MdFavoriteBorder color="red" size={22} />
      </div>
      <div className="flex justify-center items-center cursor-pointer">
        <img src={probs?.imageUrl} alt="" className="w-full h-40" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="mt-5 p-1 cursor-pointer">
          <h4 className="text-md font-semibold">{probs?.name}</h4>
        </div>
        <div className="cursor-pointer">
          <p className="text-xs">
            {probs?.description.substring(0, 10) + "..."}
          </p>
        </div>
        <div className="flex gap-2">
          <strike className="uppercase text-md text-red-900 font-semibold">
            ₹ {probs?.price}
          </strike>
          <p className="uppercase text-md text-green-900 font-semibold">
            ₹ {probs?.discountAmount}
          </p>
        </div>
        <div className="">
          <button onClick={handleAddToCart} className="w-full border border-gray-900 py-1 bg-gray-900 font-semibold text-gray-50 rounded hover:bg-gray-50 hover:text-gray-900">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
