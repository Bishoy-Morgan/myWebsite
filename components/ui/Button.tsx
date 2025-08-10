'use client'

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import defaultArrow from '@/public/icons/long-arrow.svg'

type ButtonProps = Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<"button">,
    "onDrag" | "onDragStart" | "onDragEnd" | "onDragEnter" | "onDragExit" | "onDragLeave" | "onDragOver" | "onDrag"
> & {
    bgColor?: string;
    arrowIcon?: StaticImageData; 
};

const Button: React.FC<ButtonProps> = ({ 
    children, 
    className = "", 
    bgColor, 
    arrowIcon = defaultArrow,
    ...props 
}) => {
    return (
        <motion.button
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={`relative overflow-hidden text-white rounded-full ml-[0.5vw] px-[2vw] py-[.8vw] text-[clamp(0.8vw,1vw,1.2vw)] font-semibold flex items-center  ${className}`}
        {...props}
        >
            {/* Text content stays on top */}
            <span className="relative z-10">{children}</span>

            {/* The long black arrow */}
            <motion.span
            className="relative z-10 text-white"
            variants={{
                rest: { opacity: 0, x: '-6vw' },
                hover: { opacity: 1, x: '1vw' },
            }}
            style={{
                position: 'relative',
                overflow: 'visible',
                pointerEvents: 'none',
                width: 'clamp(1.5vw, 2vw, 2.5vw)',
                height: 'auto',         
                display: 'inline-block',
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <Image 
                    src={arrowIcon}
                    alt="Arrow"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                />
            </motion.span>

            {/* The red circle / fill */}
            <motion.div
                variants={{
                    rest: {
                        width: '3vw',
                        height: '3vw',
                        borderRadius: "50%",
                        backgroundColor: bgColor,
                        left: 0,
                        top: "50%",
                        translateY: "-50%",
                        position: "absolute",
                        transition: { duration: 0.4, ease: "easeInOut" },
                    },
                    hover: {
                        width: "100%",
                        height: "100%",
                        borderRadius: 0,
                        right: 0,
                        top: 0,
                        translateY: "0%",
                        backgroundColor: bgColor,
                        position: "absolute",
                        transition: { duration: 0.4, ease: "easeInOut" },
                    },
                }}
                className="z-0"
            />
        </motion.button>
    );
};

export default Button;
