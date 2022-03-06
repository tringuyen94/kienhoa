import { Grid, makeStyles } from "@material-ui/core"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { DOMAIN } from "../../services/baseURL.services"

const TagProject = ({ projects }) => {
   const classes = styles()
   const history =useHistory()
   return (
      <Grid container>
         {projects.map((item, index) => (
            <Grid item md={3} key={index} className={classes.projectWrapper} onClick={()=>history.push(`/du-an/${item.slugNameProject}`)} >
               <img src={DOMAIN + "/" + item.projectImages[0]}
                  className={classes.projectImage}  alt="#project"/>
               <div className={classes.projectInfo}>
                  <p className={classes.projectName}>{item.nameProject}</p>
                  <p className={classes.projectArchitect}>{item.nameArchitect}</p>
               </div>
            </Grid>
         ))}
      </Grid>
   )
}
const styles = makeStyles({
   projectWrapper: {
      display: "flex",
      flexDirection: 'column',
      marginRight: '20px',
      flexBasis: '24%',
      position: 'relative',
      cursor: "pointer",
      overflow: "hidden",
   },
   projectImage: {
      height: "250px",
      transition: "transform .25s ease",
      "&:hover": {
         transform: 'scale(1.2)'
      }
   },
   projectInfo: {
      position: "absolute",
      left: 0,
      bottom: 0,
      padding: '10px'
   },
   projectName: {
      color: "#ecf0f1",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize:"13px"
   },
   projectArchitect: {
      textTransform: "uppercase",
      fontSize:"12px",
      color: "#7f8c8d",
   }

})
export default TagProject