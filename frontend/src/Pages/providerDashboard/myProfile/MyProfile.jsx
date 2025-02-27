import React from 'react'
import Profile from './profile_comp/Profile'
import ProfileTwo from './profile_comp/ProfileTwo'
import ProfileCard from './profile_comp/ProfileCard'
import ProviderStats from './profile_comp/ProviderStats'


const MyProfile = () => {
  return (
  <>
  <Profile/>
  <ProviderStats/>
  <ProfileTwo/>
  <ProfileCard/>
 
  </>
  )
}

export default MyProfile