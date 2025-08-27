import { FC, ReactNode } from "react";
import { Card, Image } from "react-bootstrap";

type SingleProductCardProps = {
  title: ReactNode;
  price: number;
  img: string;
  direction?: "row" | "column";
};

const SingleProductCard: FC<SingleProductCardProps> = ({
  title,
  price,
  img,
  direction = "row",
}) => {
  return (
    <Card className="shadow-sm mb-3">
      <Card.Body className={`d-flex flex-${direction} align-items-center gap-3`}>
        <Image
          src={img}
          alt={typeof title === "string" ? title : "Product image"}
          rounded
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
        />
        <div>
          <div className="fw-semibold">{title}</div>
          <div className="text-success fw-bold">${price}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleProductCard;
