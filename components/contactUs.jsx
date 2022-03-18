export default function ContactForm() {
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-cy="contact-us-form"
    >
      <div className="contact_us_form_main">
        <div className="contact-us-one">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Mitt namn är</label> <br />
            <input
              type="name"
              name="name"
              placeholder="Ditt namn"
              id="yourname"
              data-cy="name"
            />
          </p>
          <p>
            <label>Kontaka mig på </label> <br />
            <input
              type="email"
              name="email"
              placeholder="Din email"
              id="youremail"
              data-cy="email"
            />
          </p>
          <p>
            <label>Mitt telefonnummer är</label> <br />
            <input
              type="tel"
              name="phone"
              placeholder="Ditt telefonnummer"
              id="yourphone"
              data-cy="phone"
            />
          </p>
        </div>
        <div className="contact-us-two">
          <p>
            <label>Meddelande</label> <br />
            <textarea
              name="message"
              placeholder="Meddelande"
              id="yourmessage"
              data-cy="message"
            />
          </p>
        </div>
      </div>
      <div className="contact-us-three">
        <label>Jag accepterar Walborg Events privacy policy</label>
        <input
          type="checkbox"
          name="privacy-policy"
          id="privacy-policy"
          data-cy="privacy-policy"
          required="true"
        />

        <div>
          <button type="submit" data-cy="submit">
            Skicka
          </button>
        </div>
      </div>
    </form>
  );
}
