import {SideBar} from "../../common/NavBar/SideBar";
import {MainForm} from "../Form/MainForm";
import {useState} from "react";
import {NavBar} from "../../common/NavBar/NavBar";

interface AdminPageProps {
    setPage?: (page: string) => void;
}
export function AdminPage({setPage}: AdminPageProps) {
    const [currentPage, setCurrentPage] = useState<string>("user");
    return (
        <>
            <NavBar signIn={false} signUp={false} logOut={true} className={""} setPage={setPage} color={false}/>
            <SideBar setCurrentPage={setCurrentPage}/>
            <MainForm path={currentPage}/>
        </>
    );
}