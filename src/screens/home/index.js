import { Fragment } from "react"
import CarouselComp from "./CarouselComp"
import Commmitments from "./Commitments"
import Intro from "./Intro"
import Portfolio from "./Portfolio"
import Price from "./Price"
import Map from './Map'

const Home = () => {
   return (
      <Fragment>
         <CarouselComp />
         <Intro />
         <Portfolio />
         <Price />
         <Commmitments />
         <Map />
      </Fragment>
   )
}
export default Home