import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// API Routes
app.post("/api/contact", async (req, res) => {
  const { name, phone, service, message } = req.body;
  
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO || "fg.serviciosintegrales@hotmail.es";
  const emailHost = process.env.EMAIL_HOST || "smtp.office365.com";
  const emailPort = Number(process.env.EMAIL_PORT) || 587;

  if (!emailUser || !emailPass) {
    return res.status(200).json({ 
      success: true, 
      message: "Modo demo: Configure variables de entorno." 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: false, // Obligatorio false para puerto 587
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false // Ayuda a evitar bloqueos en Vercel
      }
    });

    const mailOptions = {
      from: `"FG Servicios Integrales" <${emailUser}>`,
      to: emailTo,
      subject: `Nueva Solicitud: ${service}`,
      text: `Nombre: ${name}\nTeléfono: ${phone}\nServicio: ${service}\n\n${message}`,
      html: `<div style="font-family: sans-serif;"><h2>Nueva Solicitud</h2><p><strong>Nombre:</strong> ${name}</p><p><strong>Servicio:</strong> ${service}</p><p>${message}</p></div>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Enviado correctamente." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Error al enviar." });
  }
});

// IMPORTANTE: No llames a startServer() aquí para Vercel.
// Solo exporta la app.
export default app;