import {FiArrowRight} from "react-icons/fi"
import photo1 from "../../photo/portfolio1.png"
import photo2 from "../../photo/portfolio2.png"

export let Portfolio = () => {
    return (
        <div className="portfolio">
            <u>Portfolio</u>
            <div className="portfolio_title">
                <h2>All Creative Projects</h2>
                <h3>Explore More <FiArrowRight/></h3>
            </div>
            <div className="portfolio_content">
                <figure><img src={photo1} alt="portfolio1" /></figure>
                <figure><img src={photo2} alt="portfolio2" /></figure>
            </div>
        </div>
    )
}