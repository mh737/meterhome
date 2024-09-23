import { decryptData } from "../rsa2";

export async function POST(request: Request, { params }: any) {
    const formData = await request.formData()
    const name = formData.get('query')
    // console.log(name)
    return(new Response(decryptData(name, process.env.PRIVATEKEY),{status:200}))
// }const { publicKey, privateKey } = generateKeyPair();
}