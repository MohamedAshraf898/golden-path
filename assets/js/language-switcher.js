/**
 * Language Switcher for Arabic/English Support
 * Handles language switching, RTL/LTR direction, and content translation
 */

(function() {
    'use strict';

    // Translation object
    const translations = {
        en: {
            // Navigation
            'nav-home': 'Home',
            'nav-about': 'About',
            'nav-services': 'Services',
            'nav-projects': 'Projects',
            'nav-testimonials': 'Testimonials',
            'nav-contact': 'Contact',
            
            // Header
            'header-call': 'Call Us Now',
            'header-location': 'Riyadh,',
            'header-country': 'Saudi Arabia',
            
            // Slider
            'slide1-h3': 'Your Roads Are Safe',
            'slide1-h2': 'In Our Hands',
            'slide1-p': 'We deliver high-quality traffic signs, cat eyes, and road safety systems engineered for durability and trusted across the Kingdom.',
            'slide2-h3': 'Safety Starts With Us',
            'slide2-h2': 'Precision You Can Rely On',
            'slide2-p': 'From fabrication to installation, our team provides complete, reliable road-safety solutions built to meet national and international standards.',
            'slide3-h3': 'Engineering Safer Journeys',
            'slide3-h2': 'Every Road, Every Driver.',
            'slide3-p': 'We design and manufacture advanced signage and safety products that protect communities and support Saudi Arabia\'s infrastructure development.',
            'btn-contact': 'Contact us',
            
            // About Section
            'about-welcome': 'WELCOME TO',
            'about-title': 'GOLDEN PATH SIGNS<br> COMPANY',
            'about-text': 'Golden Path Signs is a Saudi LLC specializing in reliable road-safety systems and traffic signage. We deliver solutions that support safer roads and stronger infrastructure across the Kingdom.',
            'about-item1': 'Traffic Signs Manufacturing',
            'about-item2': 'Road Stud Solutions',
            'about-item3': 'Steel Fabrication',
            'about-item4': 'Advertising & Promotion',
            
            // Fact Counter
            'fact-exp': 'Years Of Experience',
            'fact-clients': 'Happy Clients',
            'fact-projects': 'Complete Project',
            'fact-support': 'Instant Support',
            
            // Services
            'services-title': 'Professional Safety Services',
            'service1-title': 'Traffic Signs Manufacturing',
            'service1-desc': 'High-quality standard and custom road signs produced using durable materials and reflective technology that meets international safety standards.',
            'service2-title': 'Cat Eyes & Road Stud Installation',
            'service2-desc': 'Premium reflective studs engineered for visibility, stability, and long-term road performance — supplied and installed by our professional team.',
            'service3-title': 'Steel Fabrication & Safety Barriers',
            'service3-desc': 'Custom steel structures, fences, and impact-resistant safety barriers designed to support construction, highways, and infrastructure projects.',
            'service4-title': 'Advertising & Promotional Signage',
            'service4-desc': 'We design, manufacture, and install advertising and promotional signage for shops, roads, and commercial locations—delivering clear, durable, and high-visibility brand communication.',
            'service5-title': 'Engineering, Design & Consultation',
            'service5-desc': 'Specialized engineering assessments, safety planning, and custom design services tailored to the needs of each road, site, or project.',
            
            // Projects
            'projects-title': 'Our Lastest Works',
            'project-tab1': 'TRAFFIC SIGNS',
            'project-tab2': 'CAT EYES & ROAD STUDS',
            'project-tab3': 'Safety Barriers & Steel Fabrication',
            'project-tab4': 'Engineering, Design & Consultation',
            'project1-title': 'TRAFFIC SIGNS',
            'project1-desc': 'We manufacture and install both standard and custom road signs for highways, streets, and municipal roads. Our signs are durable, reflective, and designed to meet international safety standards.',
            'project2-title': 'Cat Eyes & Road Studs',
            'project2-desc': 'Reflective road studs, also known as cat eyes, guide drivers safely at night and in lowvisibility conditions. They are essential for lane guidance and accident prevention.',
            'project3-title': 'Safety Barriers & Steel Fabrication',
            'project3-desc': 'We provide durable safety barriers, crash cushions, and custom steel structures for roads and infrastructure. All components are locally fabricated with strict quality control to ensure strength, precision, and long-lasting performance.',
            'project4-title': 'Engineering, Design & Consultation',
            'project4-desc': 'We offer expert engineering support, traffic sign design, and professional consultation to ensure every project meets safety standards and delivers reliable, efficient results.',
            
            // Testimonials
            'testimonials-title': 'What Our Clients Say',
            'testimonial1-title': 'Road Projects Supervisor',
            'testimonial1-name': 'Mohammed Al‑Qahtani',
            'testimonial1-text': 'We worked with Golden Path Signs on a highway signage project. The team was responsive, quick in communication, and the final installation was solid. The quality of the reflective signs was noticeably better than what we used before.',
            'testimonial2-title': 'Safety & Compliance Officer',
            'testimonial2-name': 'Noura Al‑Saad',
            'testimonial2-text': 'Their cat‑eyes and warning signs were delivered on time and with proper packaging. What stood out for me was how their technical team explained each step clearly. It made the whole approval process much easier for us.',
            'testimonial3-title': 'Civil Engineer',
            'testimonial3-name': 'Eng. Abdulrahman Al‑Harbi',
            'testimonial3-text': 'We requested custom steel fabrication for one of our sites. The measurements were accurate and the finish was clean. Honestly, the project ran smoother than expected. Definitely a reliable supplier',
            'testimonial4-title': 'Contractor',
            'testimonial4-name': 'Fahad Al‑Otaibi',
            'testimonial4-text': 'Golden Path Signs handled the installation of directional signs for our urban development project. The crew arrived early, worked efficiently, and left the site clean. It\'s rare to find that level of professionalism.',
            'testimonial5-title': 'Municipal Services Dept',
            'testimonial5-name': 'Meshael Al‑Rashid',
            'testimonial5-text': 'We needed emergency replacements for damaged road signs. They managed to deliver within 48 hours, which helped us avoid delays. Good communication and trustworthy service.',
            
            // Footer
            'footer-tagline': 'Engineering safer roads, one sign at a time.',
            'footer-office': 'Head Office: Riyadh, Saudi Arabia',
            'footer-email': 'Email:',
            'footer-follow': 'Follow Us:',
            'footer-services-title': 'Our Services',
            'footer-services-home': 'Home',
            'footer-services-about': 'About',
            'footer-services-services': 'Services',
            'footer-services-works': 'Works',
            'footer-services-testimonials': 'Testimonials',
            'footer-copyright': 'Copyrights © 2025 All Rights Reserved.',
            'footer-company': 'Golden Signs',
            'footer-madeby': 'Made by',
            
            // Mobile Menu
            'mobile-lang-title': 'Language'
        },
        ar: {
            // Navigation
            'nav-home': 'الرئيسية',
            'nav-about': 'من نحن',
            'nav-services': 'الخدمات',
            'nav-projects': 'المشاريع',
            'nav-testimonials': 'الشهادات',
            'nav-contact': 'اتصل بنا',
            
            // Header
            'header-call': 'اتصل بنا الآن',
            'header-location': 'الرياض،',
            'header-country': 'المملكة العربية السعودية',
            
            // Slider
            'slide1-h3': 'طرقك آمنة',
            'slide1-h2': 'بين أيدينا',
            'slide1-p': 'نقدم لوحات مرورية عالية الجودة، وعواكس طرق، وأنظمة سلامة مرورية مصممة لتحمّل الظروف المختلفة، وموثوق بها في جميع أنحاء المملكة.',
            'slide2-h3': 'السلامة تبدأ معنا',
            'slide2-h2': 'دقة يمكنك الاعتماد عليها',
            'slide2-p': 'من التصنيع إلى التركيب، يقدّم فريقنا حلول سلامة مرورية متكاملة وموثوقة، مطابقة للمعايير الوطنية والدولية.',
            'slide3-h3': 'نصنع الأمان على الطريق',
            'slide3-h2': 'لكل طريق. ولكل سائق.',
            'slide3-p': 'حلول متقدمة في لوحات المرور وأنظمة السلامة، مصمّمة لحماية المجتمعات ودعم مشاريع البنية التحتية في المملكة العربية السعودية.',
            'btn-contact': 'اتصل بنا',
            
            // About Section
            'about-welcome': 'مرحباً بكم في',
            'about-title': 'شركة المسار الذهبي<br> للوحات',
            'about-text': 'شركة المسار الذهبي للوحات هي شركة سعودية ذات مسؤولية محدودة، متخصصة في أنظمة السلامة المرورية ولوحات الطرق. نقدم حلولًا تدعم طرقًا أكثر أمانًا وبنية تحتية أقوى في جميع أنحاء المملكة.',
            'about-item1': 'تصنيع لوحات المرور',
            'about-item2': 'حلول عواكس طرق',
            'about-item3': 'تصنيع الهياكل الفولاذية وحواجز السلامة',
            'about-item4': 'لوحات الدعاية والترويج',
            
            // Fact Counter
            'fact-exp': 'سنوات من الخبرة',
            'fact-clients': 'عميل سعيد',
            'fact-projects': 'مشروع مكتمل',
            'fact-support': 'دعم فوري',
            
            // Services
            'services-title': 'خدمات السلامة الاحترافية',
            'service1-title': 'تصنيع لوحات الطرق',
            'service1-desc': 'نقوم بتصنيع لوحات طرق قياسية ومخصصة باستخدام مواد متينة وتقنيات عاكسة، مطابقة لمعايير السلامة الدولية.',
            'service2-title': 'تركيب عواكس الطرق',
            'service2-desc': 'عواكس عالية الجودة مصممة لتعزيز الرؤية والثبات والأداء طويل الأمد، مع توريد وتركيب احترافي.',
            'service3-title': 'تصنيع الهياكل الفولاذية وحواجز السلامة',
            'service3-desc': 'هياكل فولاذية مخصصة، وأسوار، وحواجز سلامة مقاومة للصدمات، لدعم مشاريع الطرق والبنية التحتية.',
            'service4-title': 'لوحات الدعاية والترويج',
            'service4-desc': 'نقوم بتصميم وتصنيع وتركيب لوحات الدعاية والإعلان للمحال التجارية والطرق والمواقع التجارية، مع تقديم رسائل واضحة، متينة، وعالية الوضوح تعزز حضور العلامة التجارية.',
            'service5-title': 'الهندسة والتصميم والاستشارات',
            'service5-desc': 'تقييمات هندسية متخصصة، وتخطيط للسلامة، وخدمات تصميم مخصصة لكل طريق أو موقع أو مشروع.',
            
            // Projects
            'projects-title': 'أحدث مشاريعنا',
            'project-tab1': 'لوحات الطرق',
            'project-tab2': 'عواكس الطرق',
            'project-tab3': ' حواجز السلامة والتصنيع الفولاذي',
            'project-tab4': 'الهندسة والتصميم والاستشارات',
            'project1-title': 'لوحات الطرق',
            'project1-desc': 'نقوم بتصنيع وتركيب لوحات طرق قياسية ومخصصة للطرق السريعة والشوارع والطرق البلدية، بمواد متينة وعاكسة مطابقة للمعايير الدولية.',
            'project2-title': ' عواكس الطرق ',
            'project2-desc': 'تساعد العواكس الأرضية السائقين على القيادة الآمنة ليلًا وفي ظروف الرؤية المحدودة، وهي عنصر أساسي لتوجيه المسارات والحد من الحوادث.',
            'project3-title': 'حواجز السلامة والتصنيع الفولاذي',
            'project3-desc': 'نوفر حواجز سلامة متينة، ومصدّات صدمات، وهياكل فولاذية مخصصة للطرق والبنية التحتية، مع تصنيع محلي ورقابة جودة صارمة.',
            'project4-title': 'الهندسة والتصميم والاستشارات',
            'project4-desc': 'نقدّم دعمًا هندسيًا متخصصًا، وتصميم لوحات مرورية، واستشارات احترافية لضمان مطابقة المشاريع لمعايير السلامة وتحقيق أفضل النتائج.',
            
            // Testimonials
            'testimonials-title': 'آراء عملائنا',
            'testimonial1-title': 'مشرف مشاريع الطرق',
            'testimonial1-name': 'محمد القحطاني',
            'testimonial1-text': 'عملنا مع شركة المسار الذهبي للوحات في مشروع لوحات طريق سريع. كان الفريق سريع الاستجابة، والتواصل ممتاز، والتنفيذ النهائي متقن. جودة اللوحات العاكسة كانت أفضل مما استخدمناه سابقًا.',
            'testimonial2-title': 'مسؤولة السلامة والامتثال',
            'testimonial2-name': 'نورة السعد',
            'testimonial2-text': 'تم تسليم عواكس الطرق ولوحات التحذير في الوقت المحدد وبشكل منظم. أكثر ما أعجبني هو وضوح الشرح من الفريق الفني، مما سهّل إجراءات الاعتماد.',
            'testimonial3-title': 'مهندس مدني',
            'testimonial3-name': 'م. عبدالرحمن الحربي',
            'testimonial3-text': 'طلبنا تصنيعًا فولاذيًا مخصصًا لأحد المواقع، وكانت القياسات دقيقة والتشطيب ممتاز. المشروع سار بسلاسة أكبر من المتوقع.',
            'testimonial4-title': 'مقاول',
            'testimonial4-name': 'فهد العتيبي',
            'testimonial4-text': 'تولى فريق المسار الذهبي تركيب اللوحات الإرشادية لمشروع تطوير حضري. التزام بالمواعيد، كفاءة عالية، وتنظيم ممتاز في الموقع.',
            'testimonial5-title': 'إدارة الخدمات البلدية',
            'testimonial5-name': 'مشاعل الراشد',
            'testimonial5-text': 'احتجنا إلى استبدال عاجل للوحات طرق متضررة، وتم التنفيذ خلال 48 ساعة. تواصل ممتاز وخدمة موثوقة.',
            
            // Footer
            'footer-tagline': 'نبني طرقًا أكثر أمانًا، بمعايير هندسية دقيقة.',
            'footer-office': 'المكتب الرئيسي: الرياض، المملكة العربية السعودية',
            'footer-email': 'البريد الإلكتروني:',
            'footer-follow': 'تابعنا:',
            'footer-services-title': 'خدماتنا',
            'footer-services-home': 'الرئيسية',
            'footer-services-about': 'من نحن',
            'footer-services-services': 'الخدمات',
            'footer-services-works': 'الأعمال',
            'footer-services-testimonials': 'الشهادات',
            'footer-copyright': 'جميع الحقوق محفوظة © 2025',
            'footer-company': 'المسار الذهبي للوحات',
            'footer-madeby': 'صُنع بواسطة',
            
            // Mobile Menu
            'mobile-lang-title': 'اللغة / Language'
        }
    };

    // Language Switcher Class
    class LanguageSwitcher {
        constructor() {
            this.currentLang = localStorage.getItem('language') || 'en';
            this.init();
        }

        init() {
            // Apply saved language on page load
            this.switchLanguage(this.currentLang, false);
            
            // Set up language switcher button
            this.setupSwitcherButton();
            
            // Set up mobile menu language switcher
            this.setupMobileLanguageSwitcher();
        }

        setupSwitcherButton() {
            // Create language switcher button if it doesn't exist
            if (!document.querySelector('.language-switcher-btn')) {
                const switcherBtn = document.createElement('div');
                switcherBtn.className = 'language-switcher-btn';
                const btn = document.createElement('button');
                btn.className = 'lang-btn';
                btn.textContent = this.currentLang === 'en' ? 'EN' : 'AR';
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.toggleLanguage();
                });
                switcherBtn.appendChild(btn);
                
                // Add to header - find the outer-box in header-lawer
                const headerLawer = document.querySelector('.header-lawer .outer-box');
                if (headerLawer) {
                    // Check if header-lawer-right already exists
                    let headerLawerRight = headerLawer.querySelector('.header-lawer-right');
                    if (!headerLawerRight) {
                        headerLawerRight = document.createElement('div');
                        headerLawerRight.className = 'header-lawer-right';
                        headerLawerRight.style.float = 'right';
                        headerLawerRight.style.padding = '15px 0';
                        headerLawer.appendChild(headerLawerRight);
                    }
                    headerLawerRight.appendChild(switcherBtn);
                }
            }
        }

        setupMobileLanguageSwitcher() {
            // Set up mobile menu language buttons
            const mobileLangButtons = document.querySelectorAll('.mobile-lang-btn');
            mobileLangButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const lang = btn.getAttribute('data-lang');
                    if (lang && lang !== this.currentLang) {
                        this.switchLanguage(lang, true);
                    }
                });
            });
            
            // Update mobile language switcher active state
            this.updateMobileLanguageSwitcher();
        }

        updateMobileLanguageSwitcher() {
            const mobileLangButtons = document.querySelectorAll('.mobile-lang-btn');
            mobileLangButtons.forEach(btn => {
                const lang = btn.getAttribute('data-lang');
                if (lang === this.currentLang) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }

        toggleLanguage() {
            const newLang = this.currentLang === 'en' ? 'ar' : 'en';
            this.switchLanguage(newLang, true);
        }

        switchLanguage(lang, save = true) {
            this.currentLang = lang;
            
            // Update HTML lang attribute and direction
            document.documentElement.lang = lang;
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            
            // Toggle RTL class on body and main wrapper
            const body = document.body;
            const wrapper = document.querySelector('.boxed_wrapper');
            
            if (lang === 'ar') {
                body.classList.add('rtl');
                if (wrapper) wrapper.classList.add('rtl');
            } else {
                body.classList.remove('rtl');
                if (wrapper) wrapper.classList.remove('rtl');
            }
            
            // Update all elements with data-i18n attribute
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    const translation = translations[lang][key];
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translation;
                    } else {
                        // Use innerHTML to support HTML content like <br> tags
                        element.innerHTML = translation;
                    }
                }
            });
            
            // Update language switcher button
            const langBtn = document.querySelector('.lang-btn');
            if (langBtn) {
                langBtn.textContent = lang === 'en' ? 'EN' : 'AR';
            }
            
            // Update mobile language switcher
            this.updateMobileLanguageSwitcher();
            
            // Force update mobile menu items (they're cloned, so we need to update them separately)
            // The main menu items are already updated above, but mobile menu is a clone
            // So we need to update the cloned items in mobile menu as well
            document.querySelectorAll('.mobile-menu [data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    const translation = translations[lang][key];
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translation;
                    } else {
                        element.innerHTML = translation;
                    }
                }
            });
            
            // Save preference
            if (save) {
                localStorage.setItem('language', lang);
            }
            
            // Trigger custom event for other scripts
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
        }

        getCurrentLanguage() {
            return this.currentLang;
        }
    }

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.languageSwitcher = new LanguageSwitcher();
        });
    } else {
        window.languageSwitcher = new LanguageSwitcher();
    }

})();

