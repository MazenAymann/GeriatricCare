import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectServices, selectContactInfo } from '../store/appSlice';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Phone, MessageCircle } from 'lucide-react';
import { serviceIcons } from '../data/icons';

const ease = [0.16, 1, 0.3, 1];

const ServiceDetail = () => {
  const { id } = useParams();
  const services = useSelector(selectServices);
  const { phones = [] } = useSelector(selectContactInfo);
  const { t } = useTranslation();

  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="not-found">
        <div>
          <h2 style={{ fontSize: '2rem' }}>{t('detail.not_found')}</h2>
          <Link to="/" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>{t('detail.go_home')}</Link>
        </div>
      </div>
    );
  }

  const IconComp = serviceIcons[service.icon];
  const points = t(`services.s_${id}_points`, { returnObjects: true });
  const others = services.filter(s => s.id !== id);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="detail-hero">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container">
          <Link to="/#services" className="breadcrumb">
            <ArrowLeft size={17} className="flip-rtl" />
            {t('detail.back')}
          </Link>

          <motion.div
            className="detail-title"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7, ease }}
          >
            <span className="service-icon">
              {IconComp && <IconComp size={32} strokeWidth={2} />}
            </span>
            <h1>{t(`services.s_${id}_title`)}</h1>
          </motion.div>

          <motion.p
            className="detail-lead"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease }}
          >
            {t(`services.s_${id}_desc`)}
          </motion.p>
        </div>
      </section>

      <div className="container detail-body">
        <div>
          <h2>{t('detail.included')}</h2>
          <ul className="points">
            {points.map((point, index) => (
              <motion.li
                key={index}
                className="point"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25 + index * 0.08, duration: 0.6, ease }}
              >
                <span className="point-check"><Check size={18} strokeWidth={3} /></span>
                {point}
              </motion.li>
            ))}
          </ul>

          <div className="other-services">
            <h2>{t('detail.other')}</h2>
            <div className="chips">
              {others.map(s => {
                const Icon = serviceIcons[s.icon];
                return (
                  <Link key={s.id} to={`/service/${s.id}`} className="chip-link">
                    <span className="chip-icon brand">{Icon && <Icon size={15} strokeWidth={2.25} />}</span>
                    {t(`services.s_${s.id}_title`)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <motion.aside
          className="book-card"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease }}
        >
          <h3>{t('detail.book')}</h3>
          <p>{t('detail.book_desc')}</p>
          {phones[0] && (
            <>
              <a href={`tel:${phones[0]}`} className="btn btn-primary">
                <Phone size={17} strokeWidth={2.5} />
                <span className="ltr">{phones[0]}</span>
              </a>
              <a href={`https://wa.me/2${phones[0]}`} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                <MessageCircle size={17} strokeWidth={2.5} />
                WhatsApp
              </a>
            </>
          )}
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
