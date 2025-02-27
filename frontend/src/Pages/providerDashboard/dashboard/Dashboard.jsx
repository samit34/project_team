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
 
   <div className='flex gap-[1%] gap-y-[2rem] justify-center  lg:flex-row flex-col flex-wrap ' >
<Eraning/>
<Showjobs/>
<Jobdone/>
</div>
<div  className='flex gap-[1%] gap-y-[2rem] justify-center  items-end  py-5 flex-wrap ' >
<Overallgrowth/>
<Ratingchart/> 
</div>
<div className='flex gap-[1%] gap-y-[2rem] py-5 flex-wrap ' >
  <Areajobs/>
  <Socialmedia/>
</div>
<div className='flex gap-[1%] gap-y-[2rem] flex-wrap '>
  <Customer/>
  <Recentactivity/>
</div>
</div>
   </>
  )
}

export default Dashboard