import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import './Signup.css'
import Spinner from '../../components/Spinner/Spinner'

const Signup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    signup(email, password, displayName)
    setLoading(false)
  }
  const { signup, isPending, error } = useSignup()

  return (
    <>
      {loading ? (<Spinner visible={loading} />) :
        (<form onSubmit={handleSubmit} className="signup-form">
          <h2>Signup</h2>
          <label>
            <span>email: </span>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>password: </span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <label>
            <span>display name: </span>
            <input
              type="password"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>
          {!isPending && <button className="btn">Signup</button>}
          {isPending && <button className="btn" disabled>loading</button>}
          {error && <p>{error}</p>}
        </form>)
      }
    </>
  )
}
export default Signup;