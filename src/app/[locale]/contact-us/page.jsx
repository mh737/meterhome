"use client";

import {useState} from "react";

import Footbar from "../components/Footer";
import Navbar from "../components/Navbar";
import { useTranslations } from "next-intl";
import "./Specsty.css";
import { useEffect } from "react";

import { Link as NavLink } from "../../../navigation";

function Contact() {
  const t = useTranslations("ContactPage");

  // useEffect(() => {
  //     const inputs = document.querySelectorAll('.input-text');

  //     inputs.forEach(input => {
  //         input.addEventListener('keyup', function() {
  //             const label = this.nextElementSibling;
  //             if (this.value.trim() !== '') {
  //                 label.classList.add('not-empty');
  //             } else {
  //                 label.classList.remove('not-empty');
  //             }
  //         });
  //     });

  //     return () => {
  //         inputs.forEach(input => {
  //             input.removeEventListener('keyup', function() {
  //                 const label = this.nextElementSibling;
  //                 if (this.value.trim() !== '') {
  //                     label.classList.add('not-empty');
  //                 } else {
  //                     label.classList.remove('not-empty');
  //                 }
  //             });
  //         });
  //     };
  // }, []);

  useEffect(() => {
    const inputs = document.querySelectorAll(".input-text");

    const handleKeyUp = function () {
      if (this.value.trim() !== "") {
        this.classList.add("not-empty");
      } else {
        this.classList.remove("not-empty");
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("keyup", handleKeyUp);
    });

    // Cleanup function
    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("keyup", handleKeyUp);
      });
    };
  }, []);

//   const [mounted, setMounted] = useState(false);
//   if (!mounted) return <></>;

  return (
    // <div className="App">
    <>
      <Navbar></Navbar>
      <main className="bg-gray-200 h-[100vh] w-full">
        <h1 className="text-4xl text-center w-full pt-32 text-black">{t("title")}</h1>
        <form
          className="contact-form row w-full md:w-[70%]"
          action="https://formspree.io/f/mrbzlvvd"
          method="POST"
        >
          <div className="form-field col x-50">
            <input
              name="name"
              className="input-text js-input"
              type="text"
              required
            />
            <label className="label prevent-select" htmlFor="name">
              {t("name")}
            </label>
          </div>
          <div className="form-field col x-50">
            <input
              name="email"
              className="input-text js-input"
              type="email"
              required
            />
            <label className="label prevent-select" htmlFor="email">
              {t("email")}
            </label>
            <label className="label !-bottom-10 prevent-select" htmlFor="message">
              {t("message")}
            </label>
          </div>
          <div className="form-field col x-100">
            {/* <input name="message" className="input-text js-input text-wrap whitespace-normal" type="text" required /> */}
            <textarea
              name="message"
              className="input-text !h-[100px]"
              required
            ></textarea>
            
          </div>
          <div className="form-field col x-100 align-center mt-6 mb-4">
            <input
              className="submit-btn prevent-select"
              type="submit"
              value={t("submit")}
            />
          </div>
        </form>
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
