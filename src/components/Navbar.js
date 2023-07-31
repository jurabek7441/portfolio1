import { NavLink } from "react-router-dom"


export let Navbar =()=>{
    return(
        <div className="navbar">
            <figure>
                <i>JA</i>
            </figure>
            <ul className="menu">
                <NavLink to={"/"}>About</NavLink>
                <NavLink to={"/"}>Services</NavLink>
                <NavLink to={"/"}>Works</NavLink>
                <NavLink to={"/"}>Contact</NavLink>
            </ul>
        </div>
    )
}