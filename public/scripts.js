// scripts.js
// This file provides basic interactivity for the VDS Law Firm website.
// It handles toggling the mobile navigation menu and intercepts the
// contact form submission to display a confirmation message instead of
// actually sending data (since back‑end processing is outside the scope
// of this prototype).

// Translations object
const translations = {
  nl: {
    nav: {
      home: 'Home',
      about: 'Over\u00a0Ons',
      practice: 'Rechtsgebieden',
      team: 'Ons\u00a0Team',
      contact: 'Contact'
    },
    hero: {
      title: 'Legal Expertise with You in Mind',
      subtitle: 'Advocatenkantoor van\u00a0Dijk–Silos (VDS Law Firm) biedt al meer dan twintig jaar deskundige juridische diensten in Suriname en daarbuiten.',
      cta: 'Contacteer\u00a0Ons'
    },
    about: {
      title: 'Over\u00a0Ons',
      p1: 'VDS\u00a0Law\u00a0Firm, ook bekend als \'Advocatenkantoor van\u00a0Dijk–Silos\', is een advocatenkantoor dat meer dan twintig jaar gespecialiseerd is in verschillende rechtsdomeinen, met een bijzondere ervaring binnen het civiele recht. Door onze discrete, betrouwbare en deskundige aanpak hebben we cliënten en referenties opgebouwd in Suriname en vele andere landen.',
      p2: 'Onze uitgebreide samenstelling van specialisaties stelt ons in staat om vrijwel alle soorten zaken te behandelen: van eenvoudig juridisch advies, onderhandelingen en het opstellen van overeenkomsten tot de volledige afhandeling van rechtszaken. Momenteel werken we samen met Andersen\u00a0Global in Suriname.'
    },
    practice: {
      title: 'Rechtsgebieden',
      subtitle: 'Onze dienstverlening raakt onder andere de volgende rechtsgebieden:',
      contract: 'Contractenrecht',
      commercial: 'Handelsrecht',
      competition: '(Oneerlijke) concurrentie',
      international: 'Internationaal recht',
      family: 'Personen & familierecht',
      rent: 'Huurrecht',
      property: 'Zakenrecht',
      corporate: 'Corporate\u00a0Law',
      labor: 'Arbeidsrecht',
      debt: 'Schuldvorderingen'
    },
    team: {
      title: 'Ons\u00a0Team',
      jennifer: {
        bio: 'Mr.\u00a0Dr.\u00a0Jennifer\u00a0van\u00a0Dijk–Silos werd geboren op 13\u00a0december 1954 in Suriname en behaalde haar bachelors in Spaans en rechten aan de Rijksuniversiteit van Groningen (Nederland) in 1978; haar meestertitel behaalde zij aan de Anton de\u00a0Kom Universiteit van Suriname in 1982.'
      },
      nailah: {
        bio: 'Nailah\u00a0U.\u00a0van\u00a0Dijk is advocaat en managing partner bij Lawfirm\u00a0van\u00a0Dijk–Silos. Zij behaalde haar master in de rechtsgeleerdheid aan de Anton de Kom Universiteit van Suriname in 2009 en heeft sindsdien uitgebreide ervaring opgedaan in arbitrage, bemiddeling, onderhandelingen en litigation.'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'We care about your case as much as you do. Neem vandaag nog contact met ons op.',
      form: {
        name: 'Naam',
        namePlaceholder: 'Uw naam',
        email: 'E‑mail',
        emailPlaceholder: 'Uw e‑mail',
        message: 'Bericht',
        messagePlaceholder: 'Uw bericht',
        submit: 'Verzenden',
        successMessage: 'Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.'
      }
    },
    footer: {
      copyright: '\u00a9\u00a02025 Advocatenkantoor van\u00a0Dijk–Silos. Alle rechten voorbehouden.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About\u00a0Us',
      practice: 'Practice\u00a0Areas',
      team: 'Our\u00a0Team',
      contact: 'Contact'
    },
    hero: {
      title: 'Legal Expertise with You in Mind',
      subtitle: 'Advocatenkantoor van\u00a0Dijk–Silos (VDS Law Firm) has provided expert legal services in Suriname and beyond for over twenty years.',
      cta: 'Contact\u00a0Us'
    },
    about: {
      title: 'About\u00a0Us',
      p1: 'VDS\u00a0Law\u00a0Firm, also known as \'Advocatenkantoor van\u00a0Dijk–Silos\', is a law firm specialized in various legal domains for over twenty years, with particular expertise in civil law. Through our discreet, reliable, and expert approach, we have built clients and referrals in Suriname and many other countries.',
      p2: 'Our extensive range of specialties enables us to handle virtually all types of cases: from simple legal advice, negotiations, and drafting agreements to the complete handling of legal proceedings. We currently work together with Andersen\u00a0Global in Suriname.'
    },
    practice: {
      title: 'Practice\u00a0Areas',
      subtitle: 'Our services cover the following legal areas:',
      contract: 'Contract Law',
      commercial: 'Commercial Law',
      competition: '(Unfair) Competition',
      international: 'International Law',
      family: 'Family Law',
      rent: 'Tenancy Law',
      property: 'Property Law',
      corporate: 'Corporate\u00a0Law',
      labor: 'Labor Law',
      debt: 'Debt Collection'
    },
    team: {
      title: 'Our\u00a0Team',
      jennifer: {
        bio: 'Mr.\u00a0Dr.\u00a0Jennifer\u00a0van\u00a0Dijk–Silos was born on December\u00a013, 1954 in Suriname and obtained her bachelor\'s degrees in Spanish and law from the University of Groningen (Netherlands) in 1978; she obtained her master\'s degree from the Anton de\u00a0Kom University of Suriname in 1982.'
      },
      nailah: {
        bio: 'Nailah\u00a0U.\u00a0van\u00a0Dijk is an attorney and managing partner at Lawfirm\u00a0van\u00a0Dijk–Silos. She obtained her master\'s degree in law from the Anton de Kom University of Suriname in 2009 and has since gained extensive experience in arbitration, mediation, negotiations, and litigation.'
      }
    },
    contact: {
      title: 'Contact',
      subtitle: 'We care about your case as much as you do. Contact us today.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'Your email',
        message: 'Message',
        messagePlaceholder: 'Your message',
        submit: 'Send',
        successMessage: 'Thank you for your message! We will contact you as soon as possible.'
      }
    },
    footer: {
      copyright: '\u00a9\u00a02025 Advocatenkantoor van\u00a0Dijk–Silos. All rights reserved.'
    }
  }
};

