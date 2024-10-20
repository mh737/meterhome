"use server"

import { FormState } from "./contact-us/form";
import { headers } from "next/headers";

export async function subscribeToNewsletter(
    prevState: FormState,
    formData: FormData
) {
    console.log(formData)
    // Destructure form data
    // const email = formData.get("email") as string;
    // const cfTurnstileResponse = formData.get(
    //     "cf-turnstile-response"
    // ) as string;

    // // If using a reverse proxy, ensure the X-Real-IP header is enabled to accurately capture the client's original IP address.
    // const ip = headers().get("x-real-ip");


    // // Create form data for Turnstile verification
    // const verifyFormData = new FormData();
    // const secretKey = process.env.NEXT_PRIVATE_TURNSTILE_SECRET_KEY;
    // if (!secretKey) {
    //     throw new Error("NEXT_PRIVATE_TURNSTILE_SECRET_KEY is not defined");
    // }
    // verifyFormData.append("secret", secretKey);
    // verifyFormData.append("response", String(cfTurnstileResponse));
    // verifyFormData.append("remoteip", String(ip));

    // const url =
    //     "https://challenges.cloudflare.com/turnstile/v0/siteverify";

    // try {
    //     // Verify Turnstile using Cloudflare endpoint
    //     const result = await fetch(url, {
    //         body: verifyFormData,
    //         method: "POST",
    //     });

    //     const outcome = await result.json();
    //     if (!outcome.success) {
    //         // Turnstile failed
    //         return {
    //             success: false,
    //             error: true,
    //             message: "Invalid CAPTCHA"
    //         };
    //     }

    //     // Turnstile success
    //     return {
    //         success: true,
    //         error: false,
    //         message: "",
    //     }
    // } catch (err) {
        // Request failed
        return {
            success: false,
            error: true,
            message: "Unable to verify CAPTCHA"
        }
    // }
}
