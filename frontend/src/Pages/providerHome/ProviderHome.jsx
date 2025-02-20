import React from 'react'
import Providerhero from './Providerhome-com/Provider-hero/Providerhero'
import Latestjob_crouser from './Providerhome-com/latestjob_crouser/Latestjob_crouser'
import Related_jobs from './Providerhome-com/Related-jobs/Related_jobs'
import High_rank_user from './Providerhome-com/high_rank-user/High_rank_user'
import Footer from '../../Components/Footer/Footer'
import ServiceStatic from './Providerhome-com/serviceStatic/ServiceStatic'
import ProvAdd from './Providerhome-com/provAdd/ProvAdd'
import ProvGrid from './Providerhome-com/provGrid/ProvGrid'



const ProviderHome = () => {
  return (
  <>
        <Providerhero/>
        <Latestjob_crouser/>
        <Related_jobs/>
        <ServiceStatic/>
        <High_rank_user/>
        <ProvGrid/>
        <ProvAdd/>

        <Footer/>
  </>
  )
}

export default ProviderHome