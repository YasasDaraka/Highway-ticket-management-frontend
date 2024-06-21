import {LogButton} from "../Button/LogButton";

interface activeProps{
    signIn: boolean,
    signUp: boolean,
    className: string,
    logOut: boolean,
}
export function NavBar({signIn, signUp, logOut,className}: activeProps) {

    return (
        <header id="header" className={`${className} transparent-background`} style={{ boxShadow: '0px 1px 10px #94a3b8' }}>
            <nav className="flex items-center h-[60px] transparent-background">
                <div className="ml-auto mr-4 transparent-background">
                    {signIn && <LogButton id="signIn" content="Sign In" className="" navigate="/signin"/>}
                    {signUp && <LogButton id="signUp" content="Sign Up" className="" navigate="/signup"/>}
                    {logOut && <LogButton id="userLogOut" content="Log Out" className="" navigate="/"/>}
                </div>
            </nav>
        </header>
    );

}