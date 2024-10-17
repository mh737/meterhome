

import { encryptData, decryptData } from '../rsa2.js';

export async function POST(request: Request, { params }: any) {
    const formData = await request.formData()
    const name = formData.get('query')
    return(new Response(encryptData(name, process.env.PUBLICKEY),{status:200}))
}

