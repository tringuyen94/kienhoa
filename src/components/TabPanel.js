
import { Box } from '@material-ui/core'

const TabPanel = (props) => {
   const { children, value, index, ...other } = props;
   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         {...other}
      >
         {value === index && (
            <Box p={3}>
               {children}
            </Box>
         )}
      </div>
   );
}


export default TabPanel