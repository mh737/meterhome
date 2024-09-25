"use client";

"use client";


import Image from "next/image";
import {Link as NavLink , usePathname} from '@/i18n/routing';
// import { Link} from "../../../navigation";
import { useTranslations } from "next-intl";

import lin from "@/../public/svg/lin.svg"
import ig from "@/../public/svg/ig.svg"
import "./footer.css"

function Footbar() {
  const t = useTranslations("Footer");

  const pathname = usePathname();
  // console.log(pathname)
  return (
    <>
      <footer className="  !text-slate-100">
        <div className="w-full md:w-[90%] md:flex ml-auto mr-auto mt-32 ">
          <div className="md:w-[50%] mb-14 md:mb-0">
            <div className="text-slate-300">{t("contact")}</div>
            <ul>
              <NavLink href="/">
                <li className="text-2xl">{t("contact1")}</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl">{t("contact2")}</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl">{t("contact3")}</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl">{t("contact4")}</li>
              </NavLink>
            </ul>
          </div>
          <div className="md:w-[50%] w-full">
            <div className="text-slate-300">{t("contact5")}</div>
            <ul>
              <NavLink href="/">
                <li className="text-2xl">{t("contact6")}</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl">{t("contact7")}</li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl en">METERLIMITED.com</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[90%] md:flex ml-auto mr-auto mt-32 mb-32">
          <div className="md:w-[50%]">
            <ul>
              <NavLink href="/">
                <li className="text-2xl inline-block mr-3">
                  <Image
                    src={lin}
                    width={39}
                    height={39}
                    alt="menu hue"
                    className="hue"

                  ></Image>
                </li>
              </NavLink>
              <NavLink href="/">
                <li className="text-2xl inline-block">
                  <Image
                    src={ig}
                    width={40}
                    height={40}
                    alt="menu"
                    className="hue"
                  ></Image>
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="md:w-[50%]">
            <ul className="md:text-end">
              {/* <NavLink href="/" locale="en">
                <li className="text-2xl inline-block mr-3 en">{t("contact8")}</li>
              </NavLink> */}
               <NavLink href={pathname} locale={t("change-lang-locale") as "en" | "hk" | undefined}>
                <li className="text-2xl inline-block">{t("change-lang-text")}</li>
              </NavLink>
            </ul>
          </div>
        </div>
        <p className="w-full en text-center">
          &copy;METER LIMITED  一米通有限公司 
          <span className="text-center inline-block hidden">Business Registration in Hong Kong No.76220612 </span>
          <span className="text-end inline-block">&ensp;All Rights Reservered.</span>
    
        </p >
      </footer>
    </>
  );
}

export default Footbar;
