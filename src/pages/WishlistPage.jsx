import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md';

const WishlistPage = () => {
  return (
    <div className="text-gray-900">
      <div className="mb-3 flex justify-start items-center gap-3">
        <span className="block">
          <MdFavoriteBorder size={28} />
        </span>
        <h3 className="uppercase text-2xl font-semibold">Wishlist</h3>
      </div>
    </div>
  );
}

export default WishlistPage
