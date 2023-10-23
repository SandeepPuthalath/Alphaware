import React from "react";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillCloseCircle,
} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeQty, removeFromCart } from "../../redux/features/cartSlice";

const ItemCard = ({ product, qty }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeFromCart(product?._id));
  };
  const handleChangeQty = (change) => {
    dispatch(changeQty({ id: product?._id, change }));
  };
  return (
    <div className="relative w-full rounded shadow grid grid-cols-3 gap-2 text-gray-900">
      <div className="col-span-1 flex justify-center items-center">
        <img src={product?.imageUrl} alt="cartItem" className="w-32"/>
      </div>
      <div className="col-span-1 py-2 md:py-5">
        <div className="h-full flex flex-col justify-center gap-1">
          <div className="cursor-pointer">
            <p className="text-sm font-semibold md:text-xl">{product?.name}</p>
          </div>
          <div>
            <p className="text-xs md:text-md">
              {product?.description.substring(0, 15)}...
            </p>
          </div>
          <div className="flex gap-2">
            <strike className="uppercase text-md text-red-900 font-semibold">
              ₹ {product?.price}
            </strike>
            <p className="uppercase text-md text-green-900 font-semibold">
              ₹ {product?.discountAmount}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 py-5 flex flex-col justify-center items-center gap-2">
        <div className="flex justify-center">
          <p className="text-2xl font-bold">
            ₹ {qty * product?.discountAmount}
          </p>
        </div>
        <div className="flex gap-1 justify-center items-center">
          <button>
            <AiFillCaretLeft
              onClick={() => handleChangeQty(-1)}
              size={20}
            />
          </button>
          <span className="font-semibold">{qty}</span>
          <button>
            <AiFillCaretRight
              onClick={() => handleChangeQty(1)}
              size={20}
            />
          </button>
        </div>
      </div>
      <span
        onClick={handleRemoveItem}
        className="absolute right-0 block cursor-pointer"
      >
        <AiFillCloseCircle />
      </span>
    </div>
  );
};

export default ItemCard;
