import React from 'react'
import Showjobs from '../Showjobs/Showjobs'
import Eraning from '../eraning/Eraning'
import Jobdone from '../jobdone/Jobdone'
import Overallgrowth from '../overallgrowth/Overallgrowth'
import Ratingchart from '../Ratingcharts/Ratingcharts'
import Areajobs from '../areajobs/Areajobs'
import Socialmedia from '../socialmedia/Socialmedia'
import Customer from '../customer/Customer'
import Recentactivity from '../Recentactivity/Recentactivity'

const Dashboard = () => {
  return (
   <> 
   <div  className='w-full p-10' >
 
   <div className='flex gap-4 justify-center ' >
<Eraning/>
<Showjobs/>
<Jobdone/>
</div>
<div  className='flex gap-4 justify-start  items-end  py-5' >
<Overallgrowth/>
<Ratingchart/> 
</div>
<div className='flex gap-4 py-5' >
  <Areajobs/>
  <Socialmedia/>
</div>
<div className='flex gap-4'>
  <Customer/>
  <Recentactivity/>
</div>
</div>
   </>
  )
}

export default Dashboard