import React from 'react'

import Booking from './Dashboard-com/booking/Booking'
import Pending from './Dashboard-com/Pending/Pending'
import History from './Dashboard-com/history/History'
import ProviderList from './Dashboard-com/Provider/Provider'
const Consumerdashboard = () => {
  return (
      <>
      <div className='flex flex-col gap-3'>
      <div className='flex gap-2' >
       
          <Booking/>
          <Pending/>
      
          </div>
          <div className='flex'>
          <History/>
          </div>
          <div>
            <ProviderList/>

          </div>
          </div>
      </>
  )
}

export default Consumerdashboard