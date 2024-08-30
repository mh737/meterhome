"use client";
import { React, useState, useTransition } from "react";

import "./NavbarStyles.css";
import Image from 'next/image';
import { Link as NavLink } from "../../../navigation"
import { useTranslations } from 'next-intl';
// import twitterIcon from "../../public/meter.jpg";

// import {useRouter, usePathname} from '@/navigation';
// import {useParams} from 'next/navigation';
import ham from "../../../../public/svg/hamburger.svg";
import cross from "../../../../public/svg/cross.svg";

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
            <nav id="navbar">
                <div className="nav">
                    <NavLink href="/" className="!p-0 ">
                        <div className="navleft">

                            <Image
                                priority
                                src="/image/meter.jpg"
                                width={47}
                                height={47}
                                alt="METER logo"
                            />
                            <pre >METER</pre>

                        </div>
                    </NavLink>
                    <div className="navcenter max-md:hidden">
                        {/* <a href="/plan" className="">Plan</a>
                <a href="tutorial">tutorial</a>
                <a href="/support">Supported device</a> */}
                        <NavLink href="/" className="link">{t("homepage")}</NavLink>
                        <NavLink href="/contact-us" className="link">{t("contact")}</NavLink>
                    </div>
                    <div className=" max-md:hidden">
                        <NavLink href="/" locale={t("change-lang-locale")} className="en link" >{t("change-lang-text")}</NavLink>
                        {/* <button onClick={changeLang(t("change-lang-locale"))} >{t("change-lang-text")}</button> */}
                        {/* <NavLink href="/" locale="en">EN</NavLink> */}
                    </div>
                    <div className="flex md:hidden">
                        <button onClick={toggleNavbar}>
                            {!isClick ? (
                                <Image
                                    src={ham}
                                    width={47}
                                    height={47}
                                    alt="menu"

                                ></Image>
                               
                            ) : (
                                <Image
                                    src={cross}
                                    width={47}
                                    height={47}
                                    alt="menu"

                                ></Image>
                            )}
                             <NavLink href="/contact-us" className="rounded-2xl m-2 p-1 !pl-2 !pr-2 !bg-blue-800 text-white hover:!bg-blue-500 transition-all inline-block">{t("contact")}</NavLink>
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
                            <NavLink href="/" locale={t("change-lang-locale")} className="hover:bg-white hover:text-black text-white en p-3 m-2">{t("change-lang-text")}</NavLink>
                            {/* <button onClick={changeLang(t("change-lang-locale"))} className="hover:bg-white hover:text-black text-white en p-3 m-2">{t("change-lang-text")}</button> */}

                        </div>

                    </>
                    )}
                </div>
            </nav>

        </>
    );
}

export default Navbar