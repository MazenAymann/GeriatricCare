import React from 'react';
import { useSelector } from 'react-redux';
import { selectServices } from '../store/appSlice';
import { HeartPulse, Users, Stethoscope, Activity, Droplet, TestTube, Scan, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const iconComponents = { HeartPulse, Users, Stethoscope, Activity, Droplet, TestTube, Scan };

const iconGradients = [
  'linear-gradient(135deg, #0d9488, #059669)',
  'linear-gradient(135deg, #6366f1, #8b5cf6)',
  'linear-gradient(135deg, #f59e0b, #d97706)',
  'linear-gradient(135deg, #ec4899, #db2777)',
  'linear-gradient(135deg, #3b82f6, #2563eb)',
  'linear-gradient(135deg, #ef4444, #dc2626)',
  'linear-gradient(135deg, #10b981, #047857)',
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const Services = () => {
  const services = useSelector(selectServices);
  const { t, i18n } = useTranslation();

  return (
    <section id="services" className="section" style={{ 
      backgroundColor: 'var(--services-bg)', 
      position: 'relative',
      padding: '8rem 0'
    }}>
      {/* Subtle section divider top */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '80px', height: '4px',
        background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
        borderRadius: '2px'
      }}></div>

      <div className="container">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <span className="section-badge">
            {i18n.language === 'ar' ? '✦ ما نقدمه' : '✦ What We Offer'}
          </span>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            marginBottom: '1rem', 
            color: 'var(--secondary-color)',
            letterSpacing: '-0.03em',
            fontWeight: '800'
          }}>
            {t('services.title')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto', fontSize: '1.125rem', lineHeight: '1.8' }}>
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', 
            gap: '2rem'
          }}
        >
          {services.map((service, index) => {
            const IconComp = iconComponents[service.icon];
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <motion.div 
                  style={{
                    padding: '2.5rem 2rem',
                    height: '100%',
                    background: 'var(--card-gradient)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '28px',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: `0 30px 60px var(--card-hover-shadow)`,
                  }}
                >
                  {/* Gradient accent top-right */}
                  <div style={{
                    position: 'absolute', top: 0, insetInlineEnd: 0,
                    width: '100px', height: '100px',
                    background: iconGradients[index],
                    opacity: 0.06,
                    borderStartEndRadius: '28px',
                    borderEndStartRadius: '100%'
                  }}></div>

                  {/* Icon */}
                  <div style={{ 
                    width: '60px', height: '60px', borderRadius: '18px', 
                    background: iconGradients[index],
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.75rem',
                    boxShadow: `0 8px 20px rgba(0,0,0,0.12)`
                  }}>
                    {IconComp && <IconComp size={28} color="#fff" strokeWidth={2.5} />}
                  </div>

                  {/* Content */}
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--secondary-color)', fontWeight: '700' }}>
                    {t(`services.s_${service.id}_title`)}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', flex: 1, fontSize: '0.95rem' }}>
                    {t(`services.s_${service.id}_desc`)}
                  </p>

                  {/* Learn more link */}
                  <Link 
                    to={`/service/${service.id}`}
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '1.5rem', 
                      color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.9rem',
                      textDecoration: 'none',
                      transition: 'gap 0.2s ease'
                    }}
                    onMouseEnter={e => e.currentTarget.style.gap = '0.6rem'}
                    onMouseLeave={e => e.currentTarget.style.gap = '0.35rem'}
                  >
                    {i18n.language === 'ar' ? 'اعرف أكثر' : 'Learn more'} <ArrowRight size={16} strokeWidth={2.5} />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
