import { Grid, makeStyles, Typography } from "@material-ui/core"
import AddBlogThumb from '../../assets/images/add-blog-thumb.jpg'
import AddProjectThumb from '../../assets/images/add-project-thumb.jpg'
import AddProductThumb from '../../assets/images/add-product-thumb.jpg'
import { useHistory } from "react-router-dom"
const ConsoleDashBoard = () => {
   const classes = styles()
   const history = useHistory()
   return (
      <Grid container className={classes.consoleWrapper}>
         <Grid item xs={6} sm={6} md={4} className={classes.consoleItem} onClick={() => history.push('/admin/create-blog')}>
            <img src={AddBlogThumb} alt="#console-thumb" />
            <Typography variant="h5" className={classes.consoleInfo}>Tạo Blog</Typography>
         </Grid>
         <Grid item xs={6} sm={6} md={4} className={classes.consoleItem} onClick={() => history.push('/admin/create-project')}>
            <img src={AddProjectThumb} alt="#console-thumb" />
            <Typography variant="h5" className={classes.consoleInfo}>Tạo dự án</Typography>
         </Grid>
         <Grid item xs={6} sm={6} md={4} className={classes.consoleItem} onClick={() => history.push('/admin/create-product')}>
            <img src={AddProductThumb} alt="#console-thumb" />
            <Typography variant="h5" className={classes.consoleInfo}>Thêm sản phẩm</Typography>
         </Grid>

      </Grid>
   )
}
const styles = makeStyles({
   consoleWrapper: {
      padding: "20px 25px",
      justifyContent: 'flex-start',
   },
   consoleItem: {
      cursor: 'pointer',
      position: 'relative',
      height: "35vh",
      flexBasis:"27%",
      borderRadius: "20px",
      overflow: 'hidden',
      marginRight:"40px",
      boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      '& img': {
         transition: 'transform .2s ease',
         width: "100%",
         height: "100%",
         borderRadius: "20px",
         objectFit: "cover"
      },
      '&:hover img': {
         transform: "scale(1.3)"
      },
      "&:hover h5": {
         color: "#FF851B"
      }
   },
   consoleInfo: {
      position: 'absolute',
      transition: "color .25s ease",
      top: "50%",
      right: 0,
      width: '100%',
      color: "#fff",
      padding: '20px 0',
      fontWeight: 'bold',
      textAlign: 'center',
      borderRadius: "20px",
      backgroundColor: "transparent"
   }
})
export default ConsoleDashBoard