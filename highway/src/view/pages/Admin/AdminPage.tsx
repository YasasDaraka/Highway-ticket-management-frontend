import {SideBar} from "../../common/NavBar/SideBar";
import {MainForm} from "../Form/MainForm";
import {useState} from "react";
import {NavBar} from "../../common/NavBar/NavBar";

export function AdminPage() {
    const [currentPage, setCurrentPage] = useState<string>("dashboard");
    return (
        <>
            <NavBar signIn={false} signUp={false} logOut={true} className={""}/>
            <SideBar setCurrentPage={setCurrentPage}/>
            <MainForm path={currentPage}/>
        </>
    );
}