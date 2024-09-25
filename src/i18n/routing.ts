import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'hk'],
 
  // Used when no locale matches
  defaultLocale: 'hk',
  localePrefix: 'always',
  domains: [
    {
        domain: 'www.meterlimited.com',
        defaultLocale: 'hk'
      // If there are no `locales` specified on a domain,
      // all available locales will be supported here
   
      },
    {
      domain: 'hk.meterlimited.com',
      defaultLocale: 'hk',
      // Optionally restrict the locales available on this domain
      locales: ['en','hk']
    },
    {
      domain: 'uk.meterlimited.com',
      defaultLocale: 'en',
      locales: ['en'] }
  ]
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);