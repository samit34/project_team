import React from 'react'
import Providerhero from './Providerhome-com/Provider-hero/Providerhero'
import Latestjob_crouser from './Providerhome-com/latestjob_crouser/Latestjob_crouser'
import Related_jobs from './Providerhome-com/Related-jobs/Related_jobs'



const ProviderHome = () => {
  return (
  <>

  <h1>this is a home page </h1>
        <Providerhero/>
        <Latestjob_crouser/>
        <Related_jobs/>
  </>
  )
}

export default ProviderHome