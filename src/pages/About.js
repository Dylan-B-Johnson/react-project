// This lets us make a script run after loading the content (putting at bottom of index.html won't work for react)
import React, { useEffect } from 'react';

const About = () => {
    // this will run after this component has loaded completely
    useEffect(() => {
            const result = document.getElementById("form-result");
            const sendEmail = async(json) => {
                try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers:{
                            "Content-Type":"application/json",
                            Accept:"application/json"
                        },
                        body:json
                    });
                    return response;
                } catch(error) {
                    console.log(error);
                    result.innerHTML = "Failed to send email.";
                }
            };

            document.getElementById("contact-me").onsubmit = async(e) => {
                e.preventDefault();
                const json = JSON.stringify(Object.fromEntries(new FormData(e.target)));
                result.innerHTML = "Sending email...";
                const httpResult = await sendEmail(json);
                if (httpResult.status == 200) {
                    result.innerHTML = "Email sent.";
                } else {
                    result.innerHTML = "Failed to send email.";
                }
            }
        }, 
        []
    );

    return (
        <div id="remaining-content" class="columns center-columns-horizontal">
            <div id="left-pane-about" class="one">
                <div id="download-cv">
                    <a href="files/cv.pdf" target="_blank" download><h3>Download CV</h3></a>
                </div>
                <form id="contact-me" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="8ccdde0d-eba9-46b5-b8a0-404f1bd2e5cc"/>
                    <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
                    <p>
                        <label for="name-input">Your name:</label>
                    </p>
                    <p>
                        <input type="text" id="name-input" name="name" required/>
                    </p>
                    <p>
                        <label for="message-input">Message:</label>
                    </p>
                    <p>
                        <textarea type="text" rows="6" id="message-input" name="message" required></textarea>
                    </p>
                    <p>
                        <button type="submit">Send email</button>
                    </p>
                    <p id="form-result"></p>
                </form>
                <p>Office: A+A 001A</p>
                <div id="office-map">
                    <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d596.4851108471788!2d-83.92991113770258!3d35.95276483952231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1729353618905!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="three" id="artist-statement">
                <img id="about-art" class="contain-img" src="images/about-art.png"/>
                <h3>Artist's Statement</h3>
                <section>
                    <blockquote class="text-align-center">"Beneath consciousness lies that great area of the soul which is still a total mystery, but which demonstrates its workings in dreams, in the somnambulistic state under hypnosis and which existed before one's earthly life and which will exist after death.  From there arise [anxiety], the passions, love, hate, and all that which occurs without reflection."</blockquote>
                    <cite><em class="right text-align-right">—Gerhard Von der Lippe Gran, 1893</em></cite>
                </section>
                <p>I am fascinated by the associations we make as we interpret the world around us. I use simple abstract forms to create conflicting formal and sensory associations: hard/soft, precise/imperfect, strong/vulnerable. My works are inspired by human form, nature, and mass-produced objects. Embracing the plumpness of anatomical form, and the rigidity of machine-tooled objects, I strive to heighten potential readings. Clay's amorphous, malleable nature easily embraces these many qualities.</p>
            </div>
        </div>
    );
};

export default About
