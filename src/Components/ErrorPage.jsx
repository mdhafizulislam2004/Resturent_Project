import Navbar from "./Navbar";
import errorPage from "/Img/ErrorPage.png"
const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="mt-20">
            <img className="mx-auto" src={errorPage} alt="Error Page" />
           <div className="items-center flex flex-col space-y-8">
             <h1 className="text-2xl md:text-5xl font-semibold">Oops, page not found!</h1>
            <p className="text-[#627382] text-ms md:text-2xl">The page you are looking for is not available.</p>
           </div>
            </div>
        </div>
    );
};

export default ErrorPage;