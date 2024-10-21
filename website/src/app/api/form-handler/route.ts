// @/pages/api/form-handler.js

import { NextResponse } from "next/server";

export async function POST(req: Request, res: any) {
    return checkTurnstileToken(req, res);
}


async function checkTurnstileToken(req : Request, { params }: any) {

    
    const formData1 = await req.formData()

    const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
    
    const name = formData1.get('token')  as string 
    const token =  name; //req.body.token 

    const formData = new FormData();
    const secretKey = process.env.TURNSTILE_SECRET_KEY;
    if (!secretKey) {
        return Response.json({ message: `${secretKey} is not defined`});
    }
    formData.append('secret', secretKey);
    formData.append('response', token);

    try {
        const result = await fetch(url, {
            body: formData,
            method: 'POST',
        });
return result;
        const outcome1 = await result.json();
        
        if (outcome1.success) {
            return processForm(req);
        }
    } catch (err) { console.error(err); }
    // res.status(500).json();
    return Response.json({ message: "Failed to validate CAPTCHA response" })
}

async function processForm(req: Request) {
  
    const url = 'https://formspree.io/f/mrbzlvvd'
    const formData1 = await req.formData()
    const formData = new FormData();
    
    formData.append('token', formData1.get('name')  as string );
    formData.append('email', formData1.get('email')  as string );
    formData.append('message', formData1.get('message')  as string );
    formData.append('token', formData1.get('token')  as string );

    try {
        const result = await fetch(url, {
            body: formData,
            method: 'POST',
        });

        const outcome = await result.json();
        if (outcome.success) {
            return Response.json({ message: "form sent" })
        }
    } catch (err) {
        console.error(err);
    }
    return Response.json({ message: "server failed to send your form" })
}