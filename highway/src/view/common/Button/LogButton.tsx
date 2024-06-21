

interface LogButtonProps {
    id: string;
    content: string;
    className: string;
    navigate:string
    onClick: () => void;
}
export function LogButton({id ,content ,className,onClick}: LogButtonProps) {
    return (
        <button
            onClick={onClick}
            type="button"
            className={className}
            id={id}
        >{content}
        </button>
    );
}