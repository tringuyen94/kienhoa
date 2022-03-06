import { makeStyles, Typography } from "@material-ui/core"
const RoutePanel = ({ namePanel }) => {
   const classes = styles()
   return (
      <div className={classes.panel}>
         <Typography variant="h4" className={classes.name}>{namePanel}</Typography>
      </div>
   )
}

const styles = makeStyles({
   panel: {
      width: "100%",
      height: "185px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: "flex-end",
      background: "linear-gradient(to right, #243B55, #141E30)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

   },
   name: {
      color: "#fff",
      marginBottom: "20px"
   }


})
export default RoutePanel