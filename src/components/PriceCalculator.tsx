"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormInput } from "@/lib/validation/contact-schema";
import { ContactApiResponse } from "@/types/contact";
import confetti from 'canvas-confetti';

type ServiceType = {
  id: string;
  name: string;
  basePrice: number;
  unit: string;
};

type Frequency = {
  id: string;
  name: string;
  multiplier: number;
  discount: number;
};

const services: ServiceType[] = [
  { id: "buero", name: "Büroreinigung", basePrice: 150, unit: "pro 100m²" },
  { id: "unterhalt", name: "Unterhaltsreinigung", basePrice: 120, unit: "pro 100m²" },
  { id: "praxis", name: "Praxisreinigung", basePrice: 200, unit: "pro 100m²" },
  { id: "glas", name: "Glasreinigung", basePrice: 8, unit: "pro m²" },
  { id: "industrie", name: "Industriereinigung", basePrice: 180, unit: "pro 100m²" },
  { id: "grund", name: "Grundreinigung", basePrice: 350, unit: "pro 100m²" },
];

const frequencies: Frequency[] = [
  { id: "daily", name: "Täglich", multiplier: 20, discount: 0 },
  { id: "weekly", name: "Wöchentlich", multiplier: 4, discount: 5 },
  { id: "biweekly", name: "14-täglich", multiplier: 2, discount: 3 },
  { id: "monthly", name: "Monatlich", multiplier: 1, discount: 0 },
  { id: "once", name: "Einmalig", multiplier: 1, discount: 0 },
];

