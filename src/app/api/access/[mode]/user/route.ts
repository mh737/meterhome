import db1 from "../../db"
import { decryptData } from "../../../rsa/rsa2";

export async function POST(request: Request, { params }: any) {
  let query, value, result;
  // console.log(params.name)
  const formData = await request.formData()
  const name = formData.get('query')  as string 
  value = decryptData(JSON.parse(name))
  
  switch (params.mode) {
    case "change":
      result = await db1({ query: "SELECT * FROM user WHERE userid=?", values: value.userid })

      if (result === undefined || parseInt(result) == 400) {
        return new Response('ERROR: user not found', { status: 400, })
      } else {
        if (value.column == "phone") {
          result = await db1({ query: "SELECT * FROM user WHERE phone=?", values: value.name })
          console.log(result)
          if (result === undefined || result.length == 0) {

          } else {
            return new Response('ERROR: phone number already exist', { status: 400, })
          }
        }
        result = await db1({ query: `UPDATE user SET ${value.column}=? WHERE userID=?`, values: [value.name, value.userid] })
      }
      break;
    case "add":
      result = await db1({ query: "SELECT * FROM user WHERE phone=?", values: value.phone })
      if (result === undefined || result.length == 0) {
        result = await db1({ query: "INSERT INTO user (phone, name) VALUES (?,?);", values: [value.phone, value.name] })
      } else {
        return new Response('ERROR: phone number already exist', { status: 400, })
      }
      break;
    case "delete":
      break;
    // additional cases
    default:
      return new Response('mode not found', {
        status: 400,
      })

  } return Response.json({ name: "done" })
}
