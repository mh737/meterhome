import "../../../../public/HomeStyles.css";
// import Image from "next/image";
// import Script from 'next/script'
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Link as NavLink } from "../../../../navigation"


function HomeP() {
  const t = useTranslations('HomePage');

  return (
    <>
      <script src="/nav.js" async />
      {/* <Script src="/nav.js"></Script> */}

      <div className="home ">
        <div className="meterfore md:mt-[10vh]">
          <h1 className="meter w-[100vw] md:w-fit text-center en font-black text-[25vw]">METER</h1>

        </div> 
        <div className="flex-col flex align-middle flex-wrap">
          <h2 className="ml-auto mr-auto text-4xl text-white text-center">{t("title")}</h2>
          <div className="flex justify-center align-middle">
            <a href="https://www.instagram.com/meterhk/" className="m-2 p-2 border-2 bg-black text-white hover:bg-white hover:text-black transition-all" >{t("how-to-use")}</a>
            <NavLink href="/contact-us" className="m-2 p-3 bg-blue-800 text-white hover:bg-blue-500 transition-all">{t("select-plan")}</NavLink>
          </div>
        </div>


        <h4>{t("scroll-down")}</h4>
      </div><div className="container"></div>
      <div className="home !bg-black usecase">
        <h1 className="text-6xl mb-12 font-bold text-white">{t("use-case")}</h1>
        <div className="scrollspec mt-5 w-full md:w-[60vw]">
            <p>{t("use-case-1")} </p>
            <p>{t("use-case-2")} </p>
            <p>{t("use-case-3")} </p>
            <p>{t("use-case-4")} </p>
            </div>
        {/* <div className="mt-5 w-full md:w-[60vw]">
          <div className="CSSgal">

            <s id="sss1"></s> 
            <s id="sss2"></s>
            <s id="sss3"></s>
            <s id="sss4"></s>

            <div className="slider">
              <div>
                <h2>{t("use-case-1")}</h2>
              </div>
              <div >
                <h2>{t("use-case-2")}</h2>
              </div>
              <div >
                <h2>{t("use-case-3")}</h2>
              </div>
              <div>
                <h2>{t("use-case-4")}</h2>
              </div>
            </div>

            <div className="prevNext">
              <div><a href="#sss4"></a><a href="#sss2"></a></div>
              <div><a href="#sss1"></a><a href="#sss3"></a></div>
              <div><a href="#sss2"></a><a href="#sss4"></a></div>
              <div><a href="#sss3"></a><a href="#sss1"></a></div>
            </div>

            <div className="bullets">
              <a href="#sss1">1</a>
              <a href="#sss2">2</a>
              <a href="#sss3">3</a>
              <a href="#sss4">4</a>
            </div>

          </div>
        </div> */}
      </div>

      <div className="w-screen">
        <div className="detail w-screen ">
          <div className="detailchild  flex flex-wrap content-center">
            <h1 className="text-6xl mb-12 font-bold">{t("low-cost")}</h1>
            <div className="mt-5 w-full md:w-[60vw]">
          <div className="CSSgal">

            <s id="s1"></s> 
            <s id="s2"></s>

            <div className="slider">
              <div>
                <h2>{t("low-cost-1")}</h2>
              </div>
              <div >
                <h2>{t("low-cost-2")}</h2>
              </div>
            </div>

            <div className="prevNext">
              <div><a href="#s2"></a><a href="#s2"></a></div>
              <div><a href="#s1"></a><a href="#s1"></a></div>
            </div>

            <div className="bullets">
              <a href="#s1">1</a>
              <a href="#s2">2</a>
            </div>

          </div>
          </div>
          </div>
          <div className="detailchild flex flex-wrap content-center">
            <h1 className="text-6xl mb-12 font-bold">{t("extra-security")}</h1>
            <div className="mt-5 w-full md:w-[60vw]">
          <div className="CSSgal">

            <s id="ss1"></s> 
            <s id="ss2"></s>
            <s id="ss3"></s>

            <div className="slider">
              <div>
                <h2>{t("extra-security-1")}</h2>
              </div>
              <div >
                <h2>{t("extra-security-2")}</h2>
              </div>
              <div >
                <h2>{t("extra-security-3")}</h2>
              </div>
            </div>

            <div className="prevNext">
              <div><a href="#ss3"></a><a href="#ss2"></a></div>
              <div><a href="#ss1"></a><a href="#ss3"></a></div>
              <div><a href="#ss2"></a><a href="#ss1"></a></div>
            </div>

            <div className="bullets">
              <a href="#ss1">1</a>
              <a href="#ss2">2</a>
              <a href="#ss3">3</a>
            </div>

          </div>
          </div>
          </div>
        </div>
      </div>
      
      <p className="w-full text-center en">&copy; METER Limited, 2024</p>
    </>
  );
}

export default HomeP;