document.getElementById('year').textContent = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language from localStorage or default to Dutch
  let currentLang = localStorage.getItem('language') || 'nl';
  
  // Function to update page language
  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);
    
    // Update language toggle button text
    const langText = document.getElementById('lang-text');
    langText.textContent = lang === 'nl' ? 'EN' : 'NL';
    
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.getAttribute('data-i18n');
      const keys = key.split('.');
      let translation = translations[lang];
      
      for (const k of keys) {
        translation = translation[k];
      }
      
      if (translation) {
        element.innerHTML = translation;
      }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.getAttribute('data-i18n-placeholder');
      const keys = key.split('.');
      let translation = translations[lang];
      
      for (const k of keys) {
        translation = translation[k];
      }
      
      if (translation) {
        element.setAttribute('placeholder', translation);
      }
    });
  }
  
  // Language toggle functionality
  const langToggle = document.getElementById('lang-toggle');
  langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'nl' ? 'en' : 'nl';
    setLanguage(newLang);
  });
  
  // Initialize with saved or default language
  setLanguage(currentLang);

  // Mobile navigation toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Swap the hamburger icon to a close icon and back
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('open')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });

  // Contact form submission handler
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Provide a simple confirmation message to the user
    const successMessage = translations[currentLang].contact.form.successMessage;
    alert(successMessage);
    // Reset the form
    form.reset();
  });
});

