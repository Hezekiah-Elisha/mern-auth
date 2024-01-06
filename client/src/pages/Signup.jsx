// import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {

  const [formData, setFormData] = useState({})
  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/auth/signup', formData)
    const data = await res.json()
    // todo here>> set token to local storage

  }

  console.log(formData)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" placeholder="Username" id="username" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
        <input type="email" placeholder="email" id="email" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
        <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">Sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to="/sign-in" className="text-slate-700 font-semibold">
          <span className='text-blue-500'>Sign In</span>
        </Link>
      </div>
    </div>
  )
}
