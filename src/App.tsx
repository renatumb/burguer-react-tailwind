import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {RiCheckLine} from "@remixicon/react";

function App() {

    return (
        <>
            {/* TO TEST */}
            <div className="hidden" >
                test
                <FontAwesomeIcon icon={faCoffee} spin={true}/>
                opp
                <FontAwesomeIcon icon={faGoogle} className="text-blue-800  size-16 bg-lime-600 rounded" />
                ---
                <RiCheckLine className="text-blue-800  size-16 bg-lime-600 rounded"></RiCheckLine>
            </div>

            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App
