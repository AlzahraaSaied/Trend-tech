 
import Carousel from 'react-bootstrap/Carousel';
import styles from "./styles.module.css";
import airbuds from '@assets/airpuds.jpg';
import furnitureSofa from '@assets/furnitureSofa.jpg' ;
import whiteTee from '@assets/white-shirt.jpg' ;


const {carouselImage} = styles
const MainSlider = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item>
         <img src={airbuds} alt="" className={carouselImage}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={furnitureSofa} alt="" className={carouselImage}/>
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={whiteTee} alt="" className={carouselImage} />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default MainSlider


