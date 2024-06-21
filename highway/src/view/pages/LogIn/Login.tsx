import {SignInPage} from "./SignInPage";

export function Login() {
    return (
        <section id="log-in-page">
            <SignInPage imageActive={true} id={"log-in-container"} className={"w-[32vw] h-[35vw] bg-white absolute top-[6vh] right-0 left-1/2 m-auto"}/>
        </section>
    );
}