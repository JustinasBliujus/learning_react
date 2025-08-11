import { Link } from 'react-router';

function LoginPage() {
    return (
        <div>
            <title>Login</title>
            <span>Login</span>
            <form>
                <input placeholder='Username' type='username' required/>
                <input placeholder='Password' type='password' required/>
                <Link to="Home">
                    <button>Register</button>
                </Link>
            </form>
            <span>Register instead</span>
        </div>
    )
}   
export default LoginPage;