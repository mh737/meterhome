//pages router looks better

import { NextResponse } from 'next/server'
import x1 from "@/app/favicon.json"

export async function GET(){
  return NextResponse.json({
    hello:"world",
  })
}
export async function POST(request: Request, context: any){
  const {params} = context
  const user = x1.filter((x) => params.userID === x.id.toString())
  return NextResponse.json({
    user,
  })
}



