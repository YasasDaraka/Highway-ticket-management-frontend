import React from "react";

interface inputProps{
    id: string;
    type:string,
    placeholder:string,
    className:string,
}
export function TextField({id,type,placeholder,className}: inputProps) {
    return (
        <>
            <input type={type} className={`text-[1.3vw] block px-3 mb-2 h-9 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500 ${className}`} id={id} placeholder={placeholder}/>
        </>
    );
}