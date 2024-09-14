
// import {excuteQuery1} from '../db.js' //import {actual function} 
import db from "../db.js" //import default function
import { type NextRequest } from 'next/server'


export async function GET(request: NextRequest, context: any) {
  try{
    console.log(context.query)
  }
  catch ( error ) { console.log( error );    }
  return new Response('Hello, Next.js!', {
      status: 200,
      // headers: { 'Set-Cookie': `token=${token.value}` },
    })
};

export async function POST(request: Request) {
  try{
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
       const result = await db({
        query: '? ?',
        values: [name, email],
    });
    console.log( "ttt",result);
  return Response.json({ name, email })}
  catch(e){}
}