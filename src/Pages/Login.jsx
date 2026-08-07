import { Link, useLocation, useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Footer from "../Components/Footer";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";



const Login = () => {

    const[showPassword,setShowPassword]=useState(false)

    const { signIn,resetPassword,googleLogin } = useContext(AuthContext)
    const emailRef=useRef()

    const location=useLocation()
    const navigate=useNavigate()


    const seePassword=()=>{
        setShowPassword(!showPassword)
    }

    const submitHendaler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success("Account Login Success")
                e.target.reset()
                navigate(location?.state || "/")
            })
            .catch(() => {
                toast.error("Enter a valid email or password")
            })
    }

       const forgetPassword=()=>{
        const email=emailRef.current.value;
        resetPassword(email)
        .then(()=>{
            toast.success("Chack Your Email")
        })
        .catch(()=>{
            // console.log(error.message);
            toast.error("Entar Your Email")
        })
        
    }

    const GoogleLogin=()=>{
        googleLogin()
        .then(()=>{
            toast.success("Google Login Success")
            navigate(location?.state||"/")
        })
        .catch(()=>{
            toast.error("Login Faield")
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-4">
                <div className="card mt-32 mb-7 bg-base-100 mx-auto border border-gray-300 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="font-extrabold text-2xl mb-5">Sign in to your account</h1>
                        </div>
                        <form onSubmit={submitHendaler} className="fieldset space-y-2 text-xl">

                            <input type="email" className="input focus:outline-none focus:border-green-500" ref={emailRef} required name="email" placeholder="Email" />

                            <div className="relative">
                                <input type={showPassword?"text":"password"} required className="input focus:outline-none focus:border-green-500" name="password" placeholder="Password" />
                                <button onClick={seePassword} type="button" className="absolute right-6 top-3 text-xs" >{showPassword?<FaEyeSlash size={20}/>:<IoEyeSharp size={20} />}</button>
                            </div>
                            <div className="items-center justify-between flex mt-2">
                                <label className="label text-sm">
                                    <input type="checkbox" name="checkbox" className="checkbox" />
                                    Remember me
                                </label>
                                <a onClick={forgetPassword} className="link text-sm text-red-600 link-hover">Forgot password?</a>
                            </div>
                            <button className="btn bg-green-500 border-0 btn-neutral mb-5 mt-4">Login</button>
                        </form>
                        <div className="flex flex-col mb-5 space-y-7 items-center">
                             <span className="text-gray-400">Or continue with</span>
                            <button onClick={GoogleLogin} className="btn bg-base-300 w-full"><FcGoogle size={20}/>Login With Google</button>
                        </div>
                        <button className="text-xs text-red-500">Dont Have Any Account? <Link to="/register" state={location.state || "/"} className="hover:underline text-blue-600">Register</Link></button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;