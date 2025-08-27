import shoppingImage from '@assets/assets/shopping2_generated.jpg';
import styles from "./styles.module.css";

const {
  carouselImage,
  backRelative,
  textBold,
  textLight,
  marginTop
} = styles;

export default function About() {
  return (
    <>
      <div className={backRelative}>
        <img
          src={shoppingImage}
          alt="Shopping"
          className={carouselImage}
        />

       
      </div>

      <div className={marginTop}>
        <span className={`${textLight} ${marginTop}`}>
          Best Prices Guaranteed
        </span>
        <h5 className={`${textBold} ${marginTop}`}>
          Discover a variety of quality products
        </h5>
        <p className={marginTop}>
          Enjoy shopping with exclusive offers, fast delivery, and customer-friendly services.
        </p>
      </div>
    </>
  );
}
