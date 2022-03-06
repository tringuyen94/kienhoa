import { Grid, Hidden, Button, makeStyles } from "@material-ui/core"
import logoKienHoa from '../../assets/images/logo_kienhoa.jpg'
import BurgerMenu from "../../components/BurgerMenu";
import clsx from "clsx";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Header = ({ pathname }) => {
   const classes = styles()
   const actived = pathname.split('/')
   const history =useHistory(23   )
   return (
      <Grid container className={classes.header} alignItems="center">
         <Hidden smDown>
            <Grid item md={2} className={classes.logoWrapper} >
               <a href="/"> <img src={logoKienHoa} alt="logo" /></a>
            </Grid>
            <Grid item md={7} >
               <ul className={classes.navigation}>
                  <li className={clsx({ [classes.linkActived]: actived[1] === '' })}><a href="/">Trang chủ</a></li>
                  <li className={clsx({ [classes.linkActived]: actived[1] === "du-an" })} ><a href="/du-an">Dự án</a></li>
                  {/* <li className={clsx({ [classes.linkActived]: actived[1] === "xay-dung-va-hoan-thien" })}><a href="/xay-dung-va-hoan-thien">Xây dựng và hoàn thiện</a></li> */}
                  <li className={clsx({ [classes.linkActived]: actived[1] === "noi-that" })}><a href="/noi-that">Nội thất</a></li>
                  <li className={clsx({ [classes.linkActived]: actived[1] === "blog" })}><a href="/blog">Blog</a></li>
                  <li className={clsx({ [classes.linkActived]: actived[1] === "gioi-thieu" })}><a href="/gioi-thieu">Giới thiệu</a></li>
                  <li className={clsx({ [classes.linkActived]: actived[1] === "lien-he" })} > <a href="/lien-he">Liên hệ</a></li>
               </ul>
            </Grid >
            <Grid item md={3}>
               <Button className={classes.buttonLogin} onClick={()=> history.push('/login')}>
                  Đăng nhập
               </Button>
            </Grid>
         </Hidden>
         <BurgerMenu />
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
         border:"1px solid #eee",
         borderRadius:"8px",
         width: "65px",
         height: "65px"
      }
   },
   navigation: {
      display: "flex",
      listStyle: "none",
      justifyContent: "center",
      "& > li": {
         padding: "12px 10px",
         transition: "all.5s ease",
         "&:hover a": {
            color: 'red'
         },
         "& > a": {
            transition: "all .25s ease",
            textDecoration: "none",
            color: "#fff",
            fontSize: "18px"

         }
      }
   },
   linkActived: {
      borderBottom: "3px solid red",
   },
   buttonLogin:{
      color:"#fff",
      marginLeft:"100px",
      border:"1px solid #fff"
   }
})

export default Header