import ContextProvider from "@/layers/data/context/context";
import { useState, useContext } from "react";

export default function Contador(){
    const {value, incrementar, decrementar} = useContext(ContextProvider);
    
    return (
        <div className="flex flex-col gap-4 justify-center items-center">
            <h1 className="text-7xl font-extrabold">
               {value}
            </h1>
            <div className="flex gap-4">
            <button onClick={incrementar} className="bg-zinc-800 p-4 rounded-lg text-5xl">
                +1
 
            </button>
            <button onClick={decrementar} className="bg-zinc-800 p-4 rounded-lg text-5xl">
                -1
 
            </button>
 
            </div>
        </div>
    )
}