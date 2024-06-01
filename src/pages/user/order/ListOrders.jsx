import {Box, Typography, Input} from '@mui/material'

const ListOrders = () => {
  return (
    <>
        <Box sx={{display: 'flex', justifyContent: 'space-between', padding:"20px"}}>
            <Typography variant='h6' fontWeight="bold">Pesanan Kamu</Typography>

            <Box>
                <Input placeholder='Search By Order'/>
            </Box>
        </Box>
    </>
  )
}

export default ListOrders