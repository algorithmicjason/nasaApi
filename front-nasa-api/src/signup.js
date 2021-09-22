import { useState, useEffect } from "react"
import { Redirect, useHistory} from "react-router"

const Signup = () => {
    let history = useHistory();

const APP_KEY = 'hTFfl6PaUKinqZUL6bNgwH62JCGYCzbISDZBX3LI'

const [potd, updatePotd] = useState([])

useEffect(() => {
  picOfTheDay()
}, [])


const picOfTheDay = async () => {
  const req = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APP_KEY}`)
  const res = await req.json()

  updatePotd(res)
}


    return(
        <div>
            <h1>SIGN UP</h1>
            {/* {console.log(match)} */}
            <form onSubmit={() => {history.push('/Home')}}>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username'></input>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password'></input>
                <button>Sign up</button>
            </form>

            <img src={potd.hdurl} alt=''/>
            
        </div>
    )
}
export default Signup