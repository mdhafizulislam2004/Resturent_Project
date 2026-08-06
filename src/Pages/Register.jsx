import { Link } from "react-router";
import Navbar from "../Components/Navbar";
import { use } from "react";
// import { IoIosCloudUpload } from "react-icons/io";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import Footer from "../Components/Footer";

const Register = () => {

    const { creatUser, UpdateUser } = use(AuthContext)
    // const[fileupload,setFileUpload]=useState("")


    //  const imageUpload=()=>{
    //         if(!fileupload){
    //             setFileUpload(fileupload)
    //         }
    //     }


    const submitHendaler = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const imgUrl = e.target.imgUrl.value;
        const checkbox = e.target.checkbox.checked;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!checkbox) {
            toast.error("Please Select checkbox")
            return
        }
        
        creatUser(email, password)
            .then(result => {
                console.log(result.user);

                UpdateUser({
                    displayName: name, photoURL: imgUrl
                })
                    .then(() => {
                        toast.success("Profile Update")
                    })

                e.target.reset()

            })
            .catch(error => {
                console.log(error.message);
            })

    }

    return (
        <div>
            <Navbar />
            <div className="mx-4">
                <div className="card mb-7 mt-32 bg-base-100 mx-auto w-full max-w-sm border border-gray-400 shrink-0 shadow-2xl">
                    <div className="card-body mx-4">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold">Create a new account</h1>
                            <p>Join our community today</p>
                        </div>
                        <form onSubmit={submitHendaler} className="fieldset text-xl  space-y-2">

                            {/* {
                        fileupload?<label className="bg-amber-100 hover:cursor-pointer border py-2 border-dashed flex flex-col items-center border-gray-300">File Selected</label>: <label className="bg-amber-100 hover:cursor-pointer border py-2 border-dashed flex flex-col items-center border-gray-300">
                            <IoIosCloudUpload size={24}/>
                            <h1>Upload Image</h1>
                            <p className="text-gray-500 text-sm">{"photo size<"} <span className="text-gray-600 font-bold">2mb</span></p>
                            <p className="text-sm">Format: <span className="font-semibold text-xs"> JPG,PNG</span> </p>
                            <input
                                type="file"
                                name="image"
                                className="hidden"
                                onClick={imageUpload}
                                required
                            />
                        </label>
                       } */}
                            <input type="text" className="input focus:border-red-500 outline-none " required name="name" placeholder="Your Name" />
                            <input type="text" className="input focus:border-red-500 outline-none " required name="imgUrl" placeholder="Image Url" />
                            <input type="email" required className="input outline-none focus:border-red-500 " name="email" placeholder="Email" />
                            <input type="password" required className="input outline-none focus:border-red-500" name="password" placeholder="Password" />
                            <div className="flex mt-2 items-center gap-2">
                                <label className="label text-sm">
                                    <input type="checkbox" name="checkbox" className="checkbox text-red-500" />
                                </label>
                                <p className="text-sm">I agree to the<span className="text-green-500 ml-1 text-sm">Term & Conditions</span></p>
                            </div>
                            <button className="btn btn-neutral bg-green-500 border-0 text-white mt-2">Register</button>
                        </form>
                        <button className="text-xs text-red-500">Have An Account? <Link to="/login" className="hover:underline text-blue-400">Login</Link></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;

