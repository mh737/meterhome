
import db1 from "../../db"
import { decryptData } from "../../../rsa/rsa2";

export async function POST(request: Request, { params }: any) {
    let query, value, result;
    // console.log(params.name)
    const formData = await request.formData()
    const name = formData.get('query')  as string 
    value = JSON.parse(decryptData(name))
    if(value.userid == value.changeuser){ return new Response('ERROR: No available for changing your own permission', { status: 400, })}
    result = await db1({ query: "SELECT permchangeowner FROM companymanage WHERE userid = ? AND companyid =?", values: [value.userid, value.companyid] })


    if (result == undefined || result.length == 0) { return new Response('ERROR: No permission to change company owner setting', { status: 400, }) }
    else if (result[0].permchangeowner != 1) { return new Response('ERROR: No permission to change company owner setting', { status: 400, }) }
    else {
        switch (params.mode) {

            case "add":
                    result = await db1({ query: "INSERT INTO `companymanage`(`userid`, `companyid`, `permchangename`, `permchangeowner`, `permdeletecompany`) VALUES (?,?,?,?,?)", values: [value.changeuser, value.companyid,value.pcn, value.pco, value.pdc] })
                break;
            case "change":
                    result = await db1({ query: `UPDATE companymanage SET ${value.column}=? WHERE userid =? AND companyid =?`, values: [value.name,value.changeuser, value.companyid] })
                    
                break;
            case "delete":
                result = await db1({ query: "DELETE FROM `companymanage` WHERE userid =? AND companyid =?", values: [value.changeuser, value.companyid] })
            break;
            default:
                return new Response('mode not found', {
                    status: 400,
                })

        } return Response.json({ name: "done" })
    }
}