import React from 'react'
import Providerhero from './Providerhome-com/Provider-hero/Providerhero'
import Latestjob_crouser from './Providerhome-com/latestjob_crouser/Latestjob_crouser'
import Related_jobs from './Providerhome-com/Related-jobs/Related_jobs'
import High_rank_user from './Providerhome-com/high_rank-user/High_rank_user'
import Footer from '../../Components/Footer/Footer'



const ProviderHome = () => {
  return (
  <>

 
        <Providerhero/>
        <Latestjob_crouser/>
        <Related_jobs/>
        <High_rank_user/>
        <Footer/>
  </>
  )
}

export default ProviderHome