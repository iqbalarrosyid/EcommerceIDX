// Suggested code may be subject to a license. Learn more: ~LicenseLog:707312805.
import { Box } from '@mui/material'
import Appbar from '../../../components/appbar/Appbar'
import Footer from '../../../components/footer/Footer'
import ListOrders from './ListOrders'

const Orders = () => {
  return (
    <Box>
      <Appbar/>
      <Box sx={{height: 570, padding: "30px"}}>
        <ListOrders/>
      </Box>
      <Footer/>
    </Box>
  )
}

export default Orders