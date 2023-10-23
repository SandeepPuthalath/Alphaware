import React from "react";
import { useSelector } from "react-redux";
import ItemCard from "../components/cart/ItemCard";
import { BiCartAlt } from "react-icons/bi";

const CartPage = () => {
  const cartItems = useSelector((s) => s.cart.cartItems);
  const totalPrice = useSelector((s) => s.cart.totalPrice)
  return (
    <div className="text-gray-900">
      <div className="mb-3 flex justify-start items-center gap-3">
        <span className="block">
          <BiCartAlt size={28} />
        </span>
        <h3 className="uppercase text-2xl font-semibold">Cart</h3>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="col-span-1">
        {!cartItems.length && (
          <div className="h-60 flex flex-col justify-center items-center">
            <BiCartAlt size={150} />
            <h4 className="text-2xl font-semibold">Cart is empty</h4>
            <span>Please add something</span>
          </div>
        )}
          <div className="flex flex-col gap-10">
            {cartItems.map((item) => (
              <ItemCard key={item?.product?._id} {...item} />
            ))}
          </div>
        </div>
        <div className="col-span-1">
          {cartItems && (
            <div className="flex justify-between items-center">
              <span className="uppercase font-bold text-xl md:text-2xl">
                Total Amount
              </span>
              <span className="uppercase font-bold text-xl md:text-2xl">
                ₹ {totalPrice}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
