"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React, {useEffect, useReducer, useState} from "react";
import Script from "next/script";
import { subscribeToNewsletter } from "../action";

  export type FormState = {
    success: boolean;
    error: boolean;
    message: string;
  }

  const initialState: FormState = {
    success: false,
    error: false,
    message: "",
  }
  
  // const useFormState = (action: (data: any) => Promise<any>, initialState: FormState) => {
  //   const [state, dispatch] = useReducer((state: FormState, action: any) => {
  //     switch (action.type) {
  //       case 'SUCCESS':
  //         return { ...state, success: true, error: false, message: action.message };
  //       case 'ERROR':
  //         return { ...state, success: false, error: true, message: action.message };
  //       default:
  //         return state;
  //     }
  //   }, initialState);

  //   const formAction = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     const formData = new FormData(event.currentTarget);
  //     try {
  //       const response = await action(Object.fromEntries(formData.entries()));
  //       dispatch({ type: 'SUCCESS', message: response.message });
  //     } catch (error: any) {
  //       dispatch({ type: 'ERROR', message: error.message });
  //     }
  //   };

  //   return [state, formAction] as const;
  // };

  declare global {
    interface Window {
      turnstile: any;
    }
  }

  export const Form: React.FC<{}> = () => {
    const [state, formAction] = useState(    initialState );


    const formAction1 = async (event: React.FormEvent<HTMLFormElement>) => {
      // console.log(event)
      // event.preventDefault();
      const ne1 = new FormData(event.currentTarget);
      console.log(ne1)
      formAction(await subscribeToNewsletter(initialState, ne1));
    }
  
  
      const pathname = usePathname();
  
      useEffect(() => {
          const turnstileContainers =
              document.querySelectorAll(".cf-turnstile");
  
          turnstileContainers.forEach((turnstileContainer) => {
              turnstileContainer.innerHTML = "";
              if (window && window.turnstile) {
                  window.turnstile.render(turnstileContainer, {
                      sitekey:
                          process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
                      callback: "javascriptCallback",
                  });
              }
          });
      }, [pathname]);

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
  

    //final working ver
    // useEffect(() => {
    //   const inputs = document.querySelectorAll(".input-text");
    //   const handleKeyUp = function () {
    //     if (this.value.trim() !== "") {
    //       this.classList.add("not-empty");
    //     } else {
    //       this.classList.remove("not-empty");
    //     }
    //   };
    //   inputs.forEach((input) => {
    //     input.addEventListener("keyup", handleKeyUp);
    //   });
    //   // Cleanup function
    //   return () => {
    //     inputs.forEach((input) => {
    //       input.removeEventListener("keyup", handleKeyUp);
    //     });
    //   };
    // }, []);

    

    return (
      <form
        className="contact-form row w-full md:w-[70%]"
        action={formAction1}
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
          <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onloadTurnstileCallback"
          async
          defer
      ></Script>
        <div className="block flex-row">
          <div
            className="cf-turnstile"
            data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            data-callback="javascriptCallback"
            data-size="flexible"
          ></div>
        </div>
        <div className="form-field col x-100 align-center mt-6 mb-4">
          <input
            className="submit-btn prevent-select"
            type="submit"
            value={t("submit")}
          />
        </div>
        {state.success === true && (
                <div>Success! Thanks for your response</div>
            )}
            {state.error === true && <div>{state.message}</div>}

      </form>
    )
  };

