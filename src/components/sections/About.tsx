import about from "./../../assets/img/about.jpg"
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function About() {

    return (
        <section id="about">
            <div className="container flex flex-col gap-10 md:flex-row ">
                <div className="flex-1">
                    <img src={about} className="rounded-xl"/>
                </div>

                <div className="flex-1">
                    <h2 className="section__title">FIND FOOD AND DRINKS ALL-IN-ONE PLACE FOR YOUR BEST TASTE.</h2>
                    <div className="separator"></div>
                    <p className="paragraph">
                        Journey into exquisite flavors with us! Elevate your taste experience to new heights.
                        Unforgettable bites and sips await!
                    </p>
                    <ul className="grid grid-cols-2 py-5 space-y-1">
                        <li className="text-xs text-paragraphColor "><FontAwesomeIcon icon={faCheck} className="text-secondaryColor pr-2"/>Best Price</li>
                        <li className="text-xs text-paragraphColor "><FontAwesomeIcon icon={faCheck} className="text-secondaryColor pr-2"/>Best Service</li>
                        <li className="text-xs text-paragraphColor "><FontAwesomeIcon icon={faCheck} className="text-secondaryColor pr-2"/>Fresh Ingredient</li>
                        <li className="text-xs text-paragraphColor "><FontAwesomeIcon icon={faCheck} className="text-secondaryColor pr-2"/>Health Protocol</li>
                    </ul>
                    <a className="btn btn-primary" >About Us</a>
                </div>
            </div>
        </section>
    )
}
