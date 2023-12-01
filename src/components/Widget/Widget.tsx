import About from "@/pages/about";
import Link from "next/link"

type WidgetProps = {
    icon: JSX.Element,
    title?: any,
    className?: string
}


export default function Widget(props: WidgetProps){
    return (
        <div 
        className={`flex 
        flex-col justify-center 
        items-center 
        rounded-md p-1 
        border-zinc-700 
        border-2 
        w-24
        h-24
         ${props.className ?? ""}`}>
            {props.icon}
            <h1 className={`text-center text-zinc-400`}>{props.title}</h1>
            
        </div>
    );
}