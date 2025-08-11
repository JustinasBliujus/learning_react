import { Link } from 'react-router';

function RegisterPage() {
    return (
        <div>
            <title>Register</title>
            <span>Register</span>
            <form>
                <input placeholder='Username' type='username' required/>
                <input placeholder='Password' type='password' required/>
                <Link to="Home">
                    <button>Register</button>
                </Link>
            </form>
            <span>Login instead</span>
        </div>
    )
}   
export default RegisterPage;