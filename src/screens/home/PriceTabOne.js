import { Grid, Typography, Divider, makeStyles } from '@material-ui/core'
function PriceTabOne() {
   const classes = styles()
   return (
      <Grid container spacing={3}>
         <Grid item xs={12} sm={6} md={3} className={classes.priceItem}>
            <h3>Trọn gói đ/m²</h3>
            <Divider />
            <Typography variant="h3" color="primary" className={classes.mainPrice}>299.000</Typography>
            <Typography>Công trình dân dụng khách sạn, resort</Typography>
            <Typography variant="h5" >399.000</Typography>
            <Typography>Phong cách tân cổ điển Bar, cafe, nhà hàng</Typography>
            <Typography variant="h5">499.000</Typography>
            <Typography>Phong cách cổ điển</Typography>
            <Typography variant="h5">199.000</Typography>
            <Typography>Sân vườn, Cảnh quan
               Tư vấn thiết kế nhanh
            </Typography>
            <ul className={classes.priceSubOption}>
               <li>Bảng vẽ KT, Nội thất</li>
               <li>Kết cấu M&E</li>
               <li>Hồ sơ xin phép XD</li>
               <li>Giám sát tác giả</li>
            </ul>
         </Grid>
         <Grid item xs={12} sm={6} md={3} className={classes.priceItem}>
            <h3>Kiến trúc đ/m²</h3>
            <Divider />
            <Typography variant="h3" color="primary" className={classes.mainPrice}>199.000</Typography>
            <Typography>Công trình dân dụng Khách sạn, resort Bar, cafe, nhà hàng</Typography>
            <Typography variant="h5">249.000</Typography>
            <Typography>Phong cách tân cổ điển </Typography>
            <Typography variant="h5">299.000</Typography>
            <Typography>Phong cách cổ điển</Typography>
            <Typography variant="h5">120.000</Typography>
            <Typography> Thiết kế concept</Typography>
            <ul className={classes.priceSubOption}>
               <li>Bảng vẽ kiến trúc</li>
               <li>Kết cấu (none: cấu tạo)</li>
               <li>Hồ sơ xin phép XD</li>
               <li>Giám sát tác giả</li>
            </ul>
         </Grid>
         <Grid item xs={12} sm={6} md={3} className={classes.priceItem}>
            <h3>Nội thất đ/m²</h3>
            <Divider />
            <Typography variant="h3" color="primary" className={classes.mainPrice}>199.000</Typography>
            <Typography>Công trình dân dụng khách sạn, resort, Bar, cafe, nhà hàng</Typography>
            <Typography variant="h5">249.000</Typography>
            <Typography>Phong cách tân cổ điển </Typography>
            <Typography variant="h5">299.000</Typography>
            <Typography>Phong cách cổ điển</Typography>
            <Typography variant="h5">120.000</Typography>
            <Typography>Thiết kế conceppt</Typography>
            <ul className={classes.priceSubOption}>
               <li>Bảng vẽ 3D Nội thất</li>
               <li>M&E</li>
               <li>Giám sát tác giả</li>
            </ul>
         </Grid>
         <Grid item xs={12} sm={6} md={3} className={classes.priceItem}>
            <h3>Thi công phần thô</h3>
            <Divider />
            <Typography variant="h3" color="primary" className={classes.mainPrice}>3.099.000</Typography>
            <Typography variant="h5">3.099tr - 3.399tr</Typography>
            <Typography> Bar, cafe, nhà hàng Công trình dân dụng</Typography>
            <Typography variant="h5">3.299tr - 3.599tr</Typography>
            <Typography>Vượt nhịp 6m đến 9m Khách sạn, cao tầng</Typography>
            <Typography>Xi măng holcim/Hà Tiên</Typography>
            <Typography>Thép Việt Nhật/Pomina </Typography>
            <Typography>Dây điện Caldivi,...</Typography>
            <ul className={classes.priceSubOption}>
               <li>Bảng vẽ 3D nội thất</li>
               <li>M&E</li>
               <li>Hồ sơ xin phép XD</li>
               <li>Giám sát tác giả</li>
            </ul>
         </Grid>
      </Grid>
   )
}
const styles = makeStyles({
   priceItem: {
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      "& p":{
         padding:'8px 0',
      }
   },
   mainPrice:{
      padding:"10px 0",
   },
   priceSubOption: {
      padding:"10px 0",
      listStyle: 'none',
      background: "linear-gradient(to bottom, #2C5364, #203A43, #0F2027)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      "& > li": {
         padding: '8px 0',
         color: "#fff",
      }
   }
})
export default PriceTabOne