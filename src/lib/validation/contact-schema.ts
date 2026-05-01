/**
 * Contact Form Validation Schema
 * Using Zod for type-safe validation
 */

import { z } from 'zod';

// Phone number regex (flexible for international formats)
const phoneRegex = /^[\d\s\(\)\+\-\.]+$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name muss mindestens 2 Zeichen lang sein')
    .max(100, 'Name darf maximal 100 Zeichen lang sein')
    .regex(/^[a-zA-ZäöüÄÖÜß\s\-\.]+$/, 'Name enthält ungültige Zeichen'),
  
  email: z
    .string()
    .email('Bitte geben Sie eine gültige E-Mail-Adresse ein')
    .min(5, 'E-Mail muss mindestens 5 Zeichen lang sein')
    .max(255, 'E-Mail darf maximal 255 Zeichen lang sein')
    .toLowerCase()
    .trim(),
  
  phone: z
    .string()
    .regex(phoneRegex, 'Telefonnummer enthält ungültige Zeichen')
    .min(5, 'Telefonnummer muss mindestens 5 Zeichen lang sein')
    .max(20, 'Telefonnummer darf maximal 20 Zeichen lang sein')
    .optional()
    .or(z.literal('')),
  
  message: z
    .string()
    .min(10, 'Nachricht muss mindestens 10 Zeichen lang sein')
    .max(5000, 'Nachricht darf maximal 5000 Zeichen lang sein')
    .trim(),
  
  // Honeypot field - should be empty (filled by bots)
  honeypot: z
    .string()
    .max(0, 'Bot detected')
    .optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

