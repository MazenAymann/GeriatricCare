import React from 'react';
import { useSelector } from 'react-redux';
import { selectContactInfo } from '../store/appSlice';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
};

const Contact = () => {
  const info = useSelector(selectContactInfo);
  const { t } = useTranslation();
  const caregiver = t('contact.caregiver_name');

  return (
    <section id="contact" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <motion.div
          className="contact-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="contact-intro">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              {t('contact.eyebrow')}
            </span>
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>

            <div className="caregiver">
              <span className="caregiver-avatar" aria-hidden="true">{caregiver.charAt(0)}</span>
              <div>
                <small>{t('contact.primary_caregiver')}</small>
                <strong>{caregiver}</strong>
              </div>
            </div>
          </div>

          <motion.div
            className="contact-cards"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {info.phones && info.phones.map((phone) => (
              <motion.div key={phone} className="contact-card" variants={itemVariants}>
                <span className="contact-card-icon"><Phone size={22} strokeWidth={2} /></span>
                <div className="contact-card-body">
                  <small>{t('contact.phone_number')}</small>
                  <a href={`tel:${phone}`} className="ltr">{phone}</a>
                </div>
                <div className="contact-card-actions">
                  <a href={`tel:${phone}`} className="btn btn-ghost btn-sm">
                    <Phone size={15} strokeWidth={2.5} />
                    {t('contact.call')}
                  </a>
                  <a href={`https://wa.me/2${phone}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm">
                    <MessageCircle size={15} strokeWidth={2.5} />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            ))}

            <div className="contact-meta">
              <motion.div className="contact-card" variants={itemVariants}>
                <span className="contact-card-icon"><Clock size={22} strokeWidth={2} /></span>
                <div className="contact-card-body">
                  <small>{t('contact.hours')}</small>
                  <strong>{t('contact.hours_value')}</strong>
                </div>
              </motion.div>

              <motion.div className="contact-card" variants={itemVariants}>
                <span className="contact-card-icon"><MapPin size={22} strokeWidth={2} /></span>
                <div className="contact-card-body">
                  <small>{t('contact.location')}</small>
                  <strong>{t('contact.coming_soon')}</strong>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
