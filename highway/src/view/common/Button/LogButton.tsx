

interface LogButtonProps {
    id: string;
    content: string;
    className: string;
    navigate:string
}
export function LogButton({id ,content ,className}: LogButtonProps) {
    return (
        <button
            type="button"
            className={className}
            id={id}
        >{content}
        </button>
    );
}