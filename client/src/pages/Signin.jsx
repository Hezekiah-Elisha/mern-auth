import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Signin() {

  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      console.log(data)

      setLoading(false)
      if (data.success === false) {
        setError(true)
        return
      }
      setError(false)
      navigate('/')
      
    } catch (error) {
      setLoading(false)
      setError(true)
    }


  }

  // console.log(formData)
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="email" placeholder="email" id="email" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
        <input type="password" placeholder="Password" id="password" className="bg-slate-100 p-3 rounded-lg" onChange={handleChange} />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-55">
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don&apos;t have an account?</p>
        <Link to="/sign-up" className="text-slate-700 font-semibold">
          <span className='text-blue-500'>
            Sign Up
          </span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{ error && "Something went wrong!" }</p>
    </div>
  )
}

