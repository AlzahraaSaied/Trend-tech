import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useCallback } from "react";
import { actGetProducts } from "../store/products/productsSlice";


export const useProducts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { records, loading, error } = useSelector((state: RootState) => state.products);

  const fetchProducts = useCallback(
    (page: number, limit: number) => {
      const offset = (page - 1) * limit;
      dispatch(actGetProducts({ offset, limit }));
    },
    [dispatch]
  );

  return {
    products: records,
    loading,
    error,
    fetchProducts,
    totalProducts: useSelector((state: RootState) => state.products.totalProducts),

  };
};
