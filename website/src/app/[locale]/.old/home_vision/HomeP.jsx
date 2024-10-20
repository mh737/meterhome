"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import "./home.css";
import Image from "next/image";

import Image1 from "../../../../public/image/2.jpg";
import Image2 from "../../../../public/image/1.jpg";
import Image3 from "../../../../public/image/3.jpg";

function HomeP() {
  const t = useTranslations("HomePage");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <>
      <script src="/nav.js" async />
      <div className="unitwrapper !h-[calc(100vh-48px)] md:!h-[calc(100vh-57px)] bg-zinc-300">
        <h1 className="absolute bottom-[7%] !z-20 bg-slate-950">new</h1>
        <div className="frontpic absolute bottom-0 z-10">
          <Image
            src={Image3}
            alt="Vercel Logo"
            className="section-hero"
            priority
          />
        </div>
      </div>

      <div className="unitwrapper spacer-top !flex-nowrap">
        <h2 className="eyebrow block">Feature</h2>
        <p className="headline block"> Low cost</p>
        <p className=" spacer-bottom section-content">
          <div className="w-[100%] md:w-[90%] section-body text-center ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </div>
        </p>
        <Image src={Image1} alt="Vercel Logo" className="smallpic" priority />
        <div className="section-content text-center">
          <p className="reduced-headline">{t("low-cost-1")}</p>
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </p>
        </div>

        <Image src={Image1} alt="Vercel Logo" className="smallpic " priority />
        <div className="section-content text-center">
          <p className="reduced-headline">{t("low-cost-1")}</p>
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </p>
        </div>
        <div className="speakers-container">
          <Image src={Image2} alt="Vercel Logo" className="largepic" priority />
        </div>
        <div className="section-content text-center">
          <p className="reduced-headline">{t("low-cost-1")}</p>
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </p>
        </div>
        <p className="headline block">{t("extra-security")}</p>
        <p className="section-body spacer-bottom section-content">
          <div className="w-[100%] md:w-[90%] section-body text-center ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </div>
        </p>
        <Image src={Image1} alt="Vercel Logo" className="smallpic" priority />
        <div className="section-content text-center">
          <p className="reduced-headline">{t("low-cost-1")}</p>
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </p>
        </div>
        <Image src={Image1} alt="Vercel Logo" className="smallpic" priority />
        <div className="section-content text-center">
          <p className="reduced-headline">{t("low-cost-1")}</p>
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </p>
        </div>
        <Image src={Image1} alt="Vercel Logo" className="smallpic" priority />
        <div className="section-content text-center">
          <p className="reduced-headline">{t("low-cost-1")}</p>
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </p>
        </div>
        <Image src={Image1} alt="Vercel Logo" className="smallpic" priority />
        <div className="section-content text-center">
          <p className="reduced-headline">{t("low-cost-1")}</p>
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </p>
        </div>
      </div>
      <div className="unitwrapper spacer-top !flex-nowrap !bg-slate-100 !text-slate-950">
        <h2 className="eyebrow block">Use Case</h2>
        <p className="headline block">Applicate at</p>
        <p className="section-body spacer-bottom section-content">
          <div className="w-[100%] md:w-[90%] section-body text-center ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </div>
        </p>
        <Image src={Image1} alt="Vercel Logo" className="smallpic" priority />
        <div className="section-content text-center">
          <p className="reduced-headline">{t("low-cost-1")}</p>
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </p>
        </div>
        <Image src={Image1} alt="Vercel Logo" className="smallpic" priority />
        <div className="section-content text-center">
          <p className="reduced-headline">{t("low-cost-1")}</p>
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto">
            by using our UWB secure module, your identification will
            automatically verify with the terminal
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeP;
