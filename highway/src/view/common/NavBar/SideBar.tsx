import arrow from "../../images/arrow.gif";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Vehicle from '@mui/icons-material/DirectionsCarFilledTwoTone';
import Ticket from '@mui/icons-material/ConfirmationNumberTwoTone';
import Payment from '@mui/icons-material/PaidTwoTone';
import {Label} from "../../ui/label";
import React, {useState} from "react";
interface SideBarProps {
    setCurrentPage: (page: string) => void;
}
export function SideBar({ setCurrentPage }: SideBarProps) {
    const [title, setTitle] = useState("User Page")
    return (
        <>
            <div id={"user-nav-bar"} className={"flex flex-col items-center"}>

                <div id="side-bar-icon"
                     className="flex justify-center items-center shadow-md bg-white  z-10 w-[3vw] h-[2.8vw] rounded-[25%] mt-3 mb-4 ms-10"
                style={{boxShadow:"0px 1px 10px #909090"}}>
                    <img id="bar-icon" className="w-30 pr-2 z-5 scale-150" src={arrow} alt="Icon"/>
                    <Label className="text-[#f0f0f0] font-bold absolute left-[8vw] text-[1.5vw] w-[20vw]">{title}</Label>
                </div>
                <nav className="flex flex-col items-center justify-between h-[31.1vw] pt-[18vh]">
                    <a href="#" id="btnDashboard" className="relative flex items-center mb-6">
                        <AccountCircle onClick={() => {setCurrentPage("user"); setTitle("User Page")}} className="w-10 z-10 admin-icon"
                                       sx={{ fontSize: 40, cursor: 'pointer', color: 'gray', '&:hover': { color: '#e0e0e0'}}}/>
                    </a>
                    <a href="#" id="btnCustomer" className="relative flex items-center mb-6">
                        <Vehicle onClick={() => {setCurrentPage("vehicle"); setTitle("Vehicle Page")}} className="w-10 z-10 admin-icon"
                            sx={{ fontSize: 40, cursor: 'pointer' , color: 'gray', '&:hover': { color: '#e0e0e0'}}}/>
                    </a>
                    <a href="#" id="btnInventory" className="relative flex items-center mb-6">
                        <Ticket onClick={() => {setCurrentPage("ticket"); setTitle("Ticket Page")}} className="w-10 z-10 admin-icon"
                                 sx={{ fontSize: 40, cursor: 'pointer' , color: 'gray', '&:hover': { color: '#e0e0e0'}}}/>
                    </a>
                    <a href="#" id="btnSupplier" className="relative flex items-center mb-6">
                        <Payment onClick={() => {setCurrentPage("payment"); setTitle("Payment Page")}} className="w-10 z-10 admin-icon"
                                sx={{ fontSize: 40, cursor: 'pointer' , color: 'gray', '&:hover': { color: '#e0e0e0'}}}/>
                    </a>
                </nav>
            </div>
        </>
    );
}