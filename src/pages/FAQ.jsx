import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    q: 'What types of treatments do you offer?',
    a: 'We offer a wide range of noninvasive treatments including body contouring (Laser Lipolysis, Ultrasonic Cavitation, EMS Sculpt), facial esthetics (Hydrafacial, Personalized Facials, Cryo-Skin), as well as additional services like laser hair removal, laser tattoo removal, and teeth whitening.',
  },
  {
    q: 'Are the treatments painful?',
    a: 'Our treatments are noninvasive and designed to be comfortable. Most clients describe the experience as relaxing. Some treatments like Laser Lipolysis and Ultrasonic Cavitation involve a warm sensation, while others like Cryo-Skin use cold therapy. Lucila will walk you through what to expect before every session.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'The number of sessions varies depending on the treatment type and your individual goals. Most body contouring treatments show best results with a series of 4-8 sessions. During your consultation, Lucila will create a personalized treatment plan and recommend the optimal number of sessions for your desired results.',
  },
  {
    q: 'Is there any downtime after treatments?',
    a: 'One of the greatest benefits of our noninvasive approach is that there is little to no downtime. Most clients return to their normal activities immediately after their appointment. Lucila may recommend certain post-treatment care tips to maximize your results.',
  },
  {
    q: 'How do I prepare for my appointment?',
    a: 'For most treatments, we recommend staying hydrated and avoiding heavy meals right before your session. Lucila provides personalized suggestions for lifestyle changes before and after treatments to help you achieve maximum results. Specific preparation instructions will be provided when you book.',
  },
  {
    q: 'What areas of the body can be treated?',
    a: 'Our body contouring treatments can target most areas including the abdomen, thighs, arms, back, love handles, and buttocks. Facial treatments address the full face, neck, and jawline. During your consultation, we\'ll discuss which areas you\'d like to focus on.',
  },
  {
    q: 'When will I see results?',
    a: 'Results vary by treatment. Some clients notice visible changes after their very first session, while optimal results typically develop over a series of treatments. Body contouring results continue to improve as your body naturally processes and eliminates treated fat cells over 2-4 weeks following each session.',
  },
  {
    q: 'Do you offer package deals?',
    a: 'Yes! We offer package deals for multi-session treatments which provide better value. Contact us directly or check our booking page for current packages and promotions.',
  },
  {
    q: 'What are your business hours?',
    a: 'We are open Monday through Wednesday and Friday through Saturday from 9:30 AM to 8:00 PM. We are closed on Thursdays and Sundays. You can book an appointment online 24/7 or call us during business hours.',
  },
  {
    q: 'Where are you located?',
    a: 'Luxe Body By Lucy is located at 62-99 Forest Avenue in Ridgewood, Queens, NY 11385. We\'re easily accessible by public transportation and there is street parking available nearby.',
  },
]

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={() => setIsOpen(!isOpen)}>
        <span>{faq.q}</span>
        <ChevronDown size={20} className="faq-item__icon" />
      </button>
      <div className="faq-item__answer">
        <p>{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <div className="faq">
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__content container">
          <p className="page-hero__label">Questions & Answers</p>
          <h1 className="page-hero__title">FAQ</h1>
          <div className="page-hero__divider" />
        </div>
      </section>

      <section className="faq__content">
        <div className="container">
          <div className="faq__list">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>

          <div className="faq__cta">
            <h3>Still Have Questions?</h3>
            <p>
              We're happy to help! Reach out to us directly and Lucila will personally
              answer any questions you may have.
            </p>
            <div className="faq__cta-actions">
              <a href="tel:9173791771" className="btn btn-gold">Call (917) 379-1771</a>
              <Link to="/book" className="btn btn-outline">Book a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
