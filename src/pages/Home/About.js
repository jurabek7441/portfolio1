import HeaderPhoto from "../../photo/user-image 1.png" 
export let About=()=>{
    return(
        <div className="about">
            <div className="aboutLeft">
                <p>Hello,</p>
                <h2>Adam Zakob</h2>
                <h5>a freelance Front-end Web Developer</h5>
                <button>Let`s talk</button>
            </div>
            <div className="aboutRight">
                <figure>
                    <img src={HeaderPhoto} alt="User" />
                </figure>
            </div>
        </div>
    )
}