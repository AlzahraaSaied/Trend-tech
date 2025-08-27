import { useState, useEffect } from "react";
import { useProducts } from "@hooks/useProducts";
import { Product } from "@components/eCommerce";
import { GridList, Heading } from "@components/common";
import { Loading } from "@components/feedback";
import { TProduct } from "@types";
import { Pagination } from "@components/common/Pagination/Pagination";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, error, products, totalProducts, fetchProducts } = useProducts();

  const productsPerPage = 10;
  const totalPages = Math.ceil((totalProducts || 0) / productsPerPage);

  useEffect(() => {
    fetchProducts(currentPage, productsPerPage);
  }, [currentPage, fetchProducts]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Heading title={"Products"} />
      <Loading status={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no Products"
          records={products}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Products;
