import { useTranslations } from 'next-intl';

import "./home.css"
import Image from "next/image";
import { Link as NavLink } from "../../../navigation"

import Image1 from "../../../../public/image/2.png";

function HomeP() {
  const t = useTranslations('HomePage');

  return (
    <>
      <script src="/nav.js" async />
      <div className="unitwrapper !h-[calc(100vh-50px)] md:!h-[calc(100vh-57px)] bg-zinc-300">
        <h1 className="absolute bottom-[7%] !z-20 bg-slate-950">new</h1>
        <div className="frontpic absolute bottom-0 z-10">
          <Image
                    src={Image1}
                    alt="Vercel Logo"
                    className="h-[80vh] w-[50vw]"
                    priority
                  />
        </div>
        
      </div>
      <div className="unitwrapper spacer-top !flex-nowrap">
        <p className="eyebrow block">Feature</p>
        <p className="headline block"> Low cost</p>
        <Image
          src={Image1}
          alt="Vercel Logo"
          className="smallpic"
          priority
        />
        <p className="reduced-headline">{t("low-cost-1")}</p>
        <p className="section-body spacer-bottom">by using our UWB secure module, your identification will automatically verify with the terminal</p>
        <Image
          src={Image1}
          alt="Vercel Logo"
          className="smallpic"
          priority
        />
        <Image
          src={Image1}
          alt="Vercel Logo"
          className="largepic"
          priority
        />
      </div>
    </>
  );
}

export default HomeP;