import { Locale } from '@/i18n-config';

const templates: Record<Locale, (subject: string) => string> = {
  pt: (subject) => `Olá! Gostaria de falar sobre "${subject}".`,
  en: (subject) => `Hello! I'd like to talk about "${subject}".`,
  es: (subject) => `¡Hola! Me gustaría hablar sobre "${subject}".`,
  it: (subject) => `Ciao! Vorrei parlare di "${subject}".`,
  de: (subject) => `Hallo! Ich möchte über "${subject}" sprechen.`,
};

export const getWhatsAppLink = (locale: Locale, subject: string) => {
  const template = templates[locale] ?? templates.pt;
  const message = template(subject);
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/393714156528?text=${encodedMessage}`;
};
