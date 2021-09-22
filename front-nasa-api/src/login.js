const Login = ({ match }) => {
    
    return(
        <div>
            <h1>LOGIN</h1>
            {console.log(match)}

            <form>
                <label for='username'>Username</label>
                <input type='text' name='username'></input>
                <label for='password'>Password</label>
                <input type='password' name='password'></input>
                <button>Login</button>
            </form>
            
        </div>
    )
}

export default Login