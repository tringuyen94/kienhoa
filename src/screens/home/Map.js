import { Fragment } from "react"
const WIDTH =  window.innerWidth
const Map = () => {
   return (
      <Fragment>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62706.268291119595!2d106.7063532!3d10.8004522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529ae30ff7381%3A0x3bf8cae159ffce11!2zMTk1LzMgxJBp4buHbiBCacOqbiBQaOG7pywgUGjGsOG7nW5nIDE1LCBCw6xuaCBUaOG6oW5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1628678852798!5m2!1svi!2s"
            width={WIDTH}
            height="450"
            allowFullScreen
            title="map"
            loading="lazy"></iframe>
      </Fragment>
   )
}
export default Map