// import {notFound} from 'next/navigation';
import  NotFound  from "./app/not-found";
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
export const locales = ['en', 'zh'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) NotFound();
 
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});