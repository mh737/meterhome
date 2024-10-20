"use client";


import {Form} from "./form";
import Footbar from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTranslations } from "next-intl";
import "./Specsty.css";

import {Link as NavLink } from '@/i18n/routing';

// import { Link as NavLink } from "../../../navigation";

function Contact() {
  const t = useTranslations("ContactPage");

//   const [mounted, setMounted] = useState(false);
//   if (!mounted) return <></>;

  return (
    // <div className="App">
    <>
      <Navbar></Navbar>
      <main className="bg-gray-200 h-[100vh] w-full">
        <h1 className="text-4xl text-center w-full pt-32 text-black">{t("title")}</h1>
        <Form></Form>
        <NavLink href="/">
          <h1 className="underline text-black hover:underline-offset-2 w-full text-xl text-center">
            {t("back")}
          </h1>
        </NavLink>
      </main>
      <Footbar></Footbar>
    </>
  );
}

export default Contact;
export const runtime = "experimental-edge";
