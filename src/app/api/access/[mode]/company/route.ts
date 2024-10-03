
import db1 from "../../db"
import { decryptData } from "../../../rsa/rsa2";

export async function POST(request: Request, { params }: any) {
    let query, value, result: { [x: string]: any; };
    // console.log(params.name)
    const formData = await request.formData()
    const name = formData.get('query')  as string 
    // console.log(name)
    value = JSON.parse(decryptData(name))
    // console.log(value)
    switch (params.mode) {

        case "add":
            result = await db1({ query: "INSERT INTO `company`( `companyname`) VALUES (?);", values: [value.companyname] })
            result = await db1({ query: "SELECT LAST_INSERT_ID() ;", values: [] })
            result = await db1({ query: "INSERT INTO `companymanage`( `userid`, `companyid`,`permchangename`,`permchangeowner`,`permdeletecompany`) VALUES (?,?,1,1,1)", values: [value.userid, result[0]['LAST_INSERT_ID()']] })
            break;
        case "delete":
            result = await db1({ query: "SELECT permdeletecompany FROM companymanage WHERE userid = ? AND companyid =?", values: [value.userid, value.companyid] })


            if (result == undefined || result.length == 0) {
                return new Response('ERROR: No permission to delete company', { status: 400, })
            } else if (result[0].permdeletecompany != 1) { return new Response('ERROR: No permission to delete company', { status: 400, }) }
            else; {
                result = await db1({ query: "DELETE FROM `company` WHERE companyid=?", values: [value.companyid] })
            }
            break;
        case "change":
            result = await db1({ query: "SELECT 	permchangename FROM companymanage WHERE userid = ? AND companyid =?", values: [value.userid, value.companyid] })


            if (result == undefined || result.length == 0) {
                return new Response('ERROR: No permission to change company detail', { status: 400, })
            } else if (result[0].permchangename != 1) { return new Response('ERROR: No permission to change company detail', { status: 400, }) }
            else; {
                result = await db1({ query: `UPDATE company SET ${value.column}=? WHERE companyid=?`, values: [value.name, value.companyid] })
            }
            break;
        default:
            return new Response('mode not found', {
                status: 400,
            })

    } return Response.json({ name: "done" })
}
