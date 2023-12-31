import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin";
import { loadCaptchaEnginge, LoadCanvasTemplate } from 'react-simple-captcha';
import { useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase/Firebasa.config";
import Swal from "sweetalert2";
import { AuthContex } from "../../Provider/AuthProvider";
import { useContext } from "react";

const auth = getAuth(app);

const LogIn = () => {
    const { signInUser } = useContext(AuthContex);




    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Wrong Password',
                    showConfirmButton: false,
                    timer: 800
                })
            })
        form.reset();
    }


    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            {/* TODO: input handle onBlur={handleValidateCaptcha} */}
                            <input type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                        </div>
                        {/* TODO: make button disabled for captcha */}
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                        <div>
                            <p><small className='font-bold'>New here? Register here..<Link className=' text-xs badge badge-outline' to='/signup'>Sign up</Link></small></p>
                        </div>
                        <div className='w-full text-center'>
                            <SocialLogin></SocialLogin>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default LogIn;