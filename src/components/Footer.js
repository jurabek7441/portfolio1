import { BsTelegram } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"


export let Footer = () => {
    return (
        <div className="footer">
            <h2>Let’s be Friends</h2>
            <div className="footer_content">
                <figure>
                    <a href="https://t.me/jurabek7441">
                        <BsTelegram />
                    </a>
                </figure>
                <figure>
                    <a href="https://www.instagram.com/jurabek7441/">
                        <BsInstagram />
                    </a>
                </figure>
                <figure>
                    <a href="https://github.com/jurabek7441">
                        <BsGithub />
                    </a>
                </figure>
            </div>
        </div>
    )
}