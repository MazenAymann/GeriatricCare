import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "seo": {
        "title": "Birr for Home Nursing and Elderly Care",
        "description": "Compassionate, 24/7 in-home geriatric nursing, medication management, and post-surgery recovery by Abdullah Samir in Almanial, Cairo. Phone: 01115276605 / 01095071065."
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
        "s_nursing_title": "Home Nursing",
        "s_nursing_desc": "Professional nursing care in the comfort of your home.",
        "s_nursing_points": [
          "24/7 continuous monitoring and comprehensive vital signs tracking.",
          "Expert wound care, dressing changes, and post-surgery rehabilitation.",
          "Administration of medications on time with precise dosage control.",
          "Emergency response trained nurses dedicated to patient safety."
        ],
        "s_elderly_title": "Elderly Home Care",
        "s_elderly_desc": "Specialized care, companionship, and support for seniors.",
        "s_elderly_points": [
          "Compassionate companionship to support emotional well-being.",
          "Assistance with daily activities like bathing, dressing, and feeding.",
          "Prevention of falls and creating a safe home environment for seniors.",
          "Engaging memory and mobility exercises tailored for the elderly."
        ],
        "s_doctor_title": "Home Doctor Visit",
        "s_doctor_desc": "Expert medical examination by specialized doctors at your doorstep.",
        "s_doctor_points": [
          "Comprehensive home check-ups by highly qualified specialist doctors.",
          "Accurate diagnosis and personalized treatment plans in your home.",
          "Avoid the hassle of hospital waiting rooms and long commutes.",
          "Direct follow-up on chronic conditions and immediate medical advice."
        ],
        "s_physio_title": "Home Physiotherapy",
        "s_physio_desc": "Rehabilitation and physical therapy sessions at home.",
        "s_physio_points": [
          "Customized physical therapy sessions tailored to patient recovery goals.",
          "Post-stroke and post-fracture rehabilitation to restore mobility.",
          "Pain management techniques and muscle strengthening exercises.",
          "Use of modern portable physical therapy equipment at home."
        ],
        "s_iv_title": "Cannula & IV Fluids",
        "s_iv_desc": "Safe and professional administration of IV fluids and injections.",
        "s_iv_points": [
          "Sterile and pain-free cannula insertion by experienced nurses.",
          "Safe administration of IV fluids, antibiotics, and vitamins.",
          "Continuous monitoring for allergic reactions or complications during infusion.",
          "Hygienic removal of cannula and proper disposal of medical waste."
        ],
        "s_catheter_title": "Urinary Catheter",
        "s_catheter_desc": "Hygienic and expert installation of urinary catheters.",
        "s_catheter_points": [
          "Safe and hygienic insertion or removal of urinary catheters.",
          "Strict adherence to infection control and sterilization protocols.",
          "Patient education on catheter care and hygiene maintenance.",
          "Immediate support for blockages or discomfort issues."
        ],
        "s_xray_title": "Home X-Ray",
        "s_xray_desc": "Fast and reliable X-ray imaging without leaving your home.",
        "s_xray_points": [
          "High-quality digital X-rays performed from the comfort of your bed.",
          "Immediate delivery of X-ray results and digital films to your doctor.",
          "Safe equipment minimizing radiation exposure.",
          "Perfect for immobile, elderly, or severely injured patients."
        ]
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
        "description": "بر للتمريض المنزلي هو مركز متخصص في مجال الرعاية الصحية والطبية المنزلية، حيث يقدم أفضل خدمات التمريض المنزلي ورعاية كبار السن بالمنزل. نقدم خدمات الرعاية المنزلية المحترفة والمخصصة 24 ساعة، مع طاقم تمريض متخصص ومدرب على التعامل مع جميع الحالات باحترافية."
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
        "s_nursing_title": "تمريض منزلي",
        "s_nursing_desc": "تمريض احترافي وعناية طبية شاملة للمريض في راحة بيته.",
        "s_nursing_points": [
          "مراقبة مستمرة على مدار 24 ساعة ومتابعة دقيقة للعلامات الحيوية.",
          "العناية المتخصصة بالجروح وتغيير الضمادات والتأهيل بعد العمليات الجراحية.",
          "إعطاء الأدوية في مواعيدها المحددة بدقة تامة.",
          "طاقم تمريض مدرب على التعامل مع حالات الطوارئ لضمان سلامة المريض."
        ],
        "s_elderly_title": "رعاية مسنين بالمنزل",
        "s_elderly_desc": "رعاية متخصصة، ونس، ومساعدة يومية لكبار السن.",
        "s_elderly_points": [
          "مرافقة ودعم نفسي لتعزيز الراحة النفسية لكبار السن.",
          "المساعدة في الأنشطة اليومية مثل الاستحمام، ارتداء الملابس، والتغذية.",
          "تأمين بيئة المنزل للوقاية من السقوط والحوادث المفاجئة.",
          "تمارين تنشيطية للذاكرة والحركة مصممة خصيصاً لكبار السن."
        ],
        "s_doctor_title": "دكتور كشف منزلي",
        "s_doctor_desc": "كشف طبي متخصص في البيت بواسطة نخبة من الأطباء.",
        "s_doctor_points": [
          "كشف طبي شامل بالمنزل بواسطة نخبة من الأطباء المتخصصين.",
          "تشخيص دقيق ووصف خطط علاجية مخصصة لحالة المريض.",
          "توفير عناء الانتظار في المستشفيات ومجهود التنقل للمريض.",
          "متابعة دورية للأمراض المزمنة واستشارات طبية فورية."
        ],
        "s_physio_title": "علاج طبيعي منزلي",
        "s_physio_desc": "جلسات تأهيل وعلاج طبيعي لاستعادة الحركة والنشاط.",
        "s_physio_points": [
          "جلسات علاج طبيعي مصممة خصيصاً لتناسب أهداف تعافي المريض.",
          "التأهيل الحركي بعد الجلطات والكسور والعمليات الجراحية.",
          "تقنيات متطورة لإدارة الألم وتمارين تقوية العضلات والمفاصل.",
          "استخدام أجهزة علاج طبيعي محمولة وحديثة داخل المنزل."
        ],
        "s_iv_title": "تركيب كانيولا وتعليق محاليل",
        "s_iv_desc": "تركيب الكانيولا وإعطاء المحاليل الوريدية بأمان واحترافية.",
        "s_iv_points": [
          "تركيب كانيولا معقمة وبدون ألم بواسطة تمريض محترف.",
          "تعليق المحاليل الوريدية والمضادات الحيوية والفيتامينات بأمان تام.",
          "المراقبة المستمرة أثناء تلقي المحاليل لتجنب أي مضاعفات.",
          "إزالة الكانيولا بطريقة طبية آمنة والتخلص السليم من المخلفات الطبية."
        ],
        "s_catheter_title": "تركيب القسطرة البولية",
        "s_catheter_desc": "تركيب وتغيير القسطرة البولية بأعلى معايير التعقيم.",
        "s_catheter_points": [
          "تركيب وتغيير أو إزالة القسطرة البولية بأمان واحترافية.",
          "اتباع صارم لبروتوكولات مكافحة العدوى والتعقيم الطبي.",
          "توعية المريض ومرافقيه بكيفية العناية بالقسطرة والنظافة الشخصية.",
          "التدخل السريع والتعامل مع أي انسداد أو شعور بعدم الراحة."
        ],
        "s_xray_title": "أشعة منزلية",
        "s_xray_desc": "خدمات الأشعة المتنقلة بدقة وسرعة وبدون الحاجة لزيارة المستشفى.",
        "s_xray_points": [
          "عمل أشعة ديجيتال عالية الجودة والمريض في سريره بكل راحة.",
          "تسليم فوري لنتائج الأشعة والأفلام للطبيب المعالج.",
          "استخدام أجهزة آمنة تضمن الحد الأدنى من التعرض للإشعاع.",
          "الحل الأمثل للمرضى كبار السن أو من يعانون من صعوبة في الحركة."
        ]
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
