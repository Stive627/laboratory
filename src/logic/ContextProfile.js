import React, { createContext, useContext, useEffect, useState } from 'react'

export const ProfileContext = createContext(undefined)

function Seed(){ 
    const [profile, setProfile] = useState(undefined)
    useEffect(()=>{
        setProfile({name:'stive', email:'fossistive627@gmail.com', phoneNumber:8288997466})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return profile
}

export function ProfileProvider({children}){
    return(
        <ProfileContext.Provider value={Seed()}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = ()=> useContext(ProfileContext)