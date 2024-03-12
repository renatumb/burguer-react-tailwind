import homeImage from "./../../assets/img/home-image.png"
import {faDroplet, faUtensils, faLeaf} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <section id="home">
            <div className="container flex flex-col items-center gap-10 md:flex-row ">
                <div className="mx-auto md:basis-1/2 lg:basis-2/5 ">
                    <img alt="Home Image" src={homeImage} className="w-60 md:w-full animate-movingY"/>
                </div>

                <div className="text-center md:basis-1/2 md:text-start lg:basis-3/5 ">
                    <h1 className="home__title">HAPPY TUMMY WITH TASTY BURGUERS.</h1>
                    <div className="separator mx-auto md:mx-0"></div>
                    <p className="paragraph">Indulge in the ultimate delight as your taste buds embark on a
                        flavor-packed journey with these scrumptious burgers! Savor the joy of each bite, as happiness
                        unfolds in your tummy with these incredibly tasty burgers!
                    </p>

                    <div className="text-base flex justify-center items-center gap-4 py-10 md:justify-start md:gap-20">
                        <div className="text-center">
                            <FontAwesomeIcon className="text-secondaryColor text-4xl" icon={faDroplet}/>
                            <br/>
                            Fresh
                        </div>

                        <div className="text-center">
                            <FontAwesomeIcon className="text-secondaryColor text-4xl" icon={faUtensils}/>
                            <br/>
                            Delicious
                        </div>

                        <div className="text-center">
                            <FontAwesomeIcon className="text-secondaryColor text-4xl" icon={faLeaf}/>
                            <br/>
                            Organic
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary">learn more</a>
                </div>
            </div>
        </section>
    )
}
