import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero w-full my-20">
            <div>
                <div className="card ">
                    <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">

                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="your name" className="input input-bordered" />
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
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
                    <input onClick={handleGoogle} className="btn btn-primary mb-1 ml-2 mr-2" type="submit" value="Sign In with Google" />
                </div>

            </div>
        </div>
    );
};

export default SignUp;