
export default function OAuth() {
    const handleGoogleSignIn = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/auth/google', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            })
            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <button 
        type="button" 
        onClick={handleGoogleSignIn}
        className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95">
            Continue with google
    </button>
  )
}
