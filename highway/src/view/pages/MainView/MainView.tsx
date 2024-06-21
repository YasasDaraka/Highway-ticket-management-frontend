
import {LogButton} from "../../common/Button/LogButton";
import {NavBar} from "../../common/NavBar/NavBar";
/*import road from "../../assets/road.jpg"*/

export function MainView() {
    return (

        <section className="w-full background-section">
            <NavBar signIn={true} signUp={true} className={"z-10"} logOut={false}/>

            <div className="relative top-[-10vw]">
               {/* <img
                    src={road}
                    className="w-screen h-screen"
                    alt="Shoe Dark"
                />*/}
                <h1 className="absolute top-[20vh] left-[7vw] font-fira-sans font-bold text-[60px] text-slate-400">
                    Safe Travel
                </h1>
                <h1 className="absolute top-[27vh] left-[6.8vw] font-fira-sans font-extrabold text-[80px] text-[#FFA633]">
                    Highway Explorer
                </h1>
                <p className="absolute w-[32vw] top-[43.5vh] left-[7.3vw] font-fira-sans font-bold text-[22px] text-red-50">
                    Discover the best routes, make your travels smoother and safer
                </p>
                <LogButton id="btn-log" content="Sign In" className="absolute top-[51vh] left-[7.3vw] btn" navigate="/signin" />
            </div>
        </section>
    );
}