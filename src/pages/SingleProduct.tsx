import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { addToast } from "@store/toasts/toastsSlice";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { fetchProductById } from "../store/products/productsSlice";
import useCart from "@hooks/useCart";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { product, loading } = useAppSelector((state) => state.products);
  const { addItem } = useCart();

  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
  }, [id, dispatch]);

  const handleAddToCart = () => {
    if (!product) return;

    addItem(
      {
        id: String(product.id),
        title: product.title,
        price: product.price,
        image: product.images[0],
      },
      1
    );

    dispatch(
      addToast({
        type: "success",
        title: "Added to Cart",
        message: `${product.title} has been added to your cart.`,
      })
    );
  };

  if (!product)
    return <Loading status={loading} error={""} type="product">Loading.... </Loading>;

  return (
    <Loading status={loading} error={""} type="product">
      <Container className="py-4">
        <Row className="g-4">
          <Col md={6}>
            <Image
              src={product.images[0]}
              alt={product.title}
              fluid
              rounded
              className="shadow-sm"
            />
            <div className="d-flex flex-wrap gap-2 mt-2">
              {product.images?.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={product.title}
                  thumbnail
                  style={{ width: 80, height: 80, objectFit: "cover" }}
                />
              ))}
            </div>
          </Col>
          <Col md={6}>
            <h1>{product.title}</h1>
            <div className="mb-4">
              <div className="d-flex align-items-center gap-2">
                <div className="text-muted text-decoration-line-through">
                  ${Math.floor(product.price * 1.1)}
                </div>
                <div className="text-danger fw-semibold text-decoration-underline">
                  10% OFF
                </div>
              </div>
              <div className="fs-3 fw-bold text-success py-3">${product.price}</div>
            </div>
            <div className="mb-4">
              {" "}
              <h5>Description:</h5>{" "}
              <p className="text-muted">{product.description}</p>{" "}
            </div>
            <div className="d-flex gap-3 mb-3">
             {" "} 
              <Button
                variant="success"
                className="flex-fill py-2 fw-medium my-4 fs-5"
                onClick={handleAddToCart}
              >
               {" "} 
                Add To Cart{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Loading>
  );
};

export default SingleProduct;
