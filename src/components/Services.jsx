import React from 'react';
import { useSelector } from 'react-redux';
import { selectServices } from '../store/appSlice';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceIcons } from '../data/icons';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const Services = () => {
  const services = useSelector(selectServices);
  const { t } = useTranslation();

  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          className="section-head split"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="eyebrow">{t('services.eyebrow')}</span>
            <h2>{t('services.title')}</h2>
          </div>
          <p>{t('services.subtitle')}</p>
        </motion.div>

        <motion.ul
          className="services-grid"
          style={{ listStyle: 'none' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, index) => {
            const IconComp = serviceIcons[service.icon];
            return (
              <motion.li key={service.id} variants={itemVariants}>
                <Link to={`/service/${service.id}`} className="service-card">
                  <div className="service-top">
                    <span className="service-icon">
                      {IconComp && <IconComp size={26} strokeWidth={2} />}
                    </span>
                    <span className="service-num ltr">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{t(`services.s_${service.id}_title`)}</h3>
                  <p>{t(`services.s_${service.id}_desc`)}</p>
                  <span className="service-more">
                    {t('services.learn_more')}
                    <ArrowRight size={16} strokeWidth={2.5} className="flip-rtl" />
                  </span>
                </Link>
              </motion.li>
            );
          })}

          <motion.li variants={itemVariants}>
            <Link to="/#contact" className="service-card is-cta">
              <div className="service-top">
                <span className="service-icon">
                  <PhoneCall size={24} strokeWidth={2} />
                </span>
              </div>
              <h3>{t('services.cta_title')}</h3>
              <p>{t('services.cta_desc')}</p>
              <span className="service-more">
                {t('services.cta_button')}
                <ArrowRight size={16} strokeWidth={2.5} className="flip-rtl" />
              </span>
            </Link>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Services;
