# 📧 Kontaktformular Backend - Setup Anleitung

## 🎯 Features

✅ **React Hook Form** - Type-safe form handling  
✅ **Zod Validation** - Server & Client-side validation  
✅ **Rate Limiting** - 3 Anfragen per 15 Minuten  
✅ **Honeypot** - Bot-Protection ohne Captcha  
✅ **Email Service** - Resend Integration  
✅ **Error Handling** - Production-ready  
✅ **TypeScript** - Vollständig typisiert  
✅ **Security** - Input Sanitization & XSS Protection  

---

## 📁 Struktur

```
src/
├── app/api/contact/
│   └── route.ts                    # API Route Handler
├── components/
│   └── Contact.tsx                 # Contact Form Component
├── lib/
│   ├── validation/
│   │   └── contact-schema.ts       # Zod Validation Schema
│   ├── rate-limiter.ts             # Rate Limiting Logic
│   └── email-service.ts            # Email Service (Resend)
└── types/
    └── contact.ts                  # TypeScript Types
```

---

## ⚙️ Konfiguration

### **1. Environment Variables**

Erstelle eine `.env.local` Datei im Root:

```bash
# SMTP Configuration (z.B. Gmail, SendGrid, Mailgun)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=dein-email@gmail.com
SMTP_PASS=dein-app-passwort

# Email-Adressen
CONTACT_EMAIL=info@datra-gebaeudereinigung.de
FROM_EMAIL=noreply@datra-gebaeudereinigung.de
```

**Ohne SMTP Credentials:**
- Development Mode aktiviert sich automatisch
- Emails werden in Console geloggt (nicht versendet)

---

## 🚀 Email Setup (Production)

### **Option 1: Gmail SMTP (Einfach für Testing)**

1. **Google Account → Sicherheit**
2. **2-Faktor-Authentifizierung** aktivieren
3. **App-Passwörter** erstellen
4. Wähle "Mail" und "Sonstiges"
5. Kopiere das Passwort

```bash
# .env.local
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=dein-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx  # 16-Zeichen App-Passwort
CONTACT_EMAIL=info@datra-gebaeudereinigung.de
FROM_EMAIL=dein-email@gmail.com
```

### **Option 2: SendGrid (Empfohlen für Production)**

