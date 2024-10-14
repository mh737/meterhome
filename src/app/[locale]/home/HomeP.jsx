"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import React from "react";
import Popup from "reactjs-popup";
import "./popup.css";

import "./home.css";
import Image from "next/image";

import Image1 from "../../../../public/image/Demo2/1.png";
import Image2 from "../../../../public/image/Demo2/2.png";
import Image3 from "../../../../public/image/Demo2/3.png";
import Image4 from "../../../../public/image/Demo2/4.png";
import Image5 from "../../../../public/image/Demo2/5.png";
import Image6 from "../../../../public/image/Demo2/6.png";
import Image7 from "../../../../public/image/Demo2/7.png";
import Image8 from "../../../../public/image/Demo2/8.png";
import Image9 from "../../../../public/image/Demo2/9.png";
import Image10 from "../../../../public/image/Demo2/10.jpg";

function HomeP() {
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const t = useTranslations("HomePage");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <>
      {/* <script src="/nav.js" async /> */}

      <div className="w-full md:text-center items-center md:wrap md:flex flex-col">
        <div className="ml-5 !z-10 !relative max-h-[348px]">
          <h1 className=" mb-4 md:mt-32 mt-4">
          <div className="block text-start en">{t("pretitle")}</div>
            <div className="text-5xl indent-[-1px]">{t("title")}</div>
            <div className="block md:text-end en">{t("aftertitle")}</div>
          </h1>
          

          <Popup
            trigger={
              <button className="p-2 border-amber-50 border-[1px] bg-black">
                {t("titlebutton")}
              </button>
            }
            position="right center"
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                {/* <button className="close" onClick={close}>
                  &times;
                </button> */}
                {/* <div className="header"> GeeksforGeeks </div> */}
                <div className="content m-0">
                  <video
                    width="320"
                    height="240"
                    controls
                    preload="true"
                    autoplay playsinline muted loop
                  >
                    <source src="/image/Demo2/ani1.MP4" type="video/mp4" />
                    <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="actions p-0 m-0">
                  <button
                    className="button !bg-red-600 !w-full m-0 !mt-2"
                    onClick={() => {
                      console.log("Button clicked");
                      close();
                    }}
                  >
                    {t("closedemo")}
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <Image
          src={Image1}
          alt="Vercel Logo"
          className="large-pic !relative mt-[-60px] md:mt-[-120px] !z-0"
          priority
        />
        <div className="w-[70%] flex ml-auto mr-auto justify-between en mt-[-50px] z-10 !relative xl:w-[50%] md:mt-[-100px]">
          <div className="text-2xl">{t("titlebuttonleft")}</div>
          <div className="text-2xl text-end ">{t("titlebuttonright")}</div>
        </div>
      </div>

      <div className="unitwrapper spacer-top !flex-nowrap">
        <h2 className="eyebrow block">{t("feature")}</h2>
        <p className="headline block">{t("revolutary")}</p>
        <div className="section-content text-center">
          {/* <p className="reduced-headline"></p> */}
          <p className="section-body  w-[100%] md:w-[80%] ml-auto mr-auto">
            {t("low-cost-2")}
          </p>
        </div>
        <div className="w-[100%] md:w-full overflow-hidden text-center">
          <Image
            src={Image2}
            alt="Vercel Logo"
            className="max-w-[50%] inline-block md:h-[100vh] w-auto"
            priority
          />
          <Image
            src={Image3}
            alt="Vercel Logo"
            className="max-w-[50%] inline-block md:h-[100vh] w-auto"
            priority
          />
        </div>
        <p className="headline block pt-28"><h2 className="eyebrow block mb-8">{t("precontact")}</h2>{t("contactless")}</p>
        <div className="section-content text-center">
          {/* <p className="reduced-headline"></p> */}
          <p className="section-body  w-[100%] md:w-[80%] ml-auto mr-auto pb-20">
            {t("low-cost-1")} <br /> {t("low-cost-1-1")} 
          </p>
        </div>

        <div className="speakers-container">
          <Image src={Image4} alt="Vercel Logo" className="largepic" priority />
        </div>
        
        <p className="headline block pb-7 pt-28"><h2 className="eyebrow block mb-8">{t("preextrasec")}</h2>{t("extra-security")}</p>

        <div className="section-content text-center">
          <p className="reduced-headline">
            {" "}
            {t("extra-security-1")}
          </p>

          <Image
            src={Image5}
            alt="Vercel Logo"
            className="h-[200px] mr-auto ml-auto mt-10 w-[200px]"
            priority
          />
          <p className="section-body  w-[100%] md:w-[80%] ml-auto mr-auto">
            {t("extra-security-2")}
          </p>
        </div>
        <div className="speakers-container">
          <Image src={Image6} alt="Vercel Logo" className="largepic" priority />
        </div>
        <div className="w-full flex wrap flex-col md:flex-row md:w-[80vw] md:justify-center items-center">
          <Image
            src={Image7}
            alt="Vercel Logo"
            className="md:h-[100vh] md:w-auto w-[70%] inline-block md:mb-12"
            priority
          />
          <div className="section-content text-center md:!w-[50%] !inline-block">
            <p className="reduced-headline">{t("lostmode")}</p>
            <p className="section-body  w-[100%] md:w-[80%] ml-auto mr-auto">
              {t("extra-security-3")}
            </p>
          </div>
        </div>
      </div>
      <div className="unitwrapper spacer-top !flex-nowrap !bg-slate-100 !text-slate-950">
        <h2 className="eyebrow block">{t("use-case")}</h2>
        <p className="headline block pb-10">{t("application")}</p>
        <div className="flex flex-wrap w-full md:!w-[80%] justify-center">
          <Image src={Image8} alt="Vercel Logo" className="largepic" priority />
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto text-center">
          {t("use-case-4-1")}
            <br />
            <br />
            <button className="p-3 bg-orange-500 rounded-full font-thin goto">
              {" "}
              <div className="rounded-full border-white border-2 inline-block w-9 text-white">
                <div className="w-full h-full flex items-center justify-center">
                  →
                </div>
              </div>{t("learnmoreabout")}
              <div className="font-bold inline-block hover:text-white servicegoto ">
              {t("use-case-4")}
              </div>
            </button>
          </p>

          <Image src={Image9} alt="Vercel Logo" className="largepic" priority />
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto text-center">
          {t("use-case-1-1")}
            <br />
            <br />
            <button className="p-3 bg-orange-500 rounded-full font-thin goto">
              {" "}
              <div className="rounded-full border-white border-2 inline-block w-9 text-white">
                <div className="w-full h-full flex items-center justify-center">
                  →
                </div>
              </div>{t("learnmoreabout")}
              <div className="font-bold inline-block hover:text-white  servicegoto">
              {t("use-case-1")}
              </div>
            </button>
          </p>
          <Image
            src={Image10}
            alt="Vercel Logo"
            className="largepic"
            priority
          />
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto text-center">
          {t("use-case-2-1")}
             <br />
            <br />
            <button className="p-3 bg-orange-500 rounded-full font-thin goto">
              {" "}
              <div className="rounded-full border-white border-2 inline-block w-9 text-white">
                <div className="w-full h-full flex items-center justify-center">
                  →
                </div>
              </div>{t("learnmoreabout")}
              <div className="font-bold inline-block hover:text-white servicegoto">
                {t("use-case-2")}
              </div>
            </button>
          </p>
        </div>
      </div>
      
    </>
  );
}

export default HomeP;
