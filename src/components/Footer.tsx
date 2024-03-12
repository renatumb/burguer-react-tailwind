import {RiFacebookFill, RiInstagramFill, RiMailFill, RiMapPinFill, RiPhoneFill, RiTwitterFill} from "@remixicon/react";

export default function Footer() {
    return (
        <footer>
            <section id={"footer"}>
                <div className="container">
                    <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
                        <li>
                            <div className="space-y-3">
                                <a className="text-4xl font-oswald uppercase">
                                    Bur<span className="text-secondaryColor">guer</span>
                                </a>
                                <p className="text-xs">Savor the flavor at our burger haven</p>
                            </div>
                        </li>

                        <li>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-lg uppercase font-oswald">Support</h3>
                                <a className="text-xs hover:text-secondaryColor">FAQ's</a>
                                <a className="text-xs hover:text-secondaryColor">Privacy Policy</a>
                                <a className="text-xs hover:text-secondaryColor">Term & Conditions</a>
                                <a className="text-xs hover:text-secondaryColor">Contact</a>
                            </div>
                        </li>

                        <li className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-lg uppercase font-oswald">Phone</h3>
                                <p className="flex items-center gap-2 text-xs">
                                    <RiPhoneFill className="size-6 text-secondaryColor"></RiPhoneFill>
                                    +1 778 837 2016
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-lg uppercase font-oswald">Email</h3>
                                <p className="flex items-center gap-2 text-xs">
                                    <RiMailFill className="size-6 text-secondaryColor"></RiMailFill>
                                    burguer.info@email.com
                                </p>
                            </div>
                        </li>
                        { /* */}
                        <li className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-lg uppercase font-oswald">Address</h3>
                                <p className="flex items-center gap-2 text-xs">
                                    <RiMapPinFill className="size-6 text-secondaryColor"></RiMapPinFill>
                                    2341 Granvile St, Vancouver
                                </p>
                            </div>
                            {/* */}
                            <div className="space-y-2">
                                <h3 className="text-lg uppercase font-oswald">Follow us</h3>
                                <div className="space-x-3 flex">
                                    <RiFacebookFill className="size-8 text-secondaryColor hover:-translate-y-1 ease-in duration-200"></RiFacebookFill>
                                    <RiTwitterFill className="size-8 text-secondaryColor hover:-translate-y-1 ease-in duration-200"></RiTwitterFill>
                                    <RiInstagramFill className="size-8 text-secondaryColor hover:-translate-y-1 ease-in duration-200"></RiInstagramFill>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="flex flex-col items-center border-t border-primaryColor py-5 md:flex-row md:justify-center">
                        <p className="paragraph">Burguer food co.</p>
                        <p className="paragraph">Copyright 2023. All Rights reserved</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}
