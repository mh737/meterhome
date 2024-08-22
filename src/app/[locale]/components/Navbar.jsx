"use client";
import { React, useState, useTransition} from "react";

import "./NavbarStyles.css";
import Image from 'next/image';
import { Link as NavLink } from "../../../navigation"
import { useTranslations } from 'next-intl';
// import twitterIcon from "../../public/meter.jpg";

// import {useRouter, usePathname} from '@/navigation';
// import {useParams} from 'next/navigation';

function Navbar() {

    // const router = useRouter();
    // const [isPending, startTransition] = useTransition();
    // const pathname = usePathname();
    // const params = useParams();
    // function changeLang (nextLocale){
    //     startTransition(() => {
    //         router.replace(
    //           // @ts-expect-error -- TypeScript will validate that only known `params`
    //           // are used in combination with a given `pathname`. Since the two will
    //           // always match for the current route, we can skip runtime checks.
    //           {pathname, params},
    //           {locale: nextLocale}
    //         );
    //     });
    // }



    const [isClick, isSetClick] = useState(false);

    const toggleNavbar = () => {
        isSetClick(!isClick);
    }
    const t = useTranslations('NavPage');

    return (
        <>
            <div id="navbar">
                <div className="nav"><NavLink href="/">
                    <div className="navleft">
                        
                        <Image
                            priority
                            src="/meter.jpg"
                            width={50}
                            height={50}
                            alt="Follow us on Twitter"
                        />
                        <pre className="!hover:no-underline">METER</pre>
                       
                    </div> </NavLink>
                    <div className="navcenter max-md:hidden">
                        {/* <a href="/plan" className="">Plan</a>
                <a href="tutorial">tutorial</a>
                <a href="/support">Supported device</a> */}
                <NavLink href="/">{t("homepage")}</NavLink>
                        <NavLink href="/contact-us">{t("contact")}</NavLink>
                    </div>
                    <div className="navright max-md:hidden">
                    <NavLink href="/" locale={t("change-lang-locale")}>{t("change-lang-text")}</NavLink>
                    {/* <button onClick={changeLang(t("change-lang-locale"))} >{t("change-lang-text")}</button> */}
                    {/* <NavLink href="/" locale="en">EN</NavLink> */}
                    </div>
                    <div className="navright md:hidden">
                    <button onClick={toggleNavbar}>
                        {!isClick ? (<svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 7L4 7" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" />
                            <path opacity="0.5" d="M20 12L4 12" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M20 17L4 17" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" />
                        </svg>) : (<svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>)}
                    </button>
                    </div>
                </div>
                <div className="md:hidden">
                    
                    {isClick && (<>


                        <div className="block">
                        <NavLink href="/" className="block hover:bg-white hover:text-black text-white p-3">{t("homepage")}</NavLink>
                            <NavLink href="/contact-us" className="block hover:bg-white hover:text-black text-white p-3">{t("contact")}</NavLink>
                        </div>
                        <div className="flex justify-end">
                            <NavLink href="/" locale={t("change-lang-locale")} className="hover:bg-white hover:text-black text-white  p-3 m-2">{t("change-lang-text")}</NavLink>
                            {/* <button onClick={changeLang(t("change-lang-locale"))} className="hover:bg-white hover:text-black text-white  p-3 m-2">{t("change-lang-text")}</button> */}
                       
                        </div>

                    </>
                    )}
                </div>
            </div>

        </>
    );
}

export default Navbar