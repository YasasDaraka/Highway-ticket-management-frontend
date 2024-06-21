import {LogButton} from "../../common/Button/LogButton";
import {TextField} from "../../input/TextField";
import {AdminPage} from "../Admin/AdminPage";
import image from "../../../images/shoe-dark.gif"
import {NavBar} from "../../common/NavBar/NavBar";
import {useState} from "react";

interface SignInPageProps {
    id:string,
    className: string
    imageActive:boolean;
}
export function SignInPage({id,className,imageActive}: SignInPageProps) {

    const [role, ] = useState("admin");
    const [isSignedIn, setIsSignedIn] = useState(false);


    const handleNavigationClick = () => {
        if (role === 'admin') {
            setIsSignedIn(true);
        } else {
            alert('You do not have permission to view this page.');
        }
    };
    if (isSignedIn) {

        return <AdminPage/>
    }
    return (
        <>
            <NavBar signIn={true} signUp={true} date={false} logOut={false}/>
            <section className={"relative "}>
            {imageActive && <img src={image} className={"absolute w-[47.5%] top-[12vh] left-[5.5vw]"} />}
            <div id={id}
                 className={className}>
                <LogButton id={"logInBackToHome"} content={"Back to Homepage"} navigate={"/"}
                           className={"mt-3 ms-5 p-0.5 font-medium text-[10px] hover:border-[#E9C54A] hover:border-[0.148px] hover: rounded"}/>
                <h1 className="mt-2 ms-10 text-black" style={{fontSize: '40px', fontWeight: '900'}}>Sign In</h1>
                <h1 className="ms-10 text-[#FFA633] font-bold text-[11px]">Sign In to Access the Portal</h1>

                <h1 id="txtLogID" className="hidden text-yellow-600 font-medium text-base">aaaa</h1>

                <div className="col-md-6 ms-8 mt-6">
                    <label className="text-black font-bold  text-[15px] ml-1.5">Username</label>
                    <TextField id="log-in-Username" type="text" placeholder={""} className="w-[26vw] ml-1.5 mt-1"/>
                    <p className="mt-1"><small className="text-red-500" id="log-in-UsernameError"></small></p>
                </div>

                <div className="col-md-6 ms-8 mt-4">
                    <label className="font-bold text-black text-[15px] ml-1.5">Password</label>
                    <TextField id="log-in-Username" type="text" placeholder={""} className="w-[26vw] ml-1.5 mt-1"/>
                    <p className="mt-1"><small className="text-red-500" id="log-in-PasswordError"></small></p>
                </div>

                <h1 className="mt-2 ms-10 font-bold text-[#FFA633] text-[12px]">Forgot Password ?</h1>
                <button id="btnSignIn" type="button" onClick={handleNavigationClick}
                        className="ms-10 mt-14 text-white rounded h-9 w-[26vw] bg-[rgba(59,59,59,0.9)] ml-[3.09vw]">Sign In
                </button>

                <h1 className="mt-4 text-yellow-600 font-medium text-sm text-center ml-2">
                    <a href="#" className="text-black text-[12px] no-underline">Haven't Account ?</a>
                </h1>
            </div>
            </section>
        </>
    );
}