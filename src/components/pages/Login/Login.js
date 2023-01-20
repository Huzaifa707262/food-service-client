import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero w-full my-20">
            <div>
                <div className="card ">
                    <h1 className="text-5xl font-bold text-center">Sign In</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" required name='email' placeholder="email" className="input input-bordered" />

                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                        <input className="btn btn-primary" type="submit" value="SignUp" />
                    </form>
                    <p className='text-center'>Create an account? <Link className='text-orange-600 font-bold' to='/signup'>SignUp</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;