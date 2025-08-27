import { TProduct } from "@types";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, images, category }: TProduct) => {
  return (
    <div
      className="card shadow-sm rounded-3 mx-auto my-1 product-card-hover px-5"
      style={{  transition: "transform 0.3s, box-shadow 0.3s" }}
    >
      <Link to={`/products/${id}`} className="text-decoration-none text-dark">
        <div className="d-flex justify-content-center mt-3 px-3">
          <div
            className="rounded-circle bg-white overflow-hidden"
            style={{ width: "150px", height: "150px" }}
          >
            <img
              src={images[0]}
              alt={title}
              className="img-fluid w-100 h-100" style={{ objectFit: "cover" }}
            />
          </div>
        </div>

     
        <div className="card-body d-flex flex-column align-items-center text-center px-3 py-2">
          <h5 className="fw-semibold mb-1">{title}</h5>  
          <small className="text-muted mb-2">{category?.name}</small>

          <div className="d-flex align-items-center gap-2 mb-1">
            <span className="text-muted text-decoration-line-through">
              ${Math.floor(price * 1.1)}
            </span>
            <span className="text-danger fw-semibold text-decoration-underline">
              10% OFF
            </span>
          </div>

          <p className="fw-bold text-success py-2">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
