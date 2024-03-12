import Home from "./sections/Home.tsx";
import Category from "./sections/Category.tsx";
import Promo from "./sections/Promo.tsx";
import About from "./sections/About.tsx";
import Menu from "./sections/Menu.tsx";
import Review from "./sections/Review.tsx";
import Contact from "./sections/Contact.tsx";

export default function Main() {
    return (
        <main>
            <Home/>
            <Category/>
            <Promo/>
            <About/>
            <Menu/>
            <Review/>
            <Contact/>
        </main>
    )
}
