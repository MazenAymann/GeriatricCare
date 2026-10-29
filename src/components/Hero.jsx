import React from 'react';
import { useSelector } from 'react-redux';
import { selectContactInfo } from '../store/appSlice';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, HeartPulse, ShieldCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease }
});

const Hero = () => {
  const { phones = [] } = useSelector(selectContactInfo);
  const { t } = useTranslation();

  const stats = [
    { num: `+${Math.max(1, new Date().getFullYear() - 2016)}`, label: t('hero.stat_years') },
    { num: '24/7', label: t('hero.stat_available') },
    { num: '100%', label: t('hero.stat_personal') },
    { num: '5★', label: t('hero.stat_trusted') }
  ];

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span className="eyebrow" {...fadeUp(0)}>
            <span className="eyebrow-dot" />
            {t('hero.badge')}
          </motion.span>

          <motion.h1 {...fadeUp(0.1)}>
            {t('hero.compassionate')}{' '}
            <span className="text-gradient">{t('hero.geriatric_care')}</span>{' '}
            {t('hero.trust')}
          </motion.h1>

          <motion.p className="hero-lead" {...fadeUp(0.2)}>
            {t('hero.description', { name: t('contact.caregiver_name') })}
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.3)}>
            <Link to="/#contact" className="btn btn-primary">
              {t('hero.get_in_touch')}
              <ArrowRight size={18} strokeWidth={2.5} className="btn-arrow flip-rtl" />
            </Link>
            <Link to="/#services" className="btn btn-ghost">
              {t('hero.our_services')}
            </Link>
          </motion.div>

          <motion.dl className="stats" {...fadeUp(0.4)}>
            {stats.map((stat) => (
              <div className="stat" key={stat.num}>
                <dt className="stat-label">{stat.label}</dt>
                <dd className="stat-num ltr">{stat.num}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease }}
        >
          <div className="hero-ring" aria-hidden="true" />
          <div className="hero-blob" aria-hidden="true" />
          <div className="hero-frame">
            <img src="/logo.jpg" alt={t('app.title')} />
          </div>

          <motion.div
            className="float-chip chip-a"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{ opacity: { delay: 0.6, duration: 0.6 }, y: { delay: 0.6, duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <span className="chip-icon accent"><HeartPulse size={19} strokeWidth={2.25} /></span>
            <div>
              <strong>{t('hero.chip_monitoring')}</strong>
              <span>{t('hero.chip_monitoring_sub')}</span>
            </div>
          </motion.div>

          <motion.div
            className="float-chip chip-b"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ opacity: { delay: 0.75, duration: 0.6 }, y: { delay: 0.75, duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <span className="chip-icon leaf"><ShieldCheck size={19} strokeWidth={2.25} /></span>
            <div>
              <strong>{t('hero.chip_certified')}</strong>
              <span>{t('hero.chip_certified_sub')}</span>
            </div>
          </motion.div>

          {phones[0] && (
            <motion.a
              href={`tel:${phones[0]}`}
              className="float-chip chip-c"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{ opacity: { delay: 0.9, duration: 0.6 }, y: { delay: 0.9, duration: 5.5, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <span className="chip-icon brand"><PhoneCall size={19} strokeWidth={2.25} /></span>
              <div>
                <strong>{t('app.call_now')}</strong>
                <span className="ltr" style={{ display: 'block' }}>{phones[0]}</span>
              </div>
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
