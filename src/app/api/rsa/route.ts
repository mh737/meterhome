import { NextResponse } from "next/server";
// import { encrypt, decrypt } from "./rsa2.js";

// export async function POST(request: Request, { params }: any) {
//     const formData = await request.formData()
//     const name = formData.get('query')
//     return(new Response(await encrypt(name),{status:200}))
// }

// export async function GET(request: Request, { params }: any) {
//     const formData = await request.formData()
//     const name = formData.get('query')
//     return(new Response(decrypt(name),{status:200}))
// }


import { encryptData, decryptData } from './rsa2.js';
import { generateKeyPair } from './rsa2.js';

export async function POST(request: Request, { params }: any) {
    const formData = await request.formData()
    const name = formData.get('query')
    return(new Response(encryptData(name, process.env.PUBLICKEY),{status:200}))
}



export async function PUT(request: Request, { params }: any) {

    return(NextResponse.json(generateKeyPair()))
// }const { publicKey, privateKey } = generateKeyPair();
}