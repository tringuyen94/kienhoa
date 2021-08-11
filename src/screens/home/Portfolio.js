import { Grid, makeStyles, Typography } from "@material-ui/core"
import Portfolio1 from '../../assets/images/portfolio_1.jpg'
import Portfolio2 from '../../assets/images/portfolio_2.jpg'
import Portfolio3 from '../../assets/images/portfolio_3.jpg'
import Portfolio4 from '../../assets/images/portfolio_4.jpg'
import Portfolio5 from '../../assets/images/portfolio_4.jpg'
const Portfolio = () => {
   const classes = styles()
   return (
      <Grid container justifyContent="center" alignItems="center" spacing={2} className={classes.portfolioWrapper}>
         <Grid item xs={6} sm={4} md={3} className={classes.portfolioItem}>
            <img src={Portfolio1} width="100%" height="275px" />
            <div className={classes.portfolioDetail}>
               <h5 >Nguyễn Lê Minh Trí</h5>
               <p>Ảnh thực tế sau thi công</p>
            </div>
         </Grid>
         <Grid item xs={6} sm={4} md={3} className={classes.portfolioItem}>
            <img src={Portfolio2} width="100%" height="275px" />
            <div className={classes.portfolioDetail}>
               <h5 >Trần Hồ Minh Hiển</h5>
               <p>Ảnh thực tế sau thi công</p>
            </div>
         </Grid>
         <Grid item xs={6} sm={4} md={3} className={classes.portfolioItem}>
            <img src={Portfolio3} width="100%" height="275px" />
            <div className={classes.portfolioDetail}>
               <h5 >Mai Hoà Bình</h5>
               <p>Ảnh thực tế sau thi công</p>
            </div>
         </Grid>
         <Grid item xs={6} sm={4} md={3} className={classes.portfolioItem}>
            <img src={Portfolio4} width="100%" height="275px" />
            <div className={classes.portfolioDetail}>
               <h5 >Trương Tử Bửu</h5>
               <p>Ảnh thực tế sau thi công</p>
            </div>
         </Grid>
         <Grid item xs={6} sm={4} md={3} className={classes.portfolioItem}>
            <img src={Portfolio1} width="100%" height="275px" />
            <div className={classes.portfolioDetail}>
               <h5 >Nguyễn Huy Linh</h5>
               <p>Ảnh thực tế sau thi công</p>
            </div>
         </Grid>
         <Grid item xs={6} sm={4} md={3} className={classes.portfolioItem}>
            <img src={Portfolio2} width="100%" height="275px" />
            <div className={classes.portfolioDetail}>
               <h5 >Huỳnh Sơn Hải</h5>
               <p>Ảnh thực tế sau thi công</p>
            </div>
         </Grid>
         <Grid item xs={6} sm={4} md={3} className={classes.portfolioItem} >
            <img src={Portfolio3} width="100%" height="275px" />
            <div className={classes.portfolioDetail}>
               <h5 >Mai Hoà Bình</h5>
               <p>Ảnh thực tế sau thi công</p>
            </div>
         </Grid>
         <Grid item xs={6} sm={4} md={3} className={classes.portfolioItem} >
            <img src={Portfolio4} width="100%" height="275px" />
            <div className={classes.portfolioDetail}>
               <h5 >Trần Hồ Minh Hiển</h5>
               <p>Ảnh thực tế sau thi công</p>
            </div>
         </Grid>
      </Grid>

   )
}
const styles = makeStyles({
   portfolioWrapper: {
      padding: "0 15px"
   },
   portfolioItem: {
      position: "relative",
      // boxShadow:"5px 10px #eee"
   },
   portfolioDetail: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      color: "white",
      textAlign: "center",
      padding: '15px 0',
      backgroundColor: "linear-gradient(to bottom, #a40606, #485461)",
      "& h5": {
         textTransform: 'uppercase',
         fontWeight: "bold",
         fontSize: '12px'
      },
      "& p": {
         color: '#fff',
         fontSize: "12px",
         fontWeight: 'lighter',
         letterSpacing: "1.5px",
         textTransform: "uppercase",

      },

   }

})

export default Portfolio