"use client";

// import Handler1 from "@/app/api/formhandle"
import Turnstile from "react-turnstile";
import { useTranslations } from "next-intl";
import React, {useEffect, useReducer, useState} from "react";

const initialFormData = {
  fullName: '',
  token: ''
}
  // export type FormState = {
  //   success: boolean;
  //   error: boolean;
  //   message: string;
  // }

  // const initialState: FormState = {
  //   success: false,
  //   error: false,
  //   message: "",
  // }

  export const Form: React.FC<{}> = () => {
    const t = useTranslations("ContactPage");

    const [formData1, setFormData] = useState(initialFormData);

    const setValue = (k, v) => {
        setFormData((oldData) => (
            {
                ...oldData,
                [k]: v
            }
        ))
    }

    const handleSubmit = async () => {
        const endpoint = "/api/form-handler";
        const submitData = new FormData();
        for (const k in formData1) {
            submitData.append(k, formData1[k]);
        }
        try {
            const result = await fetch(endpoint, {
                body: submitData,
                method: 'post'
            });

            const outcome = await result.json();
            console.log(outcome);
        } catch (err) {
            console.error(err);
        }
    }


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

    

    return (
      <form
        className="contact-form row w-full md:w-[70%]"
        // action={formAction1}        method="POST"
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
        <Turnstile
                appearance="always"
                sitekey="0x4AAAAAAAx76H-rAXp2qBZd"
                onVerify={(token) => setValue('token', token)}
            />
        <div className="form-field col x-100 align-center mt-6 mb-4">
          <button
            className="submit-btn prevent-select"
            type="submit"
            onClick={handleSubmit}
            value={t("submit")}
          />
        </div>
      </form>
    )
  };

