import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Hero from './components/Hero';
import { Heart, Globe, Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

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

function App() {
  const { t, i18n } = useTranslation();
  
  // Theme state
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: i18n.language === 'ar' ? 'Tajawal, Inter, sans-serif' : 'Inter, sans-serif' }}>
      <ScrollToHashElement />
      <Helmet>
        <html lang={i18n.language} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} />
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        
        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content={t('seo.title')} />
        <meta property="og:description" content={t('seo.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Birr" />
        <meta property="og:locale" content={i18n.language === 'ar' ? 'ar_EG' : 'en_US'} />
        <meta property="og:image" content="https://geriatriccare.vercel.app/logo.jpg" />
        
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Birr",
              "alternateName": ["بر للتمريض المنزلي", "Birr Care", "Birr Home Nursing"],
              "url": "https://geriatriccare.vercel.app/"
            }
          `}
        </script>
      </Helmet>

      {/* Header */}
      <header style={{ 
        position: 'sticky', 
        top: 0, 
        zIndex: 50, 
        backgroundColor: 'var(--header-bg)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--glass-border)',
        padding: '1rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary-color)', fontWeight: '800', fontSize: '1.3rem', letterSpacing: '-0.02em' }}
          >
            <img src="/logo.jpg" alt="Birr Logo" style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', filter: 'drop-shadow(0 4px 12px rgba(13, 148, 136, 0.1))' }} />
            <span>{t('app.title')}</span>
          </motion.div>

          {/* Nav + Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}
          >
            {/* Nav pill */}
            <nav style={{ 
              display: 'flex', gap: '0.25rem',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '9999px',
              padding: '0.35rem'
            }}>
              {[{ href: '/#services', label: t('app.services') }, { href: '/#contact', label: t('app.contact') }].map(link => (
                <Link key={link.href} to={link.href} style={{ 
                  textDecoration: 'none', color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.9rem',
                  padding: '0.4rem 1rem', borderRadius: '9999px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--badge-bg)'; e.currentTarget.style.color = 'var(--primary-color)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                >{link.label}</Link>
              ))}
            </nav>

            {/* Icon buttons */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={toggleTheme} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--primary-color)',
                width: '40px', height: '40px', borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--badge-bg)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--glass-bg)'}
              >
                {theme === 'light' ? <Moon size={16} strokeWidth={2.5} /> : <Sun size={16} strokeWidth={2.5} />}
              </button>
              <button onClick={toggleLanguage} style={{ 
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                background: 'linear-gradient(135deg, var(--primary-light), var(--primary-color))',
                border: 'none',
                color: '#fff',
                padding: '0.5rem 1.1rem',
                borderRadius: '9999px',
                cursor: 'pointer',
                fontWeight: '700',
                fontSize: '0.875rem',
                boxShadow: '0 4px 14px rgba(13, 148, 136, 0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Globe size={15} strokeWidth={2.5} />
                {i18n.language === 'en' ? 'العربية' : 'English'}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        <Suspense fallback={
          <div style={{ padding: '5rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '4px solid var(--primary-light)', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }}></div>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        }>
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
      <footer style={{ backgroundColor: 'var(--footer-bg)', padding: '3rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary-color)', fontWeight: '800', fontSize: '1.2rem', textAlign: 'center' }}>
            <img src="/logo.jpg" alt="Birr Logo" style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }} />
            {t('app.title')}
          </div>
          
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a 
              href="https://www.facebook.com/share/187ekL8bWW/" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#1877F2'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = '#1877F2'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--glass-bg)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.instagram.com/abdallh.samerr?stkn=MXF0eHhybWczbG5tYQ==" 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => { 
                e.currentTarget.style.background = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'; 
                e.currentTarget.style.color = '#fff'; 
                e.currentTarget.style.borderColor = 'transparent'; 
              }}
              onMouseLeave={e => { 
                e.currentTarget.style.background = 'var(--glass-bg)'; 
                e.currentTarget.style.color = 'var(--text-primary)'; 
                e.currentTarget.style.borderColor = 'var(--glass-border)'; 
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>

          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>&copy; {new Date().getFullYear()} {t('app.rights')}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
