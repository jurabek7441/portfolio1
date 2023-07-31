import { About } from "./About"
import { Contact } from "./Contact"
import { Portfolio } from "./Portfolio"
import { Services } from "./Services"


export let Home =()=>{
    return(
        <div className="home">
            <About/>
            <Services/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}