import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "METER",
  description: "Faster. Better. METER",
};


import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 


 
  return (
    <html lang={locale}>
      <head>
      <meta name="google" content="notranslate"></meta>
        <link rel="icon" href="/image/meter.png" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        {/* <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script> */}
        {/* <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" defer></script> */}
        
      </head>
      <body className='overflow-x-hidden max-w-[100vw]'>
        
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}




