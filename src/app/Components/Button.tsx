import React from 'react'
import Image from "next/image";

const Button = ({
                    label,
                    iconURL,
                    backgroundColor,
                    textColor,
                    borderColor,
                fullWidth}
                :{label:string, iconURL?: string ,backgroundColor?: string| undefined, textColor?: string| undefined, borderColor?: string| undefined ,fullWidth?: boolean}) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7
        py-4 font-monserrat text-lg leading-none border-2 cursor-pointer
        transition ease-in-out delay-150 bg-coral-red hover:-translate-y-1 hover:scale-110 
        duration-300 
         ${
            backgroundColor ?
                `${textColor} ${borderColor} ${backgroundColor} hover:bg-gray-400` :
                "bg-coral-red text-white border-coral-red hover:bg-red-400"}
                rounded-full ${fullWidth && "w-full"} `}>
            {label}
            {iconURL && (<Image
            src={iconURL}
            alt="Arrow"
            className="ml-2 rounded-full
            w-5 h-5"/>
            )}
        </button>
    )
}
export default Button
