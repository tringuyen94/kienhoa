import { Fab, makeStyles } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
const ScrollToTop = () => {
   const classes = styles()
   const handleScrollToTop = () => {
      window.scroll({
         top:0,
      })
   }
   return (
      <Fab className={classes.fab} onClick={handleScrollToTop}>
         <ExpandLessIcon />
      </Fab>
   )
}

const styles = makeStyles({
   fab: {
      position: "fixed",
      bottom: "80px",
      right: "50px",
      border: "2px solid #8e8e8e",
      color: '#8e8e8e',
      zIndex: "98",
      transition: "all .5s ease",
      backgroundColor: "transparent",
      "& svg": {
         fontSize: "40px",
      },
      "&:hover": {
         backgroundColor: "#446084",
         color: "#fff"
      }
   }
})
export default ScrollToTop