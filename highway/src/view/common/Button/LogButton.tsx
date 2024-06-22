import {MainView} from "../../pages/MainView/MainView";

interface LogButtonProps {
    id: string;
    content: string;
    className: string;
    navigate:string
    onClick?: () => void;
    setPage?: (page: string) => void;
}
export function LogButton({id ,content ,className,onClick,setPage}: LogButtonProps) {
    const handleClick = () => {
        if (onClick){
            onClick();
        }
        if (id ==="userLogOut"){
            if (setPage){
                setPage("view")
            }
        }
    };
    return (
        <button
            onClick={handleClick}
            type="button"
            className={className}
            id={id}

        >{content}
        </button>
    );
}