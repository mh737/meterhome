import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
 
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "METER",
  description: "Faster. Better. METER",
};

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
        <link rel="icon" href="/meter.jpg" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        {/* <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script> */}
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" defer></script>
        <script>
        {/* window.onloadTurnstileCallback = function () {
            turnstile.render('#example-container', {
                sitekey: '0x4AAAAAAAh2iM15h5SbEeRF',
                callback: function(token) {
                    console.log(`Challenge Success ${token}`);
                },
            });
        }; */}
        </script>
      </head>
      <body>
        
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}




