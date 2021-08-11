import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Carousel1 from '../../assets/images/carousel_1.jpg'
import Carousel2 from '../../assets/images/carousel_2.jpg'
import Carousel3 from '../../assets/images/carousel_3.jpg'
import Carousel4 from '../../assets/images/carousel_4.jpg'
import { makeStyles } from "@material-ui/core";

const CarouselComp = () => {
   const classes = styles()
   return (
      <Carousel
         className={classes.carousel}
         showThumbs={false}
         infiniteLoop={true}
         interval={5000}
         showStatus={false}
         dynamicHeight={true} 
      >
         <div>
            <img src={Carousel1} />
         </div>
         <div>
            <img src={Carousel2} />
         </div>
         <div>
            <img src={Carousel3} />
         </div>
         <div>
            <img src={Carousel4} />
         </div>
      </Carousel>
   )
}
const styles = makeStyles({
   carousel: {
      "& > div": {
         "&> img": {
         }
      }
   }
})

export default CarouselComp