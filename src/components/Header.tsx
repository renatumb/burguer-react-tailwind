import { RiArrowUpSFill, RiCloseLine, RiMenu3Line, RiMoonLine} from "@remixicon/react";
import {useEffect} from "react";

export default function Header() {

    let lastEvent: number;

    useEffect(() => {
        window.addEventListener('scroll', () => {
            clearTimeout(lastEvent)
            lastEvent = setTimeout(() => {
                console.log(window.scrollY)

                const btnUp = document.getElementById("scrollUpBtn")
                const header = document.getElementById("header")

                if (!btnUp || !header) return

                if (window.scrollY > 300) {
                    btnUp.classList.add("bottom-6")
                    btnUp.classList.remove("-bottom-1/2")
                    header.classList.add("border-b-secondaryColor")
                    header.classList.add("border-b" )
                } else {
                    btnUp.classList.add("-bottom-1/2")
                    btnUp.classList.remove("bottom-6")
                    header.classList.remove("border-b")
                    header.classList.remove("border-b-secondaryColor")
                }
            }, 500)
        })
    }, [])

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu")
        if (mobileMenu)
            mobileMenu.classList.toggle('hidden')
    }

    return (
        <header className=" bg-primaryColor fixed top-0 left-0 w-dvw z-50 transition-all duration-500 " id="header">
            <nav className="container relative w-full h-14 flex justify-between items-center ">
                <div>
                    <a href="#" className="text-2xl uppercase font-oswald">Bur<span className="text-secondaryColor">guer</span></a>
                </div>

                <div id="mobile-menu" className="hidden absolute top-0 left-0 w-full pt-10 pb-2  border-2 bg-primaryColorLight border-secondaryColor  md:block md:static md:py-0 md:border-none md:w-auto md:ml-auto md:mx-auto md:bg-primaryColor" onClick={toggleMobileMenu}>
                    <ul className="flex flex-col text-center md:flex-row  md:gap-5">
                        <li className="hover:text-secondaryColor hover:bg-primaryColor py-3 ease-in duration-200"><a href="#home">Home</a></li>
                        <li className="hover:text-secondaryColor hover:bg-primaryColor py-3 ease-in duration-200"><a href="#about">About</a></li>
                        <li className="hover:text-secondaryColor hover:bg-primaryColor py-3 ease-in duration-200"><a href="#menu">Menu</a></li>
                        <li className="hover:text-secondaryColor hover:bg-primaryColor py-3 ease-in duration-200"><a href="#review">Review</a></li>
                        <li className="hover:text-secondaryColor hover:bg-primaryColor py-3 ease-in duration-200"><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden"><RiCloseLine/></div>
                </div>
                <div className="flex items-center gap-5">
                    <RiMoonLine className="cursor-pointer "/>
                    <RiMenu3Line className="cursor-pointer md:hidden" onClick={toggleMobileMenu}/>
                </div>
            </nav>
            <a href="#" id="scrollUpBtn" className="fixed right-5 -bottom-1/2 bg-secondaryColor shadow-2xl inline-block p-4 rounded-full text-lg text-darkColor z-50 hover:-translate-y-1 ease-in duration-200">
                <RiArrowUpSFill></RiArrowUpSFill>
            </a>
        </header>
    )
}
