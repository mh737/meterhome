import { NextResponse, type NextRequest } from 'next/server'
import  excuteQuery  from "./db.js";


export async function POST(request: Request , {params}: any) {
  
  const formData = await request.formData()
  const name = formData.get('query')
  const email = formData.get('value')
  const result = await excuteQuery({
    query: name,
    values: email,
  });
    return new Response("ttt" + result , {      status: 200,    })
}

export async function GET(request: NextRequest, context: any) {
  
  var result = await excuteQuery({ query: "SELECT LAST_INSERT_ID() ;", values: [] })
  if(typeof(result[0]['LAST_INSERT_ID()'])=== undefined){
    return new Response('Database not connected!', {      status: 400,    })}
  else{
  return new Response('Connected to database!'+ result[0]['LAST_INSERT_ID()'], {      status: 200,    })}
};

// import {excuteQuery1} from '../db.js' //import {actual function} 
// import db from "../db.js" //import default function
// import excuteQuery from '../../db.js'
// 
//   try{
//   return Response.json({ name, email })}
//   catch(e){console.log(e)}
// }



// import x1 from "@/app/favicon.json"
// export async function POST(request: Request, context: any){
//   const {params} = context
//   const user = x1.filter((x) => params.userID === x.id.toString())
//   return NextResponse.json({
//     user,
//   })
// }

// import { cookies } from 'next/headers'
 
// export async function GET(request: Request) {
//   const cookieStore = cookies()
//   const token = cookieStore.get('token')
 
//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: { 'Set-Cookie': `token=${token.value}` },
//   })
// }