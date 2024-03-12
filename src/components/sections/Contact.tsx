import {RiSendPlaneFill} from "@remixicon/react";

export default function Contact() {
    return (
        <section id="contact" className="bg-secondaryColor py-16">
            <div className="container flex flex-col gap-5  md:items-center md:flex-row">
                <div className="space-y-4 md:flex-1">
                    <h2 className="section__title text-blackColor">Get EXCLUSIVE UPDATE</h2>
                    <p className="text-sm">Unlock exclusive updates just for you!</p>
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:flex-1">
                    <input type="email" placeholder="email address" className="p-2 text-blackColor rounded-lg outline-none md:w-full"></input>
                    <a href="" className="flex items-center justify-center gap-2 btn bg-blackColor hover:opacity-85">
                        <RiSendPlaneFill></RiSendPlaneFill>
                        Subscribe
                    </a>
                </div>
            </div>
        </section>
    )
}
