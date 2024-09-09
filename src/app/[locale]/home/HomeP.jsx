"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

import "./home.css";
import Image from "next/image";
import { Link as NavLink } from "../../../navigation";

import Image1 from "../../../../public/image/Demo2/1.png"
import Image2 from "../../../../public/image/Demo2/2.png"
import Image3 from "../../../../public/image/Demo2/3.png"
import Image4 from "../../../../public/image/Demo2/4.png"
import Image5 from "../../../../public/image/Demo2/5.png"
import Image6 from "../../../../public/image/Demo2/6.png"
import Image7 from "../../../../public/image/Demo2/7.png"
import Image8 from "../../../../public/image/Demo2/8.png"
import Image9 from "../../../../public/image/Demo2/9.png"
import Image10 from "../../../../public/image/Demo2/10.jpg"


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
      <div className="w-full md:text-center items-center md:wrap md:flex flex-col">
        <div className="ml-5 !z-10 !relative max-h-[348px]">
        <h1 className="text-7xl mb-4 md:mt-32 mt-4">Ultra-Wide Band eID Validation System</h1>
        <button className="p-2 border-amber-50 border-2 bg-black">Demostration</button>
      </div>
      <Image
        src={Image1}
        alt="Vercel Logo"
        className="large-pic !relative mt-[-120px] !z-0"
        priority
      />
      <div className="w-[70%] flex ml-auto mr-auto justify-between en mt-[-50px] z-10 !relative xl:w-[50%] md:mt-[-100px]">
        <div className="text-2xl">METER portal</div>
        <div className="text-2xl">Your device</div>
      </div>
      </div>
      
  
      <div className="unitwrapper spacer-top !flex-nowrap">
        <h2 className="eyebrow block">Feature</h2>
        <p className="headline block"> Revolutionary eID system</p>
        <div className="section-content text-center">
          {/* <p className="reduced-headline"></p> */}
          <p className="section-body  w-[100%] md:w-[80%] ml-auto mr-auto">
            Through METER portal, you can instantly issue and revoke eID, anywhere, anytime.
          </p>
        </div>
        <div className="w-[200%] md:w-full overflow-hidden text-center">
          <Image src={Image2} alt="Vercel Logo" className="max-w-[50%] inline-block md:h-[100vh] w-auto" priority />
          <Image src={Image3} alt="Vercel Logo" className="max-w-[50%] inline-block md:h-[100vh] w-auto" priority />

        </div>
        <p className="headline block"> True contactless expreience</p>
        <div className="section-content text-center">
          {/* <p className="reduced-headline"></p> */}
          <p className="section-body  w-[100%] md:w-[80%] ml-auto mr-auto pb-20">
            The anchor automatically connects to your device. <br /> Approach it to free your hands
          </p>
        </div>

        <div className="speakers-container">
          <Image src={Image4} alt="Vercel Logo" className="largepic" priority />
        </div>
        <p className="headline block pb-7 pt-28">{t("extra-security")}</p>

        <div className="section-content text-center">
          <p className="reduced-headline"> Your e-ID is stored on the Secure Element on your phone</p>

          <Image src={Image5} alt="Vercel Logo" className="h-[200px] mr-auto ml-auto mt-10 w-[200px]" priority />
          <p className="section-body  w-[100%] md:w-[80%] ml-auto mr-auto">
            Ultra-Wide Band technology (UWB) enables real-time ranging to provide tamper-resistant protection
          </p>
        </div>
        <div className="speakers-container">
          <Image src={Image6} alt="Vercel Logo" className="largepic" priority />
        </div>
        <div className="w-full flex wrap flex-col md:flex-row md:w-[80vw] md:justify-center items-center">
          <Image src={Image7} alt="Vercel Logo" className="md:h-[100vh] md:w-auto w-[70%] inline-block" priority />
          <div className="section-content text-center md:!w-[50%] !inline-block">
            <p className="reduced-headline">Lost mode</p>
            <p className="section-body  w-[100%] md:w-[80%] ml-auto mr-auto">
              The 'Lost Mode' on your phone immediately protects your identity
            </p>
          </div>
        </div>

      </div>
      <div className="unitwrapper spacer-top !flex-nowrap !bg-slate-100 !text-slate-950">
        <h2 className="eyebrow block">Use Case</h2>
        <p className="headline block pb-10">Application</p>
        <div className="flex flex-wrap w-full md:!w-[80%]">
          <Image src={Image8} alt="Vercel Logo" className="largepic" priority />
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto text-center">
            Parking entrance and exit. No more annoying stopping.<br /><br />
            <button className="p-3 bg-orange-500 rounded-full font-thin"> <div className="rounded-full border-white border-2 inline-block w-8 text-white">→</div> Learn more about <div className="font-bold inline-block hover:text-white ">Parking</div></button>
            {/* <button className="p-3 bg-orange-500  rounded-full hover:text-white">→ Learn more about <b>Parking</b></button> */}
          </p>

          <Image src={Image9} alt="Vercel Logo" className="largepic" priority />
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto text-center">
            Access control at different types of properties. You can share a one-time pass with your guest<br /><br />
            <button className="p-3 bg-orange-500 rounded-full font-thin"> <div className="rounded-full border-white border-2 inline-block w-8 text-white">→</div> Learn more about <div className="font-bold inline-block hover:text-white ">Access control</div></button>
            {/* <button className="p-3 bg-orange-500  rounded-full hover:text-white">→ Learn more about <b>Access control</b></button> */}
          </p>
          <Image src={Image10} alt="Vercel Logo" className="largepic" priority />
          <p className="section-body spacer-bottom w-[100%] md:w-[80%] ml-auto mr-auto text-center">
            Integrated into self-service kiosk. You can now truly focus on your work <br /><br />
            <button className="p-3 bg-orange-500 rounded-full font-thin"> <div className="rounded-full border-white border-2 inline-block w-8 text-white">→</div> Learn more about <div className="font-bold inline-block hover:text-white ">Self-service</div></button>
          </p>
        </div>
      </div>
      <div className=" !bg-slate-950 !text-slate-100">
        
        <div className="w-full md:w-[90%] flex ml-auto mr-auto mt-32 ">
          <div className="w-[50%]">
          <div className="text-slate-300">Contact</div>
              <ul>
                <NavLink href="/"><li className="text-2xl">Find US</li></NavLink>
                <NavLink href="/"><li className="text-2xl">General Enquiry</li></NavLink>
                <NavLink href="/"><li className="text-2xl">Feedback</li></NavLink>
                <NavLink href="/"><li className="text-2xl">Request a Test Ride</li></NavLink>
              </ul>
          </div>
          <div className="w-[50%]">
              <div className="text-slate-300">Explore METER</div>
              <ul>
                <NavLink href="/"><li className="text-2xl">METER HK Offcial Online Store</li></NavLink>
                <NavLink href="/"><li className="text-2xl">Subscribe to our newsletter</li></NavLink>
                <NavLink href="/"><li className="text-2xl">METERLIMITED.com</li></NavLink>
              </ul>
          </div>
        </div>
        <div className="w-full md:w-[90%] flex ml-auto mr-auto mt-32 mb-32">
        <div className="w-[50%]">
        <ul>
                <NavLink href="/"><li className="text-2xl inline-block mr-3">FB</li></NavLink>
                <NavLink href="/"><li className="text-2xl inline-block">IG</li></NavLink>
              </ul>
        </div>
        <div className="w-[50%]">
        <ul className="text-end">
                <NavLink href="/"><li className="text-2xl inline-block mr-3">English</li></NavLink>
                <NavLink href="/"><li className="text-2xl inline-block">Chinese</li></NavLink>
              </ul>
        </div>
        </div>
      </div>
    </>
  );
}

export default HomeP;


{/* <video width="320" height="240" controls preload="none">
<source src="/image/Demo2/ani1.MP4" type="video/mp4" />
<track
  src="/path/to/captions.vtt"
  kind="subtitles"
  srcLang="en"
  label="English"
/>
Your browser does not support the video tag.
</video> */}