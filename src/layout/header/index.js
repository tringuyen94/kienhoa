import { Grid, Hidden, makeStyles } from "@material-ui/core"
import logoKienHoa from '../../assets/images/logo_kienhoa.jpg'
import { Facebook, Twitter, LinkedIn } from '@material-ui/icons';
import BurgerMenu from "../../components/BurgerMenu";
const Header = () => {
   const classes = styles()
   return (
      <Grid container className={classes.header} alignItems="center">
         <Hidden smDown>
            <Grid item md={2} className={classes.logoWrapper} >
               <a href="/"> <img src={logoKienHoa} /></a>
            </Grid>
            <Grid item md={7} >
               <ul className={classes.navigation}>
                  <li><a href="#">Dự án</a></li>
                  <li><a href="#">Xây dựng và hoàn thiện</a></li>
                  <li><a href="#">Nội thất</a></li>
                  <li><a href="#">Phong thuỷ</a></li>
                  <li><a href="#">Giới thiệu</a></li>
                  <li><a href="#">Liên hệ</a></li>
               </ul>
            </Grid >
            <Grid item md={3}>
               <ul className={classes.socialLink}>
                  <li><a href="#"><Facebook /></a></li>
                  <li><a href="#"><Twitter /></a></li>
                  <li><a href="#"><LinkedIn /></a></li>
               </ul>
            </Grid>
            </Hidden>
         <BurgerMenu/>
      </Grid >
   )
}
const styles = makeStyles({
   header: {
      position: 'fixed',
      padding: "10px 0",
      backgroundColor: "black",
      opacity: ".8",
      zIndex: 100,
   },
   logoWrapper: {
      display: 'flex',
      justifyContent: "center",
      "& img": {
         width: "80px",
         height: "80px"
      }
   },
   navigation: {
      display: "flex",
      listStyle: "none",
      justifyContent: "center",
      "& > li": {
         padding: "10px 15px",
         transition: "all.5s ease",
         "&:hover": {
            borderBottom: "1px solid red",
         },
         "&:hover a": {
            color: 'red'
         },
         "& > a": {
            transition: "all .25s ease",
            textDecoration: "none",
            color: "white",
            fontSize: "18px"

         }
      }
   },
   socialLink: {
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      "& > li": {
         padding: "10px",
         "& > a": {
            textDecoration: 'none',
            color: "#fff",
            "&:hover": {
               color: 'red'
            }
         }
      }
   }

})

export default Header