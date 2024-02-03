// import React from 'react'
import { useSelector } from "react-redux"

export default function Profile() {
  const { currentUser } = useSelector(state => state.user)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img src={currentUser.profilePicture} alt="" className="mt-2 rounded-full h-24 w-24 self-center cursor-pointer object-cover" />
        <input defaultValue={currentUser.name } type="text" id="username" placeholder="Username" 
          className="bg-slate-100 rounded-lg p-3"/>
        <input defaultValue={currentUser.email } type="email" id="email" placeholder="Email" 
          className="bg-slate-100 rounded-lg p-3"/>
        <input type="password" id="password" placeholder="Password" 
          className="capitalize bg-slate-100 rounded-lg p-3"/>
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-85">
          Update Profile
        </button>
      </form>
      <div className="flex justify-between mt-7">
        <span className="text-red-500 cursor-pointer capitalize">Delete account</span>
        <span className="text-red-500 cursor-pointer capitalize">Sign Out</span>
      </div>
    </div>
  )
}