export default function PriceCalculator() {
  const [selectedService, setSelectedService] = useState<string>("buero");
  const [area, setArea] = useState<number>(100);
  const [frequency, setFrequency] = useState<string>("weekly");
  const [extras, setExtras] = useState({
    window: false,
    carpet: false,
    sanitary: false,
  });

  const [price, setPrice] = useState<number>(0);
  const [showContactForm, setShowContactForm] = useState<boolean>(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [apiMessage, setApiMessage] = useState<string>('');

  const currentService = services.find(s => s.id === selectedService);
  const currentFrequency = frequencies.find(f => f.id === frequency);

  // Form with react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  });

  useEffect(() => {
    calculatePrice();
  }, [selectedService, area, frequency, extras]);

  const calculatePrice = () => {
    const service = services.find(s => s.id === selectedService);
    const freq = frequencies.find(f => f.id === frequency);
    
    if (!service || !freq) return;

    const basePrice = service.basePrice;
    let calculatedArea = area;
    
    if (selectedService === 'glas') {
      calculatedArea = area;
    } else {
      calculatedArea = area / 100;
    }

    let totalPrice = basePrice * calculatedArea * freq.multiplier;

    if (freq.discount > 0) {
      totalPrice = totalPrice * (1 - freq.discount / 100);
    }

    if (extras.window) {
      totalPrice += 50 * freq.multiplier;
    }
    if (extras.carpet) {
      totalPrice += 40 * freq.multiplier;
    }
    if (extras.sanitary) {
      totalPrice += 35 * freq.multiplier;
    }

    setPrice(Math.round(totalPrice));
  };

  const handleContactFormOpen = () => {
    setShowContactForm(true);
    
    // Generate pre-filled message
    const extrasText = [];
    if (extras.window) extrasText.push("Fensterreinigung");
    if (extras.carpet) extrasText.push("Teppichreinigung");
    if (extras.sanitary) extrasText.push("Sanitärbereich Intensiv");
    
    const prefilledMessage = `Guten Tag,

ich interessiere mich für folgendes Angebot:

Service: ${currentService?.name}
Fläche: ${area}m²
Intervall: ${currentFrequency?.name}
${extrasText.length > 0 ? `Zusatzleistungen: ${extrasText.join(", ")}` : ''}

Berechneter Preis: ${price.toLocaleString('de-DE')}€ ${frequency === 'once' ? 'einmalig' : 'pro Monat'}

Bitte kontaktieren Sie mich für ein detailliertes Angebot.

Mit freundlichen Grüßen`;
    
    setValue('message', prefilledMessage);
  };

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  };

  const onSubmit = async (data: ContactFormInput) => {
    setFormState('submitting');
    setApiMessage('');

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
        triggerConfetti();
        reset();
      } else {
        setFormState('error');
        setApiMessage(result.message || 'Ein Fehler ist aufgetreten');
        
        setTimeout(() => {
          setFormState('idle');
          setApiMessage('');
        }, 8000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setFormState('error');
      setApiMessage('Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung.');
      
      setTimeout(() => {
        setFormState('idle');
        setApiMessage('');
      }, 8000);
    }
  };

  if (showContactForm) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl p-6 md:p-8 border border-blue-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Anfrage senden</h3>
          <button
            onClick={() => {
              setShowContactForm(false);
              setFormState('idle');
              setApiMessage('');
            }}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Price Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm opacity-90">Ihr berechneter Preis</p>
              <p className="text-3xl font-black">{price.toLocaleString('de-DE')}€</p>
              <p className="text-xs opacity-80">
                {currentService?.name} · {area}m² · {currentFrequency?.name}
              </p>
            </div>
            <svg className="w-12 h-12 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        {formState === 'success' && (
          <div className="mb-6 p-6 rounded-xl border-l-4 bg-green-50 border-green-500 text-green-800 animate-slide-in-bottom">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-bold text-lg mb-1">Erfolgreich gesendet! 🎉</p>
                <p className="text-sm">{apiMessage}</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {formState === 'error' && apiMessage && (
          <div className="mb-6 p-4 rounded-lg border-l-4 bg-red-50 border-red-500 text-red-800">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-sm font-medium">{apiMessage}</p>
            </div>
          </div>
        )}

        {/* Contact Form */}
        {formState !== 'success' && (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900">
                Name *
              </label>
              <input
                {...register('name')}
                id="name"
                type="text"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600'
                } focus:ring-2 focus:ring-blue-200 focus:outline-none transition`}
                placeholder="Ihr Name"
                disabled={formState === 'submitting'}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">
                E-Mail *
              </label>
              <input
                {...register('email')}
                id="email"
                type="email"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600'
                } focus:ring-2 focus:ring-blue-200 focus:outline-none transition`}
                placeholder="ihre.email@beispiel.de"
                disabled={formState === 'submitting'}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-900">
                Telefon (optional)
              </label>
              <input
                {...register('phone')}
                id="phone"
                type="tel"
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600'
                } focus:ring-2 focus:ring-blue-200 focus:outline-none transition`}
                placeholder="0201-89083050"
                disabled={formState === 'submitting'}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.phone.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900">
                Nachricht *
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={8}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-600'
                } focus:ring-2 focus:ring-blue-200 focus:outline-none transition resize-none`}
                disabled={formState === 'submitting'}
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 font-semibold">{errors.message.message}</p>
              )}
            </div>

            {/* Honeypot */}
            <input
              {...register('honeypot')}
              type="text"
              name="honeypot"
              autoComplete="off"
              className="absolute left-0 top-0 w-0 h-0 opacity-0 pointer-events-none"
              aria-hidden="true"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState === 'submitting'}
              className={`w-full px-6 py-4 rounded-lg transition font-bold shadow-lg transform duration-200 flex items-center justify-center ${
                formState === 'submitting'
                  ? 'bg-gray-400 opacity-70 cursor-wait'
                  : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:scale-105 cursor-pointer'
              } text-white text-lg`}
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
                'Anfrage jetzt senden'
              )}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl p-6 md:p-8 border border-blue-100">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Online-Preiskalkulator</h3>
        <p className="text-gray-600">Erhalten Sie eine erste Preisindikation für Ihre Reinigung</p>
      </div>

      {/* Service Selection */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-900 mb-3">
          Welche Reinigungsleistung benötigen Sie?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map(service => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 text-sm font-semibold ${
                selectedService === service.id
                  ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:shadow'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>

      {/* Area Input */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-900 mb-3">
          Fläche in m²
        </label>
        <div className="relative">
          <input
            type="number"
            min="10"
            max="10000"
            step="10"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full px-4 py-3 text-lg font-semibold rounded-lg border-2 border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">
            m²
          </div>
        </div>
        <input
          type="range"
          min="10"
          max="1000"
          step="10"
          value={area}
          onChange={(e) => setArea(Number(e.target.value))}
          className="w-full mt-3 h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #2563eb 0%, #2563eb ${(area / 1000) * 100}%, #dbeafe ${(area / 1000) * 100}%, #dbeafe 100%)`
          }}
        />
      </div>

      {/* Frequency Selection */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-900 mb-3">
          Wie oft soll gereinigt werden?
        </label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {frequencies.map(freq => (
            <button
              key={freq.id}
              onClick={() => setFrequency(freq.id)}
              className={`p-3 rounded-lg border-2 transition-all duration-300 text-sm font-semibold relative ${
                frequency === freq.id
                  ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-md'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:shadow'
              }`}
            >
              {freq.name}
              {freq.discount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  -{freq.discount}%
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Extras */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-900 mb-3">
          Zusatzleistungen (optional)
        </label>
        <div className="space-y-3">
          <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition">
            <input
              type="checkbox"
              checked={extras.window}
              onChange={(e) => setExtras({...extras, window: e.target.checked})}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="ml-3 text-gray-900 font-semibold">Fensterreinigung</span>
            <span className="ml-auto text-blue-600 font-bold">+50€</span>
          </label>
          
          <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition">
            <input
              type="checkbox"
              checked={extras.carpet}
              onChange={(e) => setExtras({...extras, carpet: e.target.checked})}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="ml-3 text-gray-900 font-semibold">Teppichreinigung</span>
            <span className="ml-auto text-blue-600 font-bold">+40€</span>
          </label>
          
          <label className="flex items-center p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition">
            <input
              type="checkbox"
              checked={extras.sanitary}
              onChange={(e) => setExtras({...extras, sanitary: e.target.checked})}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <span className="ml-3 text-gray-900 font-semibold">Sanitärbereich Intensiv</span>
            <span className="ml-auto text-blue-600 font-bold">+35€</span>
          </label>
        </div>
      </div>

      {/* Result */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white shadow-xl">
        <div className="text-center">
          <p className="text-sm font-semibold opacity-90 mb-2">
            {currentService?.name} · {area}m² · {currentFrequency?.name}
          </p>
          <div className="text-5xl font-black mb-2">
            {price.toLocaleString('de-DE')}€
          </div>
          <p className="text-sm opacity-90">
            {frequency === 'once' ? 'einmalig' : 'pro Monat'}
          </p>
          
          {currentFrequency?.discount && currentFrequency.discount > 0 && (
            <div className="mt-3 inline-block bg-green-500 px-4 py-2 rounded-full text-sm font-bold">
              🎉 Sie sparen {currentFrequency.discount}% bei regelmäßiger Reinigung!
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-center text-sm mb-4 opacity-90">
            💡 Dies ist eine unverbindliche Preisindikation. Für ein genaues Angebot kontaktieren Sie uns!
          </p>
          <button
            onClick={handleContactFormOpen}
            className="block w-full text-center bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Jetzt Angebot anfragen
          </button>
        </div>
      </div>
    </div>
  );
}
