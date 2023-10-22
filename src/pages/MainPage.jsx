import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProduct } from "../redux/features/productSlice";
import ProductCard from "../components/product/ProductCard";
import Loading from "../components/loading/Loading";

const MainPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector((s) => s.product.loading);
  const products = useSelector((s) => s.product.products);
  React.useEffect(() => {
    dispatch(fetchAllProduct());
  }, []);

  if(loading){
    return <Loading/>
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <h4 className="uppercase text-xl md:text-2xl font-semibold">
          Product List
        </h4>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
        {products?.map((product) => (
          <ProductCard key={product?._id} {...product} />
        ))}
      </div>
    </>
  );
};

export default MainPage;
