import "../css/ContactForm.css"

const Form = () => {
  return (
    <form id="contact-me" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="8ccdde0d-eba9-46b5-b8a0-404f1bd2e5cc"/>
        <input type="hidden" name="redirect" value="https://web3forms.com/success"/>
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
        <p id="form-result"></p>
    </form>
  );
};

export default Form
