"use client";

import Turnstile from "react-turnstile";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const initialFormData = {
  name: '',
  email: '',
  message: '',
  token: ''
};

export const Form = () => {
  const t = useTranslations("ContactPage");
  const [formData1, setFormData] = useState(initialFormData);

  const setValue = (k, v) => {
    setFormData((oldData) => ({ ...oldData, [k]: v  }));
    // console.log(k, v);
    // console.log(formData1);
  };
  

  const handleSubmit = async () => {
    // console.log(token);
    const endpoint = "/api/form-handler";
    setFormData((oldData) => ({ ...oldData, ["token"]: $("input[name='cf-turnstile-response']").val()  }));
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
      $("#status").html(outcome.message);
    } catch (err) {
      console.error(err);
      $("#status").html("It's seems like you are offline. Please check your internet connection.");
    }
  };

  window.$ = window.jQuery = require('jquery');
  $(document).ready(()=>{
    // var form = document.getElementById("myForm");
    function handleForm(event) { event.preventDefault(); handleSubmit(); } 
    
    // form.addEventListener('submit', handleForm);
   $("#myForm").on('submit', function(e){
      handleForm(e);
  })


  })



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
      id="myForm"
    >
      <div className="form-field col x-50">
        <input
          name="name"
          className="input-text js-input"
          type="text"
          required
          onChange={(e) => setValue('name', e.target.value)}
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
          onChange={(e) => setValue('email', e.target.value)}
        />
        <label className="label prevent-select" htmlFor="email">
          {t("email")}
        </label>
      </div>
      <div className="form-field col x-100">
        <textarea
          name="message"
          className="input-text !h-[100px]"
          required
          onChange={(e) => setValue('message', e.target.value)}
        ></textarea>
        <label className="label !bottom-10 prevent-select" htmlFor="message">
          {t("message")}
        </label>
      </div>

      <Turnstile
        appearance="always"
        sitekey="0x4AAAAAAAx76H-rAXp2qBZd"
        onVerify={(token) => setValue('token', token)}
      />
      <div className="form-field col x-100 align-center mt-6 mb-4">
        <button
          className="submit-btn prevent-select"
          type="submit" >
          {t("submit")}
        </button>
        <br /><br /><pre id="status"> </pre>
      </div>
    </form>
  );
};
