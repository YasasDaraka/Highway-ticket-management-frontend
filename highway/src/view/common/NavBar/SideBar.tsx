import arrow from "../../images/arrow.gif";
import dashboard from "../../images/dashboard.gif";
import customer from "../../images/customer.gif";
import inventory from "../../images/inventory.gif";
import supply from "../../images/supply.gif";
interface SideBarProps {
    setCurrentPage: (page: string) => void;
}
export function SideBar({ setCurrentPage }: SideBarProps) {
    return (
        <>
            <div id={"user-nav-bar"} className={"flex flex-col items-center"}>

                <div id="side-bar-icon"
                     className="flex justify-center items-center shadow-md bg-white  z-10 w-[3vw] h-[2.8vw] rounded-[25%] mt-3 mb-4 ms-10"
                style={{boxShadow:"0px 1px 10px #909090"}}>
                    <img id="bar-icon" className="w-30 pr-2 z-5 scale-150" src={arrow} alt="Icon"/>
                </div>
                <nav className="flex flex-col items-center justify-between h-[31.1vw] pt-[18vh]">
                    <a href="#" id="btnDashboard" className="relative flex items-center mb-6">
                        <img onClick={() => setCurrentPage("user")} className="w-8 lg:w-9 z-10 admin-icon" src={dashboard} alt="Dashboard"/>
                    </a>
                    <a href="#" id="btnCustomer" className="relative flex items-center mb-6">
                        <img onClick={() => setCurrentPage("vehicle")} className="w-10 z-10 admin-icon" src={customer} alt="Customer"/>
                    </a>
                    <a href="#" id="btnInventory" className="relative flex items-center mb-6">
                        <img onClick={() => setCurrentPage("ticket")} className="w-10 z-10 admin-icon" src={inventory} alt="Inventory"/>
                    </a>
                    <a href="#" id="btnSupplier" className="relative flex items-center mb-6">
                        <img onClick={() => setCurrentPage("payment")} className="w-11 z-10 admin-icon" src={supply} alt="Supplier"/>
                    </a>
                </nav>
            </div>
        </>
    );
}