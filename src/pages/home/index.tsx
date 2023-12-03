import Image from "next/image";
import { IconBook, IconVolume, IconEaseOut, IconMenu2, IconMicrophone2, IconArrowsShuffle, IconPlayerPlayFilled, IconMaximize, IconPlaylist, IconPlaylistAdd, IconPlayerSkipBackFilled, IconPlayerSkipForwardFilled, IconRepeatOff, IconChevronLeft, IconUser, IconChevronRight, IconHeart, IconHome, IconPlus, IconSearch } from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react"
import { Slider, TextField, Container, CircularProgress, Button } from "@mui/material"
import { grey } from "@mui/material/colors";

export default function Home() {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);

    function changeVisibleMenu() {
        setToggleMenu((value) => !value)
    }
    return (
        <div className="flex flex-col text-zinc-200 h-screen bg-zinc-950 justify-between p-2 gap-2 rounded-lg overflow-auto pb-4">
            <div className="flex flex-1 gap-2 overflow-auto">
                <aside className=" md:w-48 lg:w-72 flex flex-col gap-2 rounded-lg w-0 px-0 h-full md:visible invisible">
                    <nav className="flex flex-col space-y-4 rounded-lg p-2 bg-zinc-900">
                        <a href="" className="flex items-center gap-2 text-lg font-semibold text-zinc-100">
                            <IconHome size={35}></IconHome>
                            Home
                        </a>
                        <a href="" className="flex items-center gap-2 text-lg font-semibold text-zinc-100">
                            <IconSearch size={35}></IconSearch>
                            Search
                        </a>
                        <a href="" className="flex items-center gap-2 text-lg font-semibold text-zinc-100">
                            <IconBook size={35}></IconBook>
                            Library
                        </a>
                    </nav>
                    <div className="flex flex-col space-y-3 bg-zinc-900 rounded-lg p-2">
                        <div className="flex items-center space-x-2">
                            <button className="rounded bg-zinc-500 p-1">
                                <IconPlus></IconPlus>

                            </button>
                            <span className="text-lg font-semibold text-zinc-100">Create PlayList</span>
                        </div>

                        <div className="flex items-center space-x-2">
                            <button className="rounded bg-gradient-to-tr from-purple-500 to-zinc-500 p-1">
                                <IconHeart fill="white"></IconHeart>

                            </button>
                            <span className="text-lg font-semibold text-zinc-100">Liked Songs</span>
                        </div>

                    </div>
                    <nav className=" bg-zinc-900 gap-1 flex flex-col p-2 rounded-lg flex-grow overflow-auto">
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Anselmo Ralph
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Dji Tafinha
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            C4 Pedro
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Ary
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Nerú Americano
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Scró que Cuia
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Paulelson
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            TRX
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            CBG
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Mobbers
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Lebasi
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            T-Rex
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Prodigio
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            NGA
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Plutonio
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Deezy
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Monsta
                        </a>
                        <a href="" className="text-zinc-400 hover:text-zinc-200">
                            Força Suprema
                        </a>
                    </nav>
                </aside>
                <main className="flex-1 bg-gradient-to-t rounded-lg from-zinc-900 via-zinc-950 to-zinc-900 p-2 flex flex-col gap-4 h-full overflow-auto">
                    {toggleMenu ? (<div className="flex flex-col bg-zinc-950 text-zinc-200 gap-2 p-2 w-[60%] absolute z-10 rounded-lg">
                        <button onClick={changeVisibleMenu} className="bg-zinc-200 text-zinc-950 text-2xl font-black rounded-full m-2 py-1 px-3 self-end">X</button>
                        <nav className="flex flex-col space-y-4 rounded-lg p-2 bg-zinc-900">
                            <a href="" className="flex items-center gap-2 text-lg font-semibold text-zinc-100">
                                <IconHome size={35}></IconHome>
                                Home
                            </a>
                            <a href="" className="flex items-center gap-2 text-lg font-semibold text-zinc-100">
                                <IconSearch size={35}></IconSearch>
                                Search
                            </a>
                            <a href="" className="flex items-center gap-2 text-lg font-semibold text-zinc-100">
                                <IconBook size={35}></IconBook>
                                Library
                            </a>
                        </nav>
                        <div className="flex flex-col space-y-3 bg-zinc-900 rounded-lg p-2">
                            <div className="flex items-center space-x-2">
                                <button className="rounded bg-zinc-500 p-1">
                                    <IconPlus></IconPlus>

                                </button>
                                <span className="text-lg font-semibold text-zinc-100">Create PlayList</span>
                            </div>

                            <div className="flex items-center space-x-2">
                                <button className="rounded bg-gradient-to-tr from-purple-500 to-zinc-500 p-1">
                                    <IconHeart fill="white"></IconHeart>

                                </button>
                                <span className="text-lg font-semibold text-zinc-100">Liked Songs</span>
                            </div>

                        </div>
                    </div>) : (<></>)}
                    <div className="md:invisible visible">
                        <IconMenu2 onClick={changeVisibleMenu}></IconMenu2>

                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-3">

                            <a href="/">                  <div className="bg-black/40 p-1 rounded-full flex justify-center items-center"><IconChevronLeft /></div></a>
                            <a href="/">        <div className="bg-black/40 p-1 rounded-full flex justify-center items-center"><IconChevronRight /></div></a>

                        </div>
                        <div className="flex items-center p-1 gap-1 rounded-full bg-black">
                            <div className="p-1 bg-zinc-600 rounded-full"><IconUser></IconUser></div>

                            <span className="text-lg font-bold pr-1">Nelton Menata</span>

                        </div>
                    </div>
                    <span className="text-3xl font-semibold">
                        Musicas tocadas recentemente
                    </span>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="w-full relative items-center overflow-hidden flex gap-2 h-24 rounded-md bg-zinc-700/40 group hover:bg-zinc-700">
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%]" />
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%] absolute">
                                <Image src="/nga-quando-o-kumbu-cair.jfif" alt="Nga - Quando o Kumbu cair" fill></Image>
                            </div>
                            <span className="lg:text-lg font-bold flex-grow text-sm md:text-base">NGA - Quando aquele Kumbu cair</span>
                            <div className="p-3 mr-2 bg-green-700 rounded-full invisible group-hover:visible">
                                <IconPlayerPlayFilled />
                            </div>

                        </div>

                        <div className="w-full relative items-center overflow-hidden flex gap-2 h-24 rounded-md bg-zinc-700/40 group hover:bg-zinc-700">
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%]"></div>
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%] absolute"><Image src="/t-rex-e-assim.jpg" alt="T-Rex - É assim" objectFit="cover" fill></Image></div>

                            <span className="lg:text-lg font-bold flex-grow text-sm md:text-base">T-Rex - É assim</span>
                            <div className="p-3 mr-2 bg-green-700 rounded-full invisible group-hover:visible">
                                <IconPlayerPlayFilled />
                            </div>

                        </div>

                        <div className="w-full relative items-center overflow-hidden flex gap-2 h-24 rounded-md bg-zinc-700/40 group hover:bg-zinc-700">
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%]" />
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%] absolute">
                                <Image src={`/mobbers-sem-pressa.jpg`} fill alt="Mobbers - Sem Pressa"></Image>
                            </div>

                            <span className="lg:text-lg font-bold flex-grow text-sm md:text-base">Mobbers - Sem pressa</span>
                            <div className="p-3 mr-2 bg-green-700 rounded-full invisible group-hover:visible">
                                <IconPlayerPlayFilled />
                            </div>

                        </div>

                        <div className="w-full relative items-center overflow-hidden flex gap-2 h-24 rounded-md bg-zinc-700/40 group hover:bg-zinc-700">
                            <div className="h-full min-w-[100px] w-[25%]" />
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%] absolute">
                                <Image src={`/prodigio-castelo-de-areia.jfif`} alt="Prodigio - Castelo de Areia" fill></Image>
                            </div>
                            <span className="lg:text-lg font-bold flex-grow text-sm md:text-base">Prodigio - Castelo de Areia</span>
                            <div className="p-3 mr-2 bg-green-700 rounded-full invisible group-hover:visible">
                                <IconPlayerPlayFilled />
                            </div>
                        </div>

                        <div className="w-full relative items-center overflow-hidden flex gap-2 h-24 rounded-md bg-zinc-700/40 group hover:bg-zinc-700">
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%]" />
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%] absolute">

                                <Image src="/paulelson-to-fumado.jpg" alt="Paulelson - To Fumado" fill></Image>
                            </div>

                            <span className="lg:text-lg font-bold flex-grow text-sm md:text-base">Paulelson - Tô fumado</span>
                            <div className="p-3 mr-2 bg-green-700 rounded-full invisible group-hover:visible">
                                <IconPlayerPlayFilled />
                            </div>

                        </div>

                        <div className="w-full relative items-center overflow-hidden flex gap-2 h-24 rounded-md bg-zinc-700/40 group hover:bg-zinc-700">
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%]" />
                            <div className="bg-zinc-600 h-full min-w-[100px] w-[25%] absolute">

                                <Image src={`/trx-topo-do-game.jpg`} alt="TRX - Topo do Game" fill></Image>
                            </div>
                            <span className="lg:text-lg font-bold flex-grow text-sm md:text-base">TRX - Topo do Game</span>
                            <div className="p-3 mr-2 bg-green-700 rounded-full invisible group-hover:visible">
                                <IconPlayerPlayFilled />
                            </div>

                        </div>
                    </div>
                    <span className="text-3xl font-semibold">
                        Artistas ouvidos com frequência
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-2">
                        <div className="p-2 relative bg-zinc-800 flex flex-col justify-between rounded-md min-w-[180px] max-w-2xl h-64">
                            <div className="w-full h-full" />
                            <div className="absolute h-[70%] w-[92%] p-2 ">
                                <Image src={`/matias-damasio-magui.jpeg`} className="rounded-md" alt="Matias Damasio" fill></Image>
                            </div>
                            <span className="text-lg font-bold">
                                Matias Damasio -
                                Magui
                            </span>
                        </div>


                        <div className="p-2 relative bg-zinc-800 flex flex-col justify-between rounded-md min-w-[180px] max-w-2xl h-64">
                            <div className="w-full h-full" />
                            <div className="absolute h-[70%] w-[92%] p-2 ">
                                <Image src={`/ary-agora-que-eu-te-encontrei.jfif`} className="rounded-md" alt="Ary - Agora que eu te encontrei" fill></Image>
                            </div>
                            <span className="text-lg font-bold">
                                Ary - Agora que Eu te encontrei
                            </span>
                        </div>

                        <div className="p-2 relative bg-zinc-800 flex flex-col justify-between rounded-md min-w-[180px] max-w-2xl h-64">
                            <div className="w-full h-full" />
                            <div className="absolute h-[70%] w-[92%] p-2 ">
                                <Image src={`/bass-chorar-de-rir.jfif`} className="rounded-md" alt="Bass - Chorar de Rir" fill></Image>
                            </div>
                            <span className="text-lg font-bold">
                                Bass - Chorar de rir
                            </span>
                        </div>

                        <div className="p-2 relative bg-zinc-800 flex flex-col justify-between rounded-md min-w-[180px] max-w-2xl h-64">
                            <div className="w-full h-full" />
                            <div className="absolute h-[70%] w-[92%] p-2 ">
                                <Image src={`/matias-damasio-voltei-com-ela.jfif`} className="rounded-md" alt="Matias Damasio" fill></Image>
                            </div>
                            <span className="text-lg font-bold">
                                Matias Damasio -
                                Voltei com ela
                            </span>
                        </div>

                        <div className="p-2 relative bg-zinc-800 flex flex-col justify-between rounded-md min-w-[180px] max-w-2xl h-64">
                            <div className="w-full h-full" />
                            <div className="absolute h-[70%] w-[92%] p-2 ">
                                <Image src={`/gerilson-insrael-quarentena.jpg`} className="rounded-md" alt="Gerilson Insrael - Quarentena" fill></Image>
                            </div>
                            <span className="text-lg font-bold">
                                Gerilson Insrael - Quarentena
                            </span>
                        </div>

                        <div className="p-2 relative bg-zinc-800 flex flex-col justify-between rounded-md min-w-[180px] max-w-2xl h-64">
                            <div className="w-full h-full" />
                            <div className="absolute h-[70%] w-[92%] p-2 ">
                                <Image src={`/dababy-rockstar.jpg`} className="rounded-md" alt="Dababy - Rockstar" fill></Image>
                            </div>
                            <span className="text-lg font-bold">
                                Dababy - Rockstar
                            </span>
                        </div>

                        <div className="p-2 relative bg-zinc-800 flex flex-col justify-between rounded-md min-w-[180px] max-w-2xl h-64">
                            <div className="w-full h-full" />
                            <div className="absolute h-[70%] w-[92%] p-2 ">
                                <Image src={`/drake-god-s-plan.webp`} className="rounded-md" alt="Drake - Gods Plan" fill></Image>
                            </div>
                            <span className="text-lg font-bold">
                                Drake - God´s Plan
                            </span>
                        </div>
                        <div className="p-2 relative bg-zinc-800 flex flex-col justify-between rounded-md min-w-[180px] max-w-2xl h-64">
                            <div className="w-full h-full" />
                            <div className="absolute h-[70%] w-[92%] p-2 ">
                                <Image src={`/perola-sincera.jfif`} className="rounded-md" alt="Perola - Sincera" fill></Image>
                            </div>
                            <span className="text-lg font-bold">
                                Perola - Sincera
                            </span>
                        </div>
                        <div className="p-2 relative bg-zinc-800 flex flex-col justify-between rounded-md min-w-[180px] max-w-2xl h-64">
                            <div className="w-full h-full" />
                            <div className="absolute h-[70%] w-[92%] p-2 ">
                                <Image src={`/c4-pedro-cofres-do-ceu.jfif`} className="rounded-md" alt="C4 Pedro - Cofres do Ceu" fill></Image>
                            </div>
                            <span className="text-lg font-bold">
                                C4 Pedro - Cofres do Céu
                            </span>
                        </div>
                        <div className="p-2 relative bg-zinc-800 flex flex-col justify-between rounded-md min-w-[180px] max-w-2xl h-64">
                            <div className="w-full h-full" />
                            <div className="absolute h-[70%] w-[92%] p-2 ">
                                <Image src={`/preto-show-poporo.jfif`} className="rounded-md" alt="Preto Show - Poporo" fill></Image>
                            </div>
                            <span className="text-lg font-bold">
                                Preto Show - Poporó
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-lg visible md:invisible md:h-0 md:gap-0 md:text-sm">
                        <span className="text-3xl font-semibold">
                            Minha PlayList Liked
                        </span>
                        <nav className=" bg-zinc-950 gap-1 flex flex-col p-2 rounded-lg flex-grow overflow-auto">
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Anselmo Ralph
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Dji Tafinha
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                C4 Pedro
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Ary
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Nerú Americano
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Scró que Cuia
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Paulelson
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                TRX
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                CBG
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Mobbers
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Lebasi
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                T-Rex
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Prodigio
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                NGA
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Plutonio
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Deezy
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Monsta
                            </a>
                            <a href="" className="text-zinc-400 hover:text-zinc-200">
                                Força Suprema
                            </a>
                        </nav>
                    </div>

                </main>
            </div>
            <footer className={`bg-zinc-800 w-[100%] 
            rounded-lg 
            overflow-hidden 
            h-20 md:h-24 
            lg:h-32 
            flex items-center 
            justify-between 
            m-1 px-1 md:px-2
            pt-3
            sm:gap-3 
            sm:px-1 lg:px-2 py-1`}>

                <div className="relative grid grid-cols-2 gap-1 lg:gap-2 md:gap-2 sm:gap-1 justify-end h-12 w-20 sm:h-16 sm:w-44 md:h-20 md:w-52 lg:h-24 lg:w-56">


                    <div className="w-full h-full relative rounded-md  overflow-hidden">
                        <Image src={`/pop-smoke-dior.jpg`} objectFit="cover" fill alt="Pop Smoke - Dior"></Image>

                    </div>



                    <div className="font-bold w-full h-full md:text-lg sm:text-xs text-xs lg:text-lg flex flex-col justify-center"><span>
                        Pop Smoke - Dior
                    </span></div>
                </div>
                <div className="grid grid-cols-1 justify-center items-center sm:w-max ">
                    <div className=" flex gap-4 md:gap-3 lg:gap-4 items-center justify-center">
                        <div><IconArrowsShuffle  className={`lg:w-6 w-5 text-green-600`} ></IconArrowsShuffle></div>

                        <div>
                            <IconPlayerSkipBackFilled className={`lg:w-6 w-5`}></IconPlayerSkipBackFilled>
                        </div>
                        <div className="py-1 px-2 sm:px-2 lg:p-2 md:px-2 md:py-1.5 rounded-full bg-zinc-200">
                            <IconPlayerPlayFilled className="text-zinc-950 lg:w-6 md:w-5 w-4"></IconPlayerPlayFilled>
                        </div>
                        <div>
                            <IconPlayerSkipForwardFilled className={`lg:w-6 w-5 `}></IconPlayerSkipForwardFilled>
                        </div>
                        <div><IconRepeatOff className={`lg:w-6 w-5 `}></IconRepeatOff></div>
                    </div>

                    <div className="flex gap-2 items-center justify-center w-full">
                        <span className="text-xs sm:text-sm md:text-md">1:29</span>
                        <div className="lg:w-[30rem] md:w-[15rem] sm:w-[10rem] w-[8rem]">

                            <Slider className="sm:h-[2px] md:h-1 lg:h-1" style={{color: grey[300]}} size="small" min={0} max={100} defaultValue={40}></Slider>
                        </div>
                        <span className="text-sm">3:16</span>
                    </div>
                </div>
                <div className="flex self-center gap-2 w-16 sm:w-max sm:gap-2 md:gap-3 lg:gap-4 items-center mr-1">
                    <IconMicrophone2 className={`lg:w-6 w-5`} />
                    <IconVolume className={`lg:w-6 w-5 `} />
                    <div className="lg:w-24 md:w-24 sm:w-20 absolute invisible sm:relative sm:visible pl-2">
                        <Slider min={0} max={30} size="small" style={{color: grey[300]}} defaultValue={21}></Slider>

                    </div>

                    <IconMaximize className={`lg:w-6 w-5`} />
                </div>

            </footer>
        </div>

    )
}