import { Grid, makeStyles, Typography, } from "@material-ui/core"
const Intro = () => {
   const classes = styles()
   return (
      <Grid container justifyContent="center" className={classes.introWrapper}>
         <Grid item md={4}>
            <Typography variant="h5" className={classes.introTitle}>Kiến trúc, nội thất & xây dựng</Typography>
            <Typography  className={classes.introBody}>
               Hơn 10 năm kinh nghiệm trong ngành kiến trúc, nội thất và xây dựng,
               với hàng trăm khách hàng mỗi năm, Wonder là một công ty danh tiếng và đáng tin cậy trong việc
               cung cấp dịch vụ cho khách hàng tư nhân và doanh nghiệp.
            </Typography>
         </Grid>
      </Grid>
   )
}
const styles = makeStyles({
   introWrapper:{
      textAlign:"center",
      margin:"20px 0"
   },
   introTitle:{
      fontWeight:'bold',
      margin:"20px 0"
   },
   introBody:{
      color:"#777",
      lineHeight:1.5
   }

})

export default Intro