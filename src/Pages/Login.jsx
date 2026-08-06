import { Link } from "react-router";
import Navbar from "../Components/Navbar";
import { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {

    const { signIn } = use(AuthContext)

    const submitHendaler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkbox = e.target.checkbox.checked;
        console.log("Submitted", email, password, checkbox);

        if (!checkbox) {
            toast.error("Please Select Checkbox")
            return
        }

        signIn(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success("Account Login Success")
                e.target.reset()
            })
            .catch(() => {
                // console.log(error.message);
                toast.error("Entar a Vlaid Email Or Password")
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-4">
                <div className="card mt-32 bg-base-100 mx-auto border border-gray-500 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className="text-center">
                            <h1 className="font-extrabold text-2xl mb-5">Sign in to your account</h1>
                        </div>
                        <form onSubmit={submitHendaler} className="fieldset space-y-2 text-xl">

                            <input type="email" className="input focus:outline-none focus:border-green-500" required name="email" placeholder="Email" />

                            <input type="password" required className="input focus:outline-none focus:border-green-500" name="password" placeholder="Password" />
                            <div className="items-center justify-between flex mt-2">
                                <label className="label text-sm">
                                    <input type="checkbox" name="checkbox" className="checkbox" />
                                    Remember me
                                </label>
                                <a className="link text-sm text-red-600 link-hover">Forgot password?</a>
                            </div>
                            <button className="btn btn-neutral mb-5 mt-4">Login</button>
                        </form>
                        <div className="flex flex-col mb-5 space-y-7 items-center">
                             <span className="">Or continue with</span>
                            <button className="btn bg-base-300 w-full">Login With Google</button>
                        </div>
                        <button className="text-xs text-red-500">Dont Have Any Account? <Link to="/register" className="hover:underline text-blue-600">Register</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;