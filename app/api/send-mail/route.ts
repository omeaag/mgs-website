// Import necessary modules
import { NextResponse, NextRequest } from 'next/server'
import sgMail from '@sendgrid/mail'

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID!)

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json()
    const { email, phone, query, first, last, company } = body
    console.log(body, 'body')

    // Define the email message
    const msg = {
      to: 'info@moodglobalservices.com',
      from: 'info@moodglobalservices.com', // Replace with your verified sender
      replyTo: email,
      subject: 'New Query Received',
      // html: `<div><p>Request: ${query}</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Company: ${company}</p><p>Name: ${first} ${last}</p></div>`,
      html: `<div>
        <p>Request: ${query}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Company: ${company}</p>
        <p>Name (First, Last): ${first} ${last}</p>
        </div>`,
    }

    // Send the email
    await sgMail.send(msg)

    // Return a success response
    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*', // Adjust the allowed origin as needed
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      },
    )
  } catch (error) {
    console.error('Error sending email:', error)

    // Return an error response
    return NextResponse.json(
      { success: false, error: 'Error sending email' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*', // Adjust the allowed origin as needed
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      },
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // Adjust the allowed origin as needed
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    },
  )
}