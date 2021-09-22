import { useState, useEffect} from "react"
import { useHistory} from "react-router"

const Login = ({updateUserState}) => {

    let history = useHistory();

    const APP_KEY = 'hTFfl6PaUKinqZUL6bNgwH62JCGYCzbISDZBX3LI'

    const [potd, updatePotd] = useState([])
    const [userInput, updateUserInput] = useState('')

    useEffect(() => {
        picOfTheDay()
    }, [])


    const picOfTheDay = async () => {
        const req = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APP_KEY}`)
        const res = await req.json()

        updatePotd(res)
        console.log(potd)
    }
    const setUsername = (e) => {
        updateUserInput(e.target.value)
    }
    

    return(
        <div>
            <h1>LOGIN</h1>

            <form onSubmit={() => {history.push('/Home')}}>
                <label htmlFor='username'>Username</label>
                <input value={userInput} onChange={setUsername} type='text' name='username'></input>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password'></input>
                <button onClick={updateUserState(userInput)}>Login</button>
            </form>
            <img src={potd.hdurl} alt=''/>
        </div>
    )
}

export default Login