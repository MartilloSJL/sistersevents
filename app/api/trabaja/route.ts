import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { nombre, email, telefono, distrito } = data;

    // 1. Configurar el transporte (el cartero)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // 2. Configurar el mensaje
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Te llega a ti mismo
      subject: `Nueva Postulación: ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #db2777;">¡Nueva Solicitud de Trabajo! 🎈</h2>
          <p>Alguien quiere unirse al equipo de Sisters Events:</p>
          <ul>
            <li><strong>Nombre:</strong> ${nombre}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Teléfono:</strong> ${telefono}</li>
            <li><strong>Distrito:</strong> ${distrito}</li>
          </ul>
          <p>Revisa estos datos y contáctalo para una entrevista.</p>
        </div>
      `,
    };

    // 3. Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correo enviado con éxito' }, { status: 200 });

  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 });
  }
}