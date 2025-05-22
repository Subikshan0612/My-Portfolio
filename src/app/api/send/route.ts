// import { EmailTemplate } from "@/components/email-template";
// import { config } from "@/data/config";
// import { Resend } from "resend";
// import { z } from "zod";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const Email = z.object({
//   fullName: z.string().min(2, "Full name is invalid!"),
//   email: z.string().email({ message: "Email is invalid!" }),
//   message: z.string().min(10, "Message is too short!"),
// });
// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     console.log(body);
//     const {
//       success: zodSuccess,
//       data: zodData,
//       error: zodError,
//     } = Email.safeParse(body);
//     if (!zodSuccess)
//       return Response.json({ error: zodError?.message }, { status: 400 });

//     const { data: resendData, error: resendError } = await resend.emails.send({
//       from: "Porfolio <onboarding@resend.dev>",
//       to: [config.email],
//       subject: "Contact me from portfolio",
//       react: EmailTemplate({
//         fullName: zodData.fullName,
//         email: zodData.email,
//         message: zodData.message,
//       }),
//     });

//     if (resendError) {
//       return Response.json({ resendError }, { status: 500 });
//     }

//     return Response.json(resendData);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

import { config } from "@/data/config";
import { z } from "zod";

const Email = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    // Web3Forms implementation
    const formData = new FormData();
    formData.append('access_key', process.env.WEB3FORMS_ACCESS_KEY || '');
    formData.append('name', zodData.fullName);
    formData.append('email', zodData.email);
    formData.append('message', zodData.message);
    formData.append('subject', 'New Contact Form Submission');
    formData.append('from_name', 'Portfolio Contact Form');
    formData.append('to_email', config.email);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      return Response.json({ 
        success: true, 
        message: "Email sent successfully" 
      });
    } else {
      return Response.json({ 
        success: false, 
        message: data.message 
      }, { status: 500 });
    }
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
