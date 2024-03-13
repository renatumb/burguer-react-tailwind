import {GetImage} from "../../utils/GetImage.tsx";

export default function Promo() {
    return (
        <section id="promo">
            <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
                <div className="bg-primaryColorLight dark:bg-darkColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
                    <img src={GetImage('promo-1.png')} className="w-40 mx-auto hover:animate-movingY md:mx-5"/>
                    <div className="space-y-2 pt-5 md:pt-0">
                        <p className="text-xs text-secondaryColor">Payday promo</p>
                        <h3 className="card__title">get a 10% discount on payday week</h3>
                        <p className="paragraph">Bite into joy this Payday! Sink your teeth into exclusive burger deals and discounts. Flavorful savings await – satisfy your cravings!</p>
                        <a className="text-xs text-secondaryColor" href="#">Buy Online</a>
                    </div>
                </div>
                {/** **/}
                <div className="bg-primaryColorLight dark:bg-darkColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
                    <img src={GetImage('promo-2.png')} className="w-40 mx-auto hover:animate-movingY md:mx-5"/>
                    <div className="space-y-2 pt-5 md:pt-0">
                        <p className="text-xs text-secondaryColor">Payday promo</p>
                        <h3 className="card__title">get a 10% discount on payday week</h3>
                        <p className="paragraph">Sip into delight this Payday! Enjoy exclusive burger and beverage deals. Treat your taste buds to a combo of flavor and savings</p>
                        <a className="text-xs text-secondaryColor" href="#">Buy Online</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
