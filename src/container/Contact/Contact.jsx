import { useState } from 'react'
import { BiSend } from 'react-icons/bi'
import { motion } from 'framer-motion'

import { HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import './Contact.scss'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const isEmail = () => {
    let mail = document.getElementById('not-mail')
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if (email.match(regex)) {
      mail.style.opacity = 0
      return true
    } else {
      mail.style.opacity = 1
      mail.style.animation = 'dongle 1s'
      setTimeout(() => {
        mail.style.animation = 'none'
      }, 1000)
      return false
    }
  }

  const failLMessage = () => {
    const messageDiv = document.querySelector('.form-message')
    messageDiv.classList.add('error-message')
    messageDiv.innerHTML = '❌ Please fill in all required fields.'

    document.getElementById('name').classList.add('error')
    document.getElementById('email').classList.add('error')
    document.getElementById('message').classList.add('error')
  }

  const successMessage = () => {
    const messageDiv = document.querySelector('.form-message')

    messageDiv.classList.add('success-message')
    messageDiv.innerHTML = '✔️ Message sent successfully !'

    document.getElementById('name').classList.remove('error')
    document.getElementById('email').classList.remove('error')
    document.getElementById('message').classList.remove('error')

    setTimeout(() => {
      messageDiv.style.opacity = 0
    }, 5000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name && isEmail() && message) {
      sendFeedback('template_c5lf74b', {
        name,
        subject,
        email,
        message,
      })
    } else {
      failLMessage()
    }
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('service_ryoqa0c', templateId, variables)
      .then((res) => {
        successMessage()
        setName('')
        setSubject('')
        setEmail('')
        setMessage('')
      })
      .catch((err) => {
        const messageDiv = document.querySelector('.form-message')
        messageDiv.classList.add('error-message')
        messageDiv.innerHTML =
          "❌ An error has occurred, please try again."
      })
  }

  return (
    <section className="section contact" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">May it be business or collab purpose</span>

      <div className="contact__container grid">
        <div className="contact__info">
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact__info-item"
          >
            <HiOutlinePhone />
            <div>
              <h3 className="contact__title">Contact Number</h3>
              <span className="contact__subtitle">+6391 0404 1814</span>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact__info-item"
          >
            <MdOutlineAlternateEmail />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">lynruelo@outlook.com</span>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ y: [50, 0], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="contact__info-item"
          >
            <HiOutlineLocationMarker />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">
                Tagaytay, Cavite - Philippines
              </span>
            </div>
          </motion.div>
        </div>

        <div className="contact__form">
          <form className="contact-form grid">
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="contact__inputs grid"
            >
              <div className="contact__content">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name *"
                  value={name}
                  autoComplete="off"
                  className="contact__input"
                />
              </div>
              <div className="email-content contact__content">
                <input
                  type="mail"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail *"
                  value={email}
                  autoComplete="off"
                  className="contact__input"
                />
                <label id="not-mail">*Invalid email</label>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="contact__content"
            >
              <input
                type="text"
                id="subject"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                value={subject}
                className="contact__input"
              />
            </motion.div>
            <motion.div
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="contact__content"
            >
              <textarea
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message *"
                value={message}
                className="contact__input"
                rows="7"
              />
            </motion.div>
            <button
              className="button contact-button"
              type="button"
              value="Send"
              onClick={handleSubmit}
            >
              Send <BiSend />
            </button>
            <div className="form-message"></div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
