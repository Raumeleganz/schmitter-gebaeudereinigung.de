"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormInput } from "@/lib/validation/contact-schema";
import { useState, useEffect } from "react";
import { ContactApiResponse } from "@/types/contact";
import confetti from 'canvas-confetti';
import { getTracker } from "@/lib/analytics/tracker";

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const [formState, setFormState] = useState<FormState>('idle');
  const [apiMessage, setApiMessage] = useState<string>('');
  const [shakeFields, setShakeFields] = useState<Set<string>>(new Set());
  const [hasStartedForm, setHasStartedForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  // Track form view on mount
  useEffect(() => {
    const tracker = getTracker();
    tracker.trackFormView();
  }, []);

  // Trigger shake animation when errors appear
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const errorFields = new Set(Object.keys(errors));
      setShakeFields(errorFields);
      
      // Remove shake class after animation completes
      const timer = setTimeout(() => {
        setShakeFields(new Set());
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // Track form start on first interaction
  const handleFormStart = () => {
    if (!hasStartedForm) {
      const tracker = getTracker();
      tracker.trackFormStart();
      setHasStartedForm(true);
    }
  };

  // 🎉 Konfetti-Effekt Funktion
  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Konfetti von links
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });

      // Konfetti von rechts
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  // Optional: Success Sound (currently disabled)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const playSuccessSound = () => {
    // Erstelle einen einfachen Beep-Sound
    const audioContext = new (window.AudioContext || (window as Window & typeof globalThis & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const onSubmit = async (data: ContactFormInput) => {
    setFormState('submitting');
    setApiMessage('');

    const tracker = getTracker();
    tracker.trackFormSubmit();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: ContactApiResponse = await response.json();

      if (response.ok && result.success) {
        setFormState('success');
        setApiMessage(result.message);
        
        // 📊 Track successful submission
        tracker.trackFormSuccess();
        
        // 🎉 KONFETTI-EXPLOSION!
        triggerConfetti();
        
        // Success sound (optional - kommentiert aus)
        // playSuccessSound();
        
        reset(); // Clear form on success
        setHasStartedForm(false); // Reset form start tracking
        
        // Formular bleibt versteckt, kein automatisches Zurücksetzen mehr!
        // User kann mit "Neue Nachricht senden" Button neu starten
      } else {
        setFormState('error');
        setApiMessage(result.message || 'Ein Fehler ist aufgetreten');
        
        // 📊 Track error
        tracker.trackFormError(result.message || 'Unknown error');
        
        // Reset error message after 8 seconds
        setTimeout(() => {
          setFormState('idle');
          setApiMessage('');
        }, 8000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormState('error');
      setApiMessage('Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung.');
      
      // 📊 Track error
      tracker.trackFormError('Connection error');
      
      setTimeout(() => {
        setFormState('idle');
        setApiMessage('');
      }, 8000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Adresse",
      content: ["Musterstraße 123", "40212 Düsseldorf"]
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefon",
      content: ["0201-89083050"]
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "E-Mail",
      content: ["info@schmitter-gebaeudereinigung.de"]
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Öffnungszeiten",
      content: ["Mo-Fr: 08:00 - 18:00 Uhr", "Sa: 09:00 - 14:00 Uhr"]
    }
  ];

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-8 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in-up' : 'scroll-hidden'
          }`}
        >
          <h2 className="text-3xl font-bold mb-2">Lust auf Klartext?</h2>
          <p className="text-base text-blue-100 max-w-xl mx-auto">
            Schreiben Sie kurz, was Sie brauchen – wir antworten sachlich und ohne leere Buzzwords: Gebäude, Fläche, Rhythmus, Besonderheiten. Unverbindlich.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-5">Erreichbarkeit</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start group">
                  <div className="bg-blue-500 rounded-lg p-3 mr-3 text-white group-hover:bg-white group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base mb-0.5">{info.title}</div>
                    <div className="text-blue-100 text-sm">
                      {info.content.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-6 text-gray-900 shadow-2xl animate-scale-in">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="mr-2" aria-hidden>
                ✨
              </span>
              Formular ausfüllen – fertig
            </h3>
            
            {/* Success State - Komplette Danke-Nachricht */}
            {formState === 'success' ? (
              <div className="text-center py-12 animate-slide-in-bottom animate-celebrate">
                {/* Großes Success-Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
                    <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Danke-Text */}
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  Vielen Dank!
                </h4>
                <p className="text-gray-600 mb-2 text-lg">
                  Ihre Anfrage wurde erfolgreich gesendet.
                </p>
                <p className="text-gray-500 mb-8">
                  In der Regel melden wir uns innerhalb eines Werktags – bei Dringlichkeit lieber gleich kurz anrufen.
                </p>

                {/* Kontakt-Info */}
                <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-200">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Durchschnittliche Antwortzeit:</strong> 24 Stunden
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Dringende Anfragen?</strong> Rufen Sie uns an:
                  </p>
                <a href="tel:+4920189083050" className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  0201-89083050
                  </a>
                </div>

                {/* Neue Nachricht Button */}
                <button
                  onClick={() => {
                    setFormState('idle');
                    setApiMessage('');
                    reset();
                  }}
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Neue Nachricht senden
                </button>
              </div>
            ) : (
              <>
                {/* Error Message (nur bei Fehler) */}
                {formState === 'error' && apiMessage && (
                  <div className="mb-4 p-4 rounded-lg border-l-4 bg-red-50 border-red-500 text-red-800 animate-slide-in-bottom">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{apiMessage}</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              {/* Name Field */}
              <div className={shakeFields.has('name') ? 'animate-shake' : ''}>
                <label htmlFor="name" className="block text-xs font-semibold mb-1 text-gray-700">
                  Name *
                </label>
                <input 
                  {...register('name')}
                  id="name"
                  type="text" 
                  className={`w-full px-3 py-2 text-sm rounded-lg border ${
                    errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                  } focus:ring-1 focus:outline-none transition`}
                  placeholder="Ihr Name"
                  disabled={formState === 'submitting'}
                  onFocus={handleFormStart}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600 font-semibold flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className={shakeFields.has('email') ? 'animate-shake' : ''}>
                <label htmlFor="email" className="block text-xs font-semibold mb-1 text-gray-700">
                  E-Mail *
                </label>
                <input 
                  {...register('email')}
                  id="email"
                  type="email" 
                  className={`w-full px-3 py-2 text-sm rounded-lg border ${
                    errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                  } focus:ring-1 focus:outline-none transition`}
                  placeholder="ihre.email@beispiel.de"
                  disabled={formState === 'submitting'}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 font-semibold flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div className={shakeFields.has('phone') ? 'animate-shake' : ''}>
                <label htmlFor="phone" className="block text-xs font-semibold mb-1 text-gray-700">
                  Telefon (optional)
                </label>
                <input 
                  {...register('phone')}
                  id="phone"
                  type="tel" 
                  className={`w-full px-3 py-2 text-sm rounded-lg border ${
                    errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                  } focus:ring-1 focus:outline-none transition`}
                  placeholder="0201-89083050"
                  disabled={formState === 'submitting'}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 font-semibold flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className={shakeFields.has('message') ? 'animate-shake' : ''}>
                <label htmlFor="message" className="block text-xs font-semibold mb-1 text-gray-700">
                  Nachricht *
                </label>
                <textarea 
                  {...register('message')}
                  id="message"
                  rows={3}
                  className={`w-full px-3 py-2 text-sm rounded-lg border ${
                    errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600 focus:ring-blue-600'
                  } focus:ring-1 focus:outline-none transition resize-none`}
                  placeholder="z. B. Büro ca. 200 m², 2× pro Woche, abends möglich, Parkplatz beim Hintereingang…"
                  disabled={formState === 'submitting'}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600 font-semibold flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Honeypot (hidden field for bot detection) */}
              <input 
                {...register('honeypot')}
                type="text"
                tabIndex={-1}
                autoComplete="off"
                className="absolute left-0 top-0 w-0 h-0 opacity-0 pointer-events-none"
                aria-hidden="true"
              />

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className={`w-full px-6 py-3 text-sm rounded-lg transition font-bold shadow-lg transform duration-200 flex items-center justify-center cursor-pointer ${
                  formState === 'submitting'
                    ? 'bg-gray-400 opacity-70'
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:scale-105 animate-glow'
                } text-white`}
                style={{ cursor: formState === 'submitting' ? 'wait' : 'pointer' }}
              >
                {formState === 'submitting' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Wird gesendet...
                  </>
                ) : (
                  'Anfrage absenden'
                )}
              </button>
            </form>
            </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
