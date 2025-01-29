import React from 'react'
import Detail from '../components/Detail'
import { useProfile } from '../logic/ContextProfile'

function Profile() {
  const profile = useProfile()
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      <div className=' w-1/4'>
        <Detail title={'Name'} value={profile.name}/>
        <Detail title={'Email'} value={profile.email}/>
        <Detail title={'Phone Number'} value={profile.phoneNumber}/>
      </div>
    </div>
  )
}

export default Profile