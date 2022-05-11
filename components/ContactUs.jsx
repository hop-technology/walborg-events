import { useState } from 'react'

const ContactForm = () => {
  const handleError = (e) => {
    e.target.setCustomValidity(
      'Du måste godkänna vår policy för att kunna skicka in ditt meddelande'
    )
  }
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleInput = (e) => {
    e.target.setCustomValidity('')
  }

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Skicka')

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  // Validation check method
  const handleValidation = () => {
    let isValid = true

    if (fullname.length <= 0) {
      isValid = false
    }
    if (email.length <= 0) {
      isValid = false
    }
    if (phone.length <= 0) {
      isValid = false
    }
    if (message.length <= 0) {
      isValid = false
    }
    return isValid
  }

  //   Handling form submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText('Skickar..')
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          phone: phone,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText('Skicka')
      setFullname('')
      setEmail('')
      setPhone('')
      setMessage('')
    } else {
      setShowSuccessMessage(false)
      setShowFailureMessage(true)
      setButtonText('Skicka')
      return
    }
  }

  return (
    <>
      <div className='contact' id='contact-scroll-to'>
        <div className='contact__container'>
          <h2 data-cy='contact-form-title' className='contact__title'>
            Kontakta oss
          </h2>
          <form
            className='form'
            onSubmit={handleSubmit}
            data-cy='contact-us-form'>
            <div className='form__part1'>
              <div className='form__input'>
                <label htmlFor='fullname'>Mitt namn är *</label> <br />
                <input
                  type='text'
                  name='fullname'
                  placeholder='För och efternamn'
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value)
                  }}
                  data-cy='name'
                />
              </div>
              <div className='form__input'>
                <label htmlFor='email'>Kontaka mig på *</label> <br />
                <input
                  type='email'
                  name='email'
                  placeholder='Din email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  data-cy='email'
                />
              </div>
              <div className='form__input'>
                <label htmlFor='phone'>Mitt telefonnummer är *</label> <br />
                <input
                  type='number'
                  name='phone'
                  placeholder='Ditt telefonnummer'
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                  }}
                  data-cy='phone'
                />
              </div>
            </div>
            <div className='form__part2'>
              <p>
                <label htmlFor='message'>Meddelande *</label> <br />
                <textarea
                  name='message'
                  placeholder='Meddelande'
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                  data-cy='message'
                />
              </p>
            </div>
            <div className='form__part3'>
              <div className='form__part3__checkbox'>
                <input
                  type='checkbox'
                  name='privacy-policy'
                  id='privacy-policy'
                  data-cy='privacy-policy'
                  required
                  onInvalid={handleError}
                  onInput={handleInput}
                />
              </div>
              <div>
                <label className='privacy-policy'>
                  Jag accepterar Walborg Events{' '}
                  <span>
                    <a
                      href='https://www.termsfeed.com/live/8b19c22f-c2ff-457e-a752-ec22a881e42b'
                      target='_blank'
                      rel='noreferrer'>
                      privacy policy
                    </a>
                  </span>{' '}
                </label>
              </div>
            </div>
            <div className='form__button__box'>
              <button className='btn__submit' type='submit' data-cy='submit'>
                <div className='btn__submit--border'>
                  <p className='btn__submit--text'>{buttonText}</p>
                </div>
              </button>
            </div>
            <div className='status-message'>
              {showFailureMessage && !showSuccessMessage ? (
                <h4 className='status-message--error'>Vänligen fyll i alla fält</h4>
              ) : showSuccessMessage && !showFailureMessage ? (
                <h4 className='status-message--success'>Tack för ditt meddelande</h4>
              ) : (
                ''
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactForm
