import React from 'react';
import { useSelector } from 'react-redux';
import { selectContactInfo } from '../store/appSlice';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const { name } = useSelector(selectContactInfo);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      background: 'var(--hero-bg)',
      backgroundSize: '400% 400%',
      animation: 'gradientBG 15s ease infinite',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Orb 1 */}
      <div style={{
        position: 'absolute', top: '-10%', right: isRTL ? 'auto' : '-5%', left: isRTL ? '-5%' : 'auto',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, var(--orb-1) 0%, transparent 65%)',
        filter: 'blur(50px)', zIndex: 0,
        animation: 'floatOrb 8s ease-in-out infinite'
      }}></div>

      {/* Orb 2 */}
      <div style={{
        position: 'absolute', bottom: '-20%', left: isRTL ? 'auto' : '-10%', right: isRTL ? '-10%' : 'auto',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, var(--orb-2) 0%, transparent 65%)',
        filter: 'blur(60px)', zIndex: 0,
        animation: 'floatOrb 12s ease-in-out infinite reverse'
      }}></div>

      {/* Subtle dot grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(circle, var(--divider) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 2rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          maxWidth: '800px',
          margin: isRTL ? '0 0 0 auto' : '0'
        }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge">
              <Sparkles size={14} />
              {i18n.language === 'ar' ? 'رعاية المسنين المتخصصة' : 'Specialized Geriatric Care'}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', marginBottom: '1.5rem', color: 'var(--secondary-color)', letterSpacing: '-0.03em', fontWeight: '800', lineHeight: 1.08 }}
          >
            {t('hero.compassionate')}{' '}
            <span className="text-gradient">{t('hero.geriatric_care')}</span>{' '}
            {t('hero.trust')}
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '580px', lineHeight: '1.85' }}
          >
            {t('hero.description', { name })}
          </motion.p>

          {/* CTA Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ fontSize: '1.05rem', padding: '0.95rem 2.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {t('hero.get_in_touch')}
              <ArrowRight size={18} strokeWidth={2.5} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontSize: '1.05rem', padding: '0.95rem 2.25rem',
                background: 'var(--glass-bg)', 
                color: 'var(--primary-color)', 
                border: '1.5px solid var(--badge-border)',
                borderRadius: '9999px',
                textDecoration: 'none',
                fontWeight: '600',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.3s ease'
              }}
            >
              {t('hero.our_services')}
            </motion.a>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '3.5rem', flexWrap: 'wrap' }}
          >
            {[
              { num: '24/7', label: i18n.language === 'ar' ? 'رعاية مستمرة' : 'Care Available' },
              { num: '100%', label: i18n.language === 'ar' ? 'اهتمام شخصي' : 'Personal Attention' },
              { num: '5★', label: i18n.language === 'ar' ? 'خدمة موثوقة' : 'Trusted Service' }
            ].map((stat) => (
              <div key={stat.num} style={{
                padding: '0.75rem 1.5rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}>
                <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-color)', lineHeight: 1 }}>{stat.num}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: '600', marginTop: '0.25rem' }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
