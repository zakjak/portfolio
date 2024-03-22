import { NextResponse, NextRequest } from "next/server"
import { Resend } from "resend"


export async function POST(req) {
  const { name, subject, html } = await req.json()
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  try{
    const { data } = await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.RESEND_TO,
      subject,
      html
    })

    
    return NextResponse.json({data})
    
  }catch(err){
    return NextResponse.json(err)
  }
}