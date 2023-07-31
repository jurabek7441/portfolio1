import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home/Home"


export let Main = () => {
    return (
        <div className="main">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
            <Footer />
        </div>
    )
}