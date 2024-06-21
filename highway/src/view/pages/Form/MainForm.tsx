import {CommonForm} from "./CommonForm";
interface PageProps {
    path:string
}
export function MainForm({path}: PageProps) {
    return (
        <>
            <div className="h-[90.3vh] z-[5]" id="main">
                <CommonForm path={path}/>
            </div>
        </>
    );
}