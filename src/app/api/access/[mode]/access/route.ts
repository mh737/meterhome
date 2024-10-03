
import db1 from "../../db"
import { decryptData } from "../../../rsa/rsa2";

export async function POST(request: Request, { params }: any) {
    let query, value, result;
    // console.log(params.name)
    const formData = await request.formData()
    const name = formData.get('query')  as string 
    value = JSON.parse(decryptData(name))
    switch (params.mode) {

        case "add":
            result = await db1({ query: "INSERT INTO `accessrecord`( `passID`, `deviceID`,  `access`) VALUES (?,?,?);", values: [value.passid,value.device,value.access] })
            break;
        default:
            return new Response('mode not found', {
                status: 400,
            })

    } return Response.json({ name: "done" })
}