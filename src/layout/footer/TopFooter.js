import { Grid, Typography, makeStyles } from "@material-ui/core"
import { PinDrop, Phone, Email } from "@material-ui/icons"

const TopFooter = () => {
   const classes = styles()
   return (
      <Grid container justifyContent="center" className={classes.topFooterWrapper} >
         <Grid item xs={12} sm={12} md={4} >
            <Typography variant="h5" className={classes.topFooterTitle}> Tại sao bạn chọn Kiến Hoa?</Typography>
            <Typography variant="body1" className={classes.topFooterIntro}>
               10 năm kinh nghiệm trong ngành kiến trúc, nội thất và xây dựng
               , với hàng trăm khách hàng mỗi năm, Wonder là một công ty danh tiếng 
               và đáng tin cậy trong việc cung cấp dịch vụ cho khách hàng tư nhân và doanh nghiệp.
            </Typography>
            <Typography variant="body1" className={classes.topFooterIntro} >
               Wonder áp dụng phong cách thiết kế đơn giản, bố trí nội thất thông minh,
                ánh sáng tràn ngập không gian với các khung cửa kính lớn và thiên về xu hướng cảnh quan màu xanh lá.
            </Typography>
            <Typography variant="body1" className={classes.topFooterIntro} >
               Các nhóm thiết kế của Wonder quan tâm đến mọi khía cạnh từ khâu lên ý tưởng,
                phát triển concept đến thực tế sử dụng. Chúng tôi kết hợp giữa truyền thống và đương đại để phát triển sản phẩm. 
                Tất cả dự án của Wonder là sự kết hợp giữa nghệ thuật kiến trúc và công năng sử dụng.
            </Typography>
            <Typography variant="body1" className={classes.topFooterIntro}>
               Hơn 50 nhân sự được tuyển chọn có năng lực, thành tích học tập cao, 
               đầy nhiệt huyết và sáng tạo, luôn tiếp thu công nghệ, ứng dụng mới nhất nhằm mục đích hỗ trợ cho kỹ năng thiết kế, xây dựng ngày càng nhanh và đẹp hơn.
            </Typography>
         </Grid>
         <Grid item xs={12}  sm={12} md={4}>
            <Typography variant="h5" className={classes.topFooterTitle}>Liên hệ</Typography>
            <Typography className={classes.topFooterContact} > <PinDrop color="secondary" />195/3 Điện Biên Phủ, Phường 15, Quận Bình Thạnh, Thành phố Hồ Chí Minh</Typography>
            <Typography className={classes.topFooterContact}> <Phone color="secondary" /> 0905.305.725 (Mr.Bửu) </Typography>
            <Typography className={classes.topFooterContact}> <Email color="secondary" /> truongtubuu@gmail.com </Typography>
         </Grid>
      </Grid>
   )
}
const styles = makeStyles({
   topFooterWrapper: {
      padding: "20px",
      backgroundColor: "#333333",
      color: "#e8e8e8"
   },
   topFooterTitle: {
      fontWeight: 'bold'
   },
   topFooterIntro: {
      margin: "30px 0 "
   },
   topFooterContact: {
      display: "flex",
      alignItems: "flex-start",
      margin: "10px",
      "& svg": {
         marginRight: "20px"
      }
   }
})
export default TopFooter