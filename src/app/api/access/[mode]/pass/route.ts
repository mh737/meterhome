
import db1 from "../../db"
import { decryptData } from "../../../rsa/rsa2";

export async function POST(request: Request, { params }: any) {
    let query, value, result;
    // console.log(params.name)
    const formData = await request.formData()
    const name = formData.get('query')  as string 
    value = decryptData(JSON.parse(name))
    if(value.userid == value.changeuser){ return new Response('ERROR: No available for changing your own permission', { status: 400, })}
    result = await db1({ query: "SELECT COUNT(*) FROM companymanage WHERE userid = ? AND companyid =?", values: [value.userid, value.companyid] })

    if (result == undefined || result.length == 0) { return new Response('ERROR: No permission to change access control', { status: 400, }) }
    else if (result[0]['COUNT(*)'] != 1) { return new Response('ERROR: No permission to change access control', { status: 400, }) }
    else {
        switch (params.mode) {

            case "add":
                    result = await db1({ query: "INSERT INTO `pass`(`companyid`, `detail`, `accesstime`, `userid`) VALUES (?,?,?,?)", values: [value.companyid,value.details, value.accesstime,value.changeuser] })
                break;
                
            case "change":
                    result = await db1({ query: `UPDATE pass SET ${value.column}=? WHERE userid =? AND companyid =?`, values: [value.name,value.changeuser, value.companyid] })
                    
                break;
            case "delete":
                result = await db1({ query: "DELETE FROM `pass` WHERE  userid =? AND companyid =?", values: [value.changeuser, value.companyid] })
            break;
            default:
                return new Response('mode not found', {
                    status: 400,
                })

        } return Response.json({ name: "done" })
    }
}