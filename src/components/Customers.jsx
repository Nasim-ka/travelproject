import { Box, Stack } from '@mui/material'
import React from 'react'
import Customerscard from './Customerscard'
import Services from './Services'

const Customers = () => {
  return (
    <Box>
    <Customerscard/>
    <Services/>
    </Box>
  )
}

export default Customers