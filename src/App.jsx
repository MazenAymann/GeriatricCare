import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Hero from './components/Hero';
import { Globe, Moon, Sun, Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion, MotionConfig } from 'framer-motion';
import { selectContactInfo } from './store/appSlice';

const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

function App() {
  const { t, i18n } = useTranslation();
  const { phones = [] } = useSelector(selectContactInfo);
  const primaryPhone = phones[0];

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    // html lang is handled by Helmet
  }, [i18n.language]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ScrollToHashElement />
        <Helmet>
          <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
          <title>{t('seo.title')}</title>
          <meta name="description" content={t('seo.description')} />
          <meta name="keywords" content={t('seo.keywords')} />
          <meta name="theme-color" content={theme === 'dark' ? '#061816' : '#f6f8f7'} />

          {/* Open Graph Tags for Social Media Sharing */}
          <meta property="og:title" content={t('seo.title')} />
          <meta property="og:description" content={t('seo.description')} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={t('app.title')} />
          <meta property="og:locale" content={i18n.language === 'ar' ? 'ar_EG' : 'en_US'} />
          <meta property="og:image" content="https://birr-care.vercel.app/logo.jpg" />

          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "${t('app.title')}",
                "alternateName": ["بر للتمريض المنزلي", "Birr Care", "Birr Home Nursing"],
                "url": "https://birr-care.vercel.app/"
              }
            `}
          </script>
        </Helmet>

        {/* Header */}
        <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
          <div className="container header-inner">
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Link to="/" className="brand" aria-label={t('app.title')}>
                <img src="/logo.jpg" alt="" />
                <span className="brand-text">
                  <span className="brand-name">{t('app.brand')}</span>
                  <span className="brand-tagline">{t('app.tagline')}</span>
                </span>
              </Link>
            </motion.div>

            <nav className="main-nav" aria-label="Main">
              <Link to="/#services">{t('app.services')}</Link>
              <Link to="/#contact">{t('app.contact')}</Link>
            </nav>

            <motion.div
              className="header-actions"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <button className="icon-btn" onClick={toggleTheme} aria-label={t('app.toggle_theme')}>
                {theme === 'light' ? <Moon size={17} strokeWidth={2.25} /> : <Sun size={17} strokeWidth={2.25} />}
              </button>
              <button className="lang-btn" onClick={toggleLanguage} aria-label={i18n.language === 'en' ? 'العربية' : 'English'}>
                <Globe size={16} strokeWidth={2.25} />
                <span className="lang-label">{i18n.language === 'en' ? 'العربية' : 'English'}</span>
              </button>
              {primaryPhone && (
                <a href={`tel:${primaryPhone}`} className="btn btn-primary btn-sm header-call">
                  <Phone size={15} strokeWidth={2.5} />
                  {t('app.call_now')}
                </a>
              )}
            </motion.div>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ flex: 1 }}>
          <Suspense fallback={<div className="loader" />}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Services />
                  <Contact />
                </>
              } />
              <Route path="/service/:id" element={<ServiceDetail />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="container footer-grid">
            <div className="footer-about">
              <Link to="/" className="brand">
                <img src="/logo.jpg" alt="" />
                <span className="brand-text">
                  <span className="brand-name">{t('app.brand')}</span>
                  <span className="brand-tagline">{t('app.tagline')}</span>
                </span>
              </Link>
              <p>{t('app.footer_about')}</p>
              <div className="socials">
                <a className="icon-btn fb" href="https://www.facebook.com/share/187ekL8bWW/" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a className="icon-btn ig" href="https://www.instagram.com/abdallh.samerr?stkn=MXF0eHhybWczbG5tYQ==" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>{t('app.quick_links')}</h4>
              <ul>
                <li><Link to="/">{t('app.home')}</Link></li>
                <li><Link to="/#services">{t('app.services')}</Link></li>
                <li><Link to="/#contact">{t('app.contact')}</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>{t('contact.phone_number')}</h4>
              <ul>
                {phones.map(phone => (
                  <li key={phone}><a href={`tel:${phone}`} className="ltr">{phone}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="container footer-bottom">
            <p>&copy; {new Date().getFullYear()} {t('app.rights')}</p>
            <p>{t('hero.badge')}</p>
          </div>
        </footer>

        {primaryPhone && (
          <a
            className="fab"
            href={`https://wa.me/2${primaryPhone}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle size={26} strokeWidth={2.25} />
          </a>
        )}
      </div>
    </MotionConfig>
  );
}

export default App;
