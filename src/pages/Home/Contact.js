


export let Contact = () => {
    return (
        <div className="contact">
            <u>Contact Me</u>
            <div className="contact_title">
                <h2>Let me know if you want to talk about a potential collaboration. I'm available for freelance work.</h2>
                <p>jurabek7441@gmail.com</p>
            </div>
            <div className="contact_content">
                <div className="contact_tel">
                    <input type="text" placeholder="What's your name?" name="tel" />
                </div>
                <div className="contact_email">
                    <input type="email" name="email" id="email" placeholder="Your email" />
                </div>
                <div className="contact_text">
                    <input type="text" name="text" id="text" placeholder="Tell me about your project" />
                </div>
                <div className="contact_sendBox">
                    <button>Get a Quote</button>
                    
                </div>
                
            </div>
        </div>
    )
}