import { useContext } from "react"
import { DataContext } from "../../Context"

export let Services = () => {
    let { servicesData } = useContext(DataContext);
    return (


        <div className="services">
            <u>Services</u>
            <h2>What  actually I love to do</h2>
            <div className="services_cardBox">

                {servicesData.map((item, index) => (
                    <div className="servicesCard"
                        key={index}
                    >
                        <div className="servicesCard_title">
                            <img src={item.photo} alt={item.title} />
                            <h5>{item.title}</h5>
                        </div>
                        <p>{item.text}</p>

                    </div>
                ))}
            </div>
        </div>

    )
}