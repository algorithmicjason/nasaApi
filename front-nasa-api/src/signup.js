const Signup = ({ match }) => {
    return(
        <div>
            <h1>SIGN UP</h1>
            {console.log(match)}
            <form>
                <label for='username'>Username</label>
                <input type='text' name='username'></input>
                <label for='password'>Password</label>
                <input type='password' name='password'></input>
                <button>Sign up</button>
            </form>
            
        </div>
    )
}
export default Signup