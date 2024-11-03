import "../css/ContactForm.css";
import {useState} from "react";

const Form = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending email...");
        const formData = new FormData(event.target);

        formData.append("access_key", "8ccdde0d-eba9-46b5-b8a0-404f1bd2e5cc");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email sent.");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("Failed to send email.");
        }
    };

      return (
        <form id="contact-me" onSubmit={onSubmit}>
            <p>
                <label htmlFor="name-input">Your name:</label>
            </p>
            <p>
                <input type="text" id="name-input" name="name" required/>
            </p>
            <p>
                <label htmlFor="email-input">Your email:</label>
            </p>
            <p>
                <input type="email" id="email-input" name="email" required/>
            </p>
            <p>
                <label htmlFor="message-input">Message:</label>
            </p>
            <p>
                <textarea type="text" rows="6" id="message-input" name="message" required></textarea>
            </p>
            <p>
                <button type="submit">Send email</button>
            </p>
            <p id="form-result">{result}</p>
        </form>
      );
};

export default Form
