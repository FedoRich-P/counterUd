type ButtonProps = {
    title: string,
    onClick: () => void,
    className: string,
    disabled?: boolean,
};
export const Button = ({title,onClick, disabled, className}: ButtonProps) => {

    return (
        <button
            onClick={onClick}
            className={className}
            disabled={disabled}
        >
            {title}
        </button>
    );
};