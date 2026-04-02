import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// API Routes
app.post("/api/contact", async (req, res) => {
  const { name, phone, service, message } = req.body;
  console.log("Received contact form submission:", { name, phone, service, message });

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO || "fg.serviciosintegrales@hotmail.es";
  const emailHost = process.env.EMAIL_HOST || "smtp.office365.com";
  const emailPort = Number(process.env.EMAIL_PORT) || 587;

  if (!emailUser || !emailPass) {
    console.warn("Email configuration missing. Logging to console instead.");
    return res.status(200).json({ 
      success: true, 
      message: "Solicitud recibida (modo demo). Configure EMAIL_USER y EMAIL_PASS para enviar correos reales." 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: emailPort,
      secure: emailPort === 465,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"FG Servicios Integrales" <${emailUser}>`,
      to: emailTo,
      subject: `Nueva Solicitud de Cotización: ${service}`,
      text: `
        Nombre/Empresa: ${name}
        Teléfono: ${phone}
        Servicio: ${service}
        
        Descripción del Proyecto:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #ea580c;">Nueva Solicitud de Cotización</h2>
          <p><strong>Nombre/Empresa:</strong> ${name}</p>
          <p><strong>Teléfono:</strong> ${phone}</p>
          <p><strong>Servicio:</strong> ${service}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p><strong>Descripción del Proyecto:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ 
      success: true, 
      message: "Su solicitud ha sido enviada correctamente. Nos pondremos en contacto pronto." 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ 
      success: false, 
      message: "Hubo un error al enviar el correo. Por favor intente más tarde." 
    });
  }
});

async function startServer() {
  const PORT = Number(process.env.PORT) || 3000;

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production" && !process.env.VERCEL) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Only listen if not on Vercel
  if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
}

startServer();

export default app;