
import db1 from "../../../../db"

export async function POST(request: Request, { params }: any) {
    let query, value, result;
    // console.log(params.name)
    value = JSON.parse(params.name)
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