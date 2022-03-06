import { Box, Typography } from "@material-ui/core"
const Commmitments = () => {
   return (
      <Box paddingX={10} paddingY={2.5}>
         <Typography variant="h5">Thiết kế trọn gói</Typography>
         <Typography>
   Hợp đồng thi công trọn gói (phần thô, hoàn thiện, nội thất) suất đầu tư > 10tr/m² được giảm 30% phí thiết kế
            <br />
   Hợp đồng thi công trọn gói (phần thô, hoàn thiện, nội thất) suất đầu tư > 12tr/m² được giảm 50% phí thiết kế
            <br />
Hợp đồng thi công trọn gói (phần thô, hoàn thiện, nội thất) suất đầu tư > 15tr/m² được giảm 100% phí thiết kế
         </Typography>
         <Typography variant="h5">Thiết kế kiến trúc</Typography>
         <Typography>Hợp đồng thi công phần thô & hoàn thiện suất đầu tư > 8tr/m² được giảm 100% phí thiết kế</Typography>
         <Typography variant="h5">Thiết kế nội thất</Typography>
         <Typography>Hợp đồng thi công nội thất suất đầu tư > 5tr/m² được giảm 100% phí thiết kế</Typography>
         <Typography variant="h5">Lưu ý về việc bên B cung cấp vật tư hoàn thiện và nội thất cho bên A</Typography>
         <Typography>Bên B cung cấp đúng giá niêm yết của nhà phân phối, phần chiết khấu được xem là phí tư vấn và quản lý.
            <br />
            Sản phẩm đang trong chương trình khuyến mãi, bên B tính 10% phí tư vấn trên giá niêm yết của nhà phân phối, (ví dụ sofa giá 10.000.000 giảm 30% còn 7.000.000 thì phí tư vấn 10% cho bên B là 1.000.000).
            <br />
            Bất kỳ hạng mục nào bên A lược bỏ bớt để tự cung cấp, bên B sẽ tính phí nhân công lắp đặt, bao gồm vật tư (nếu có) và tính lại phần ưu đãi giá thiết kế theo suất đầu tư trên mỗi mét vuông cho bên A.
         </Typography>
      </Box>
   )
}
export default Commmitments