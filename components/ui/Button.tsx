import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, className = "", ...props }) => (
    <button
        className={`bg-red text-sm text-white rounded-full ml-2 px-10 py-4 transition-colors hover:bg-darkRed ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;