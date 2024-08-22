import "../../../../public/HomeStyles.css";
import Image from "next/image";
import Script from 'next/script'
import { useTranslations } from 'next-intl';

function HomeP() {
  const t = useTranslations('HomePage');

  return (
    <>
      <script src="/nav.js" async />
      {/* <Script src="/nav.js"></Script> */}

      <div className="home ">
        <div className="meterfore md:mt-[10vh]">
          <h1 className="meter w-[100vw] md:w-fit text-center">METER</h1>

        </div> 
        <div className="flex-col flex align-middle flex-wrap">
          <h2 className="ml-auto mr-auto text-4xl text-white">{t("title")}</h2>
          <div className="flex justify-center align-middle">
            <a href="" className="m-2 p-2 border-2 bg-black text-white hover:bg-white hover:text-black transition-all" >{t("how-to-use")}</a>
            <a href="" className="m-2 p-3 bg-blue-800 text-white hover:bg-blue-500 transition-all">{t("select-plan")}</a>
          </div>
        </div>

        <h4>{t("scroll-down")}</h4>
      </div>
      <div className="container w-screen">
        <div className="detail w-screen ">
          <div className="detailchild  flex flex-wrap content-center">
            <h1 className="text-6xl mb-12 font-bold">Extra Security</h1>
            <div className="scrollspec mt-5 w-full md:w-[60vw]">
            <p>Your e-ID is stored on the Secure Element </p>
            <p>Your e-ID is stored on the Secure Element </p>
            </div>
          </div>
          <div className="detailchild flex flex-wrap content-center">
            <h1 className="text-6xl mb-12 font-bold">Low Cost</h1>
            <div className="scrollspec mt-5  w-full md:w-[60vw]">
              <p>Your e-ID is stored on the Secure Element </p>
              <p>Your e-ID is stored on the Secure Element </p>
              <p>Your e-ID is stored on the Secure Element </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home">
        <h1 className="text-6xl mb-12 font-bold text-white">USE CASE</h1>
        <div className="scrollspec mt-5 w-full md:w-[60vw]">
        <p>Your e-ID is stored on the Secure Element </p>
              <p>Your e-ID is stored on the Secure Element </p>
              <p>Your e-ID is stored on the Secure Element </p>
              <p>Your e-ID is stored on the Secure Element </p>
        </div>
      </div>

      {/* <p className="footer">&copy; METER Limited 2024</p> */}
    </>
  );
}

export default HomeP;
