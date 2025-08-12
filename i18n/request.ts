import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es', 'ar'];

export default getRequestConfig(async ({ locale }) => {
    console.log('🔧 Request config called with locale:', locale);
    
    const currentLocale = locale || 'en';
    
    if (!locales.includes(currentLocale)) {
        console.log('❌ Invalid locale:', currentLocale);
        notFound();
    }

    try {
        const messages = (await import(`../messages/${currentLocale}.json`)).default;
        console.log('✅ Messages loaded for:', currentLocale, 'Keys:', Object.keys(messages));
        
        return {
            locale: currentLocale,
            messages
        };
    } catch (error) {
        console.error('❌ Failed to load messages for:', currentLocale, error);
        notFound();
    }
});