import React, {Link} from 'react-router-dom';


const Nav = () => {
    return(
        <nav>
            <ul>
                <Link to={'/signup'}><li>Sign Up</li> </Link>
                <Link to={'/login'}><li>Login</li> </Link>
            </ul>
        </nav>
    )
}

export default Nav