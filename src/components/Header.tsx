import {RiCloseLine, RiMenu3Line, RiMoonLine} from "@remixicon/react";

export default function Header() {

    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById("mobile-menu")
        if (mobileMenu)
            mobileMenu.classList.toggle('hidden')
    }

    return (
        <header className=" bg-primaryColor fixed top-0 left-0 w-dvw z-50 ">
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
        </header>
    )
}
