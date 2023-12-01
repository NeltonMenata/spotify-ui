import Image from "next/image";
import Link from "next/link";

export default function Head() {
    return (
        <div className={`flex justify-between items-center px-4 py-6`}>
            <h1
                className="relative rounded-full w-16 h-16 border-2 border-zinc-600 bg-zinc-900 overflow-hidden"
            ><Image
            className="absolute"
                src="/logo.jpg"
                
                fill
                
                alt="Logo"
            ></Image></h1>
            <div className="flex flex-col items-center md:flex-row gap-4 font-black text-lg">
                <Link href="/"><h1>Inicio</h1></Link>
                
                <h1>Vantagens</h1>
                <h1>Depoimentos</h1>
                <Link href="/login">
                <h1 className="">
                    <button className="py-4 px-6 bg-gradient-to-b bg-blue-700 font-black rounded-md">
                        Login
                    </button>
                </h1>
                </Link>
                
            </div>
        </div>
    );
}