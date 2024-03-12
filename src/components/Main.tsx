import Home from "./sections/Home.tsx";
import Category from "./sections/Category.tsx";
import Promo from "./sections/Promo.tsx";
import About from "./sections/About.tsx";

export default function Main() {
    return (
        <main>
            <Home/>
            <Category />
            <Promo/>
            <About />
        </main>
    )
}
