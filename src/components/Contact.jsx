import React from 'react';
import { useSelector } from 'react-redux';
import { selectContactInfo } from '../store/appSlice';
import { Phone, MapPin, User, Navigation, ArrowRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Contact = () => {
  const info = useSelector(selectContactInfo);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: isRTL ? 40 : -40, filter: 'blur(10px)' },
    show: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="contact" className="section" style={{ 
      background: 'var(--contact-bg)',
      position: 'relative',
      padding: '8rem 0',
      overflow: 'hidden'
    }}>
      {/* Decorative Orbs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(13, 148, 136, 0.15) 0%, rgba(13, 148, 136, 0) 70%)',
        filter: 'blur(60px)',
        zIndex: 0,
        animation: 'floatOrb 10s ease-in-out infinite'
      }}></div>
      
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0) 70%)',
        filter: 'blur(50px)',
        zIndex: 0,
        animation: 'floatOrb 12s ease-in-out infinite reverse'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--secondary-color)', letterSpacing: '-0.03em', fontWeight: '800' }}
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          {/* Contact Details Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            {/* Caregiver Card */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.03, y: -5, boxShadow: '0 20px 40px var(--card-hover-shadow)' }} 
              style={{ 
                background: 'var(--glass-bg)', 
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid var(--glass-border)',
                padding: '2rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem', 
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'linear-gradient(135deg, var(--primary-light), var(--primary-color))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 25px rgba(13, 148, 136, 0.3)' }}>
                <User size={32} color="#fff" strokeWidth={2.5} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem', fontWeight: '600' }}>{t('contact.primary_caregiver')}</h4>
                <p style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--secondary-color)', letterSpacing: '-0.02em' }}>{t('contact.caregiver_name')}</p>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.02, y: -5, boxShadow: '0 20px 40px var(--card-hover-shadow)' }} 
              style={{ 
                background: 'var(--glass-bg)', 
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid var(--glass-border)',
                padding: '2rem', 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1.5rem' 
              }}
            >
              <motion.div 
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, delay: 2, repeat: Infinity, repeatDelay: 5 }}
                style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 25px rgba(15, 23, 42, 0.4)' }}
              >
                <Phone size={32} color="#fff" strokeWidth={2.5} />
              </motion.div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem', fontWeight: '600' }}>{t('contact.phone_number')}</h4>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  {info.phones && info.phones.map((phone, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.03, backgroundColor: 'var(--badge-bg)' }}
                      style={{ 
                        background: 'rgba(255,255,255,0.02)', 
                        border: '1px solid var(--glass-border)',
                        borderRadius: '16px', 
                        padding: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      {/* Sub-bg glow */}
                      <div style={{ position: 'absolute', top: '-50%', right: '-50%', width: '100px', height: '100px', background: 'var(--primary-color)', filter: 'blur(40px)', opacity: 0.1, zIndex: 0 }}></div>
                      
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <a href={`tel:${phone}`} dir="ltr" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.4rem', fontWeight: '800', color: 'var(--secondary-color)', textDecoration: 'none', letterSpacing: '-0.02em', transition: 'color 0.2s ease' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-color)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--secondary-color)'}
                        >
                          {phone}
                        </a>
                      </div>

                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <motion.a 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={`https://wa.me/2${phone}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                            background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.15), rgba(18, 140, 126, 0.15))', 
                            border: '1px solid rgba(37, 211, 102, 0.3)',
                            color: '#25D366', 
                            padding: '0.6rem 1rem', 
                            borderRadius: '12px',
                            textDecoration: 'none', 
                            fontSize: '0.875rem', 
                            fontWeight: '700',
                            width: '100%',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = '#fff'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, rgba(37, 211, 102, 0.15), rgba(18, 140, 126, 0.15))'; e.currentTarget.style.color = '#25D366'; }}
                        >
                          <MessageCircle size={18} strokeWidth={2.5} />
                          WhatsApp
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div 
              variants={itemVariants} 
              whileHover={{ scale: 1.03, y: -5, boxShadow: '0 20px 40px var(--card-hover-shadow)' }} 
              onClick={() => window.open(`https://maps.google.com/maps?q=${info.mapQuery}`, '_blank', 'noopener,noreferrer')}
              style={{ 
                background: 'var(--glass-bg)', 
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid var(--glass-border)',
                padding: '2rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1.5rem', 
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'linear-gradient(135deg, #f59e0b, #b45309)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 10px 25px rgba(245, 158, 11, 0.3)' }}>
                <MapPin size={32} color="#fff" strokeWidth={2.5} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem', fontWeight: '600' }}>{t('contact.location')}</h4>
                <p style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--secondary-color)', marginBottom: '0.25rem', lineHeight: '1.4' }}>{info.address}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontSize: '0.875rem', fontWeight: '600' }}>
                  <Navigation size={14} />
                  <span dir="ltr">{info.coordinates}</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
          
          {/* Map Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 40 }}
            style={{ 
              height: '100%',
              minHeight: '450px',
              position: 'relative'
            }}
          >
            {/* Map Glow */}
            <div style={{
              position: 'absolute',
              inset: '-10px',
              background: 'linear-gradient(135deg, var(--primary-light), var(--primary-color))',
              filter: 'blur(30px)',
              opacity: 0.3,
              borderRadius: '40px',
              zIndex: 0
            }}></div>

            <div style={{ 
              width: '100%', 
              height: '100%', 
              borderRadius: '32px', 
              overflow: 'hidden', 
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
              position: 'relative',
              background: 'var(--map-border)',
              border: '10px solid var(--map-border)',
              zIndex: 1
            }}>
              <iframe 
                src={`https://maps.google.com/maps?q=${info.mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '450px', filter: 'contrast(1.1) saturation(1.1)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              
              <motion.div 
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open(`https://maps.google.com/maps?q=${info.mapQuery}`, '_blank', 'noopener,noreferrer')}
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  insetInlineEnd: '1.5rem',
                  background: 'var(--glass-bg)',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--primary-color)',
                  cursor: 'pointer'
                }}
              >
                {t('contact.location')}
                <motion.div
                  animate={{ x: isRTL ? [-5, 0, -5] : [5, 0, 5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} strokeWidth={3} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
