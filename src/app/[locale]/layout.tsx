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
      <body>
        <link rel="icon" href="/meter.jpg" sizes="any" />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}




