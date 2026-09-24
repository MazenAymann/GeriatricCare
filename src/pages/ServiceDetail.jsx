import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectServices } from '../store/appSlice';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const services = useSelector(selectServices);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Service not found</h2>
        <Link to="/" style={{ color: 'var(--primary-color)', marginTop: '1rem', display: 'inline-block' }}>Go back home</Link>
      </div>
    );
  }

  const title = t(`services.s_${id}_title`);
  const desc = t(`services.s_${id}_desc`);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ padding: '6rem 0', minHeight: '80vh', backgroundColor: 'var(--hero-bg)' }}
    >
      <div className="container">
        <Link to="/#services" style={{ 
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem', 
          color: 'var(--text-secondary)', textDecoration: 'none', 
          marginBottom: '2rem', fontWeight: '600', transition: 'color 0.2s' 
        }}>
          <ArrowLeft size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
          {i18n.language === 'ar' ? 'الرجوع للخدمات' : 'Back to Services'}
        </Link>

        <div style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '32px',
          padding: 'clamp(2rem, 5vw, 4rem)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
        }}>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              color: 'var(--secondary-color)', 
              fontWeight: '800',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em'
            }}
          >
            {title}
          </motion.h1>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ 
              fontSize: '1.25rem', 
              color: 'var(--text-secondary)', 
              lineHeight: '1.8',
              maxWidth: '800px',
              marginBottom: '3rem'
            }}
          >
            {desc}
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '4rem'
            }}
          >
            {t(`services.s_${id}_points`, { returnObjects: true }).map((point, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-primary)' }}>
                <div style={{ marginTop: '0.2rem', flexShrink: 0 }}>
                  <CheckCircle2 color="var(--primary-color)" size={20} />
                </div>
                <span style={{ fontSize: '1.1rem', fontWeight: '500', lineHeight: '1.6' }}>
                  {point}
                </span>
              </div>
            ))}
          </motion.div>

          <Link to="/#contact" style={{ textDecoration: 'none' }}>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem'
              }}
            >
              {i18n.language === 'ar' ? 'احجز هذه الخدمة' : 'Book this Service'}
              <ArrowRight size={20} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
