import React from 'react'
import Showjobs from '../Showjobs/Showjobs'
import Eraning from '../eraning/Eraning'
import Jobdone from '../jobdone/Jobdone'

const Dashboard = () => {
  return (
   <> 
   <div>
   <div className='flex gap-4 justify-center ' >
<Eraning/>
<Showjobs/>
<Jobdone/>
</div>
</div>
   </>
  )
}

export default Dashboard