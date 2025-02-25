import React from 'react'
import Showjobs from '../Showjobs/Showjobs'
import Eraning from '../eraning/Eraning'
import Jobdone from '../jobdone/Jobdone'
import Overallgrowth from '../overallgrowth/Overallgrowth'

const Dashboard = () => {
  return (
   <> 
   <div  className='w-full p-10' >
   <div className='flex gap-4 justify-center ' >
<Eraning/>
<Showjobs/>
<Jobdone/>
</div>
<Overallgrowth/>
</div>
   </>
  )
}

export default Dashboard