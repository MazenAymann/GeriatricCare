import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "seo": {
        "title": "Birr for Home Nursing and Elderly Care",
        "description": "Compassionate, 24/7 in-home geriatric nursing, medication management, and post-surgery recovery by Abdullah Samir in Almanial, Cairo."
      },
      "app": {
        "title": "Birr for Home Nursing and Elderly Care",
        "services": "Services",
        "contact": "Contact",
        "rights": "Geriatric Care by Abdullah Samir. All rights reserved."
      },
      "hero": {
        "compassionate": "Compassionate",
        "geriatric_care": "Geriatric Care",
        "trust": "You Can Trust",
        "description": "Professional, dedicated nursing services by {{name}}. Providing round-the-clock comfort, safety, and specialized care for your loved ones in the comfort of their home.",
        "get_in_touch": "Get in Touch",
        "our_services": "Our Services"
      },
      "services": {
        "title": "Our Specialized Services",
        "subtitle": "Tailored geriatric nursing care designed to promote independence, health, and well-being.",
        "s1_title": "24/7 Home Care",
        "s1_desc": "Round-the-clock professional nursing care in the comfort of your home.",
        "s2_title": "Medication Management",
        "s2_desc": "Expert administration and tracking of daily medications and vitals.",
        "s3_title": "Post-Surgery Recovery",
        "s3_desc": "Specialized assistance and rehabilitation support after medical procedures.",
        "s4_title": "Companionship",
        "s4_desc": "Compassionate emotional support and assistance with daily activities."
      },
      "contact": {
        "caregiver_name": "Abdullah Samir",
        "title": "Get In Touch",
        "subtitle": "We're here to help. Contact us to discuss your care needs.",
        "primary_caregiver": "Primary Caregiver",
        "phone_number": "Phone Number",
        "location": "Location"
      }
    }
  },
  ar: {
    translation: {
      "seo": {
        "title": "بر للتمريض المنزلي ورعايه المسنين بالمنزل",
        "description": "رعاية مسنين 24 ساعة في البيت، تظبيط أدوية، ومتابعة بعد العمليات مع عبدالله سمير في المنيل، القاهرة."
      },
      "app": {
        "title": "بر للتمريض المنزلي ورعايه المسنين بالمنزل",
        "services": "خدماتنا",
        "contact": "كلمنا",
        "rights": "رعاية المسنين مع عبدالله سمير. كل الحقوق محفوظة."
      },
      "hero": {
        "compassionate": "رعاية مسنين",
        "geriatric_care": "بأمانة",
        "trust": "تطمن بيها على الغاليين",
        "description": "تمريض ممتاز واهتمام شخصي مع {{name}}. بنوفرلك الراحة، الأمان، ورعاية 24 ساعة للغاليين عليك وهمّا في بيتهم.",
        "get_in_touch": "كلمنا دلوقتي",
        "our_services": "إيه اللي بنقدمه"
      },
      "services": {
        "title": "خدماتنا المتميزة",
        "subtitle": "رعاية تمريضية متفصلة عشان صحة وراحة الغاليين عليك.",
        "s1_title": "رعاية في البيت 24/7",
        "s1_desc": "تمريض احترافي طول اليوم وهما في بيتهم وسط أهلهم.",
        "s2_title": "متابعة الأدوية",
        "s2_desc": "متابعة وتظبيط مواعيد الأدوية والعلامات الحيوية بالمللي.",
        "s3_title": "متابعة بعد العمليات",
        "s3_desc": "مساعدة وتأهيل ممتاز عشان نعدي فترة ما بعد العملية بأمان.",
        "s4_title": "الونس والمرافقة",
        "s4_desc": "دعم نفسي وونس ومساعدة في كل حاجة بيحتاجوها في يومهم."
      },
      "contact": {
        "caregiver_name": "عبدالله سمير",
        "title": "عايز تكلمنا؟",
        "subtitle": "إحنا دايماً معاك وفي خدمتك.. كلمنا في أي وقت.",
        "primary_caregiver": "الممرض المسؤول",
        "phone_number": "رقم التليفون",
        "location": "العنوان"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'ar', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
