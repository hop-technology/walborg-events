export default function ContactForm() {
  return (
    <>
      <div className='contact'>
        <div className='contact__container'>
          <h1 data-cy='contact-form-title' className='contact__title'>
            Kontakta oss
          </h1>
          <form
            className='form'
            name='contact'
            method='post'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            data-cy='contact-us-form'>
            <div className='form__part1'>
              <input type='hidden' name='form-name' value='contact' />
              <div className="form__input">
                <label>Mitt namn är</label> <br />
                <input
                  type='name'
                  name='name'
                  placeholder='Ditt namn'
                  id='yourname'
                  data-cy='name'
                />
              </div>
              <div className="form__input">
                <label>Kontaka mig på </label> <br />
                <input
                  type='email'
                  name='email'
                  placeholder='Din email'
                  id='youremail'
                  data-cy='email'
                />
              </div>
              <div className="form__input">
                <label>Mitt telefonnummer är</label> <br />
                <input
                  type='tel'
                  name='phone'
                  placeholder='Ditt telefonnummer'
                  id='yourphone'
                  data-cy='phone'
                />
              </div>
            </div>
            <div className='form__part2'>
              <p>
                <label>Meddelande</label> <br />
                <textarea
                  name='message'
                  placeholder='Meddelande'
                  id='yourmessage'
                  data-cy='message'
                />
              </p>
            </div>
            <div className='form__part3'>
              <label>Jag accepterar Walborg Events privacy policy</label>
              <input
                type='checkbox'
                name='privacy-policy'
                id='privacy-policy'
                data-cy='privacy-policy'
                required='true'
              />
              <div>
                <button className='btn--submit' type='submit' data-cy='submit'>
                  Skicka
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
