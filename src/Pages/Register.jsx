import Navbar from "../Components/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar/>
           <div className="card mt-32 bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                {/* <button className="text-xl">Dont Have Any Account? <Link to="/register" className="hover:underline hover:to-red-500">Register</Link></button> */}
                </div>
            </div>
        </div>
    );
};

export default Register;