import {GetImage} from "../../utils/GetImage.tsx";

export default function Category() {
    return (
        <section id="category">
            <div className="container flex flex-col gap-5  md:flex-row">
                {/** **/}
                <div className="bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
                    <div className="basis-1/3 relative">
                        <img src={GetImage('burger-1.png')  } alt="category image" className="absolute w-28 -bottom-4 -left-4"/>
                    </div>
                    <div>
                        <div className="mb-2">
                            <h4 className="card__title">Food</h4>
                            <p className="text-xs">dsdsd</p>
                        </div>
                        <a className="text-blackColor cursor-pointer" href="">Buy Online</a>
                    </div>
                </div>
                {/** **/}
                <div className="bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
                    <div className="basis-1/3 relative">
                        <img src={GetImage('snack-1.png')} alt="category image" className="absolute w-28 -bottom-4 -left-4"/>
                    </div>
                    <div>
                        <div className="mb-2">
                            <h4 className="card__title">SNACK</h4>
                            <p className="text-xs">dsdsd</p>
                        </div>
                        <a className="text-secondaryColor cursor-pointer" href="">Buy Online</a>
                    </div>
                </div>
                {/** **/}
                <div className="bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
                    <div className="basis-1/3 relative">
                        <img src={GetImage('beverage-2.png')} alt="category image" className="absolute w-28 -bottom-4 -left-4"/>
                    </div>
                    <div>
                        <div className="mb-2">
                            <h4 className="card__title">BEVERAGE</h4>
                            <p className="text-xs">dsdsd</p>
                        </div>
                        <a className="text-secondaryColor cursor-pointer" href="">Buy Online</a>
                    </div>
                </div>
                {/** **/}
            </div>
        </section>
    )
}
