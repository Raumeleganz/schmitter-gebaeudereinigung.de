"use client";

import { useState } from 'react';
import { useCookieConsent, type CookieCategory } from '@/hooks/useCookieConsent';

export default function CookieBanner() {
  const { consent, showBanner, acceptAll, acceptNecessary, updateConsent, setShowBanner } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [localConsent, setLocalConsent] = useState({
    necessary: true,
    functional: consent?.functional || false,
    analytics: consent?.analytics || false,
    marketing: consent?.marketing || false,
  });

  if (!showBanner) return null;

  const handleCategoryToggle = (category: CookieCategory) => {
    if (category === 'necessary') return; // Can't disable necessary
    setLocalConsent(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSaveSettings = () => {
    Object.entries(localConsent).forEach(([category, value]) => {
      if (category !== 'necessary') {
        updateConsent(category as CookieCategory, value);
      }
    });
    setShowBanner(false);
    setShowSettings(false);
  };

  const cookieCategories = [
    {
      id: 'necessary' as CookieCategory,
      icon: '✅',
      title: 'Notwendige Cookies',
      description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
      required: true,
    },
    {
      id: 'functional' as CookieCategory,
      icon: '⚙️',
      title: 'Funktionale Cookies',
      description: 'Diese Cookies ermöglichen erweiterte Funktionen wie Spracheinstellungen und personalisierte Inhalte.',
      required: false,
    },
    {
      id: 'analytics' as CookieCategory,
      icon: '📊',
      title: 'Analytik-Cookies',
      description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
      required: false,
    },
    {
      id: 'marketing' as CookieCategory,
      icon: '🎯',
      title: 'Marketing-Cookies',
      description: 'Diese Cookies werden verwendet, um Ihnen relevante Werbung und Inhalte anzuzeigen.',
      required: false,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/10 z-40 transition-opacity duration-300 ${
          showBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Cookie Banner */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          showBanner ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="mx-3 mb-3 sm:mx-6 sm:mb-4 sm:max-w-4xl sm:mx-auto">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            
            {/* Main Banner View */}
            {!showSettings ? (
              <div className="p-4 sm:p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4">
                  <div className="text-3xl">🍪</div>
                  <div className="flex-1">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                      Wir respektieren Ihre Privatsphäre
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-tight">
                      Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. 
                      Wählen Sie Ihre bevorzugten Einstellungen.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                  >
                    Einstellungen
                  </button>
                </div>

                <div className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
                  Weitere Infos in unserer{' '}
                  <a href="/datenschutz" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Datenschutzerklärung
                  </a>
                </div>
              </div>
            ) : (
              /* Settings View */
              <div className="p-4 sm:p-5 max-h-[70vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    Cookie-Einstellungen
                  </h2>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    aria-label="Schließen"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs sm:text-sm">
                  Wählen Sie, welche Cookies Sie akzeptieren möchten.
                </p>

                {/* Cookie Categories */}
                <div className="space-y-3 mb-4">
                  {cookieCategories.map((category) => (
                    <div
                      key={category.id}
                      className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-200 dark:border-gray-700 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <span className="text-xl flex-shrink-0">{category.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                                {category.title}
                              </h3>
                              {category.required && (
                                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                                  Erforderlich
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        {/* Toggle Switch */}
                        <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                          <input
                            type="checkbox"
                            checked={localConsent[category.id]}
                            onChange={() => handleCategoryToggle(category.id)}
                            disabled={category.required}
                            className="sr-only peer"
                          />
                          <div className={`w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full peer 
                            peer-checked:after:translate-x-5 peer-checked:bg-gradient-to-r peer-checked:from-green-500 peer-checked:to-blue-500
                            after:content-[''] after:absolute after:top-0.5 after:left-[4px] 
                            after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all
                            ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                            transition-all duration-300`}
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={handleSaveSettings}
                    className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Speichern
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                  >
                    Alle akzeptieren
                  </button>
                </div>

                <div className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                  Einstellungen gelten 365 Tage
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

