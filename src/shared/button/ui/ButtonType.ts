type ButtonType = {
    text: string | React.ReactNode,
    bgColor: string,
    color: string,
    type?: "button" | "submit" | "reset";
    onClick?: () => void,
    border?: string,
}

export default ButtonType;