1. Gehe zu [sendgrid.com](https://sendgrid.com)
2. Registriere dich (kostenlos: 100 Emails/Tag)
3. API Key erstellen
4. Single Sender Identity verifizieren

```bash
# .env.local
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=SG.xxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=info@datra-gebaeudereinigung.de
FROM_EMAIL=verified-sender@datra-gebaeudereinigung.de
```

### **Option 3: Mailgun / Postmark / AWS SES**

Ähnliche Config, siehe jeweilige Dokumentation.

### **Testen**
```bash
# Dev-Server starten
npm run dev

# Formular testen auf:
http://localhost:3000/kontakt

# Check Console für Email-Output (Dev Mode)
# Oder check Resend Dashboard für gesendete Emails
```

---

## 🛡️ Sicherheits-Features

### **1. Rate Limiting**
```typescript
- Max: 3 Anfragen pro 15 Minuten
- Per IP-Adresse
- Automatische Cleanup alle 60 Min
```

### **2. Honeypot Bot-Protection**
```html
<!-- Verstecktes Feld, das Bots ausfüllen -->
<input type="text" name="honeypot" style="display:none" />

<!-- Wenn ausgefüllt → Silent Fail (200 OK, aber keine Email) -->
```

### **3. Input Validation**
```typescript
Name:     2-100 Zeichen, nur Buchstaben
Email:    RFC 5322 compliant
Phone:    5-20 Zeichen, flexibles Format
Message:  10-5000 Zeichen
```

### **4. XSS Protection**
```typescript
// Alle Inputs werden escaped im Email-Template
escapeHtml(userInput) // <script> → &lt;script&gt;
```

### **5. CORS Protection**
```typescript
// API Route erlaubt nur same-origin requests
// OPTIONS preflight für CORS
```

---

## 📨 Email Template

### **HTML Email (Branded)**
```
🎉 Neue Kontaktanfrage
━━━━━━━━━━━━━━━━━━━━━━
👤 Name:    Max Mustermann
📧 E-Mail:  max@example.com
📞 Telefon: +49 211 123456
💬 Nachricht:
Ich benötige ein Angebot...
```

### **Plain Text Fallback**
Automatisch generiert für Email-Clients ohne HTML-Support

---

## 🔧 Anpassungen

### **Rate Limit ändern:**
```typescript
// src/lib/rate-limiter.ts
const RATE_LIMIT = {
  MAX_REQUESTS: 5,        // ← Von 3 auf 5 ändern
  WINDOW_MS: 10 * 60 * 1000, // ← Von 15 auf 10 Min
};
```

### **Empfänger-Email ändern:**
```bash
# .env.local
CONTACT_EMAIL=anders@beispiel.de
```

### **Validation Rules anpassen:**
```typescript
// src/lib/validation/contact-schema.ts
message: z
  .string()
  .min(20, 'Mindestens 20 Zeichen')  // ← Anpassen
  .max(10000, 'Maximal 10000 Zeichen')
```

---

## 🧪 Testing

### **Manual Testing:**
```bash
# 1. Dev-Server starten
npm run dev

# 2. Öffne Browser
http://localhost:3000/kontakt

# 3. Fülle Formular aus und sende

# 4. Check Console für:
✅ Form submission
✅ API Response
✅ Email output (Dev Mode)
```

### **API Testing mit curl:**
```bash
# Successful Request
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+49 211 12345",
    "message": "Dies ist eine Testnachricht für das Kontaktformular."
  }'

# Expected Response:
{
  "success": true,
  "message": "Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen."
}
```

### **Rate Limit Testing:**
```bash
# Sende 4 Requests schnell hintereinander
for i in {1..4}; do
  curl -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@test.com","message":"Test message number '$i'"}';
  echo "\n---\n";
done

# 4. Request sollte 429 zurückgeben
```

---

## 🐛 Troubleshooting

### **Problem: "Email konnte nicht versendet werden"**
```
Ursache: Kein RESEND_API_KEY oder invalider Key
Lösung:  
1. Check .env.local
2. Generiere neuen API Key bei Resend
3. Restart Dev-Server
```

### **Problem: "Zu viele Anfragen (429)"**
```
Ursache: Rate Limit überschritten
Lösung:  
1. Warte 15 Minuten
2. Oder: Erhöhe Limit in rate-limiter.ts
3. Oder: Dev-Server neu starten (löscht Memory)
```

### **Problem: "Validation Error"**
```
Ursache: Ungültige Eingaben
Lösung:  
- Name: Nur Buchstaben, 2-100 Zeichen
- Email: Valide Email-Adresse
- Message: Min. 10 Zeichen
```

### **Problem: "Form submission hängt"**
```
Ursache: API Route antwortet nicht
Lösung:  
1. Check Browser Console für Errors
2. Check Terminal für API Errors
3. Teste API direkt mit curl
```

---

## 📊 Monitoring & Logs

### **Development:**
```bash
# Terminal zeigt:
✅ Sitemap generiert: 100 URLs
📧 [DEV MODE] Email would be sent:
━━━━━━━━━━━━━━━━━━━━━━━
From: noreply@datra-gebaeudereinigung.de
To: info@datra-gebaeudereinigung.de
...
```

### **Production:**
```bash
# Resend Dashboard:
- Email Send Count
- Delivery Status
- Bounce Rate
- Open Rate (optional)
```

---

## 🚀 Production Deployment

### **Checklist:**
- [ ] RESEND_API_KEY in Vercel/Hosting gesetzt
- [ ] Domain in Resend verifiziert
- [ ] DNS Records (SPF, DKIM) konfiguriert
- [ ] CONTACT_EMAIL korrekt
- [ ] Rate Limits geprüft
- [ ] Test-Email gesendet
- [ ] Error Handling getestet

### **Vercel Environment Variables:**
```bash
# Vercel Dashboard → Settings → Environment Variables
RESEND_API_KEY=re_...
CONTACT_EMAIL=info@datra-gebaeudereinigung.de
FROM_EMAIL=noreply@datra-gebaeudereinigung.de
```

---

## 🎯 Next Steps (Optional)

1. **Database Storage:** Anfragen in DB speichern (Prisma + PostgreSQL)
2. **Admin Dashboard:** Anfragen verwalten
3. **Email Notifications:** SMS via Twilio
4. **Analytics:** Track Conversion Rate
5. **reCAPTCHA v3:** Zusätzlicher Bot-Schutz
6. **Webhook:** Slack/Discord Notifications

---

## 📞 Support

**Dokumentation:**
- Resend: https://resend.com/docs
- Zod: https://zod.dev
- React Hook Form: https://react-hook-form.com

**Status:** ✅ Production-Ready  
**Version:** 1.0.0  
**By:** Roxas - Der göttliche Code-Architekt 🚀

