import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// API Routes
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body;
  console.log("Received contact form submission:", { name, email, phone, service, message });

  const resendApiKey = process.env.RESEND_API_KEY;
  const emailTo = process.env.EMAIL_TO || "fg.serviciosintegrales@hotmail.es";

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY missing. Logging to console instead.");
    return res.status(200).json({ 
      success: true, 
      message: "Solicitud recibida (modo demo). Configure RESEND_API_KEY para enviar correos reales." 
    });
  }

  try {
    console.log(`Enviando correo vía Resend a: ${emailTo}`);
    
    const { data, error } = await resend.emails.send({
      from: 'FG Servicios <contacto@fgserviciosintegrales.cl>',
      to: [emailTo],
      subject: `Nueva Solicitud de Cotización: ${service}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">Nueva Solicitud de Cotización</h2>
          <p style="font-size: 16px;"><strong>Nombre/Empresa:</strong> ${name}</p>
          <p style="font-size: 16px;"><strong>Correo Electrónico:</strong> ${email}</p>
          <p style="font-size: 16px;"><strong>Teléfono:</strong> ${phone}</p>
          <p style="font-size: 16px;"><strong>Servicio:</strong> ${service}</p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 4px; margin-top: 20px;">
            <p style="font-weight: bold; margin-top: 0;">Descripción del Proyecto:</p>
            <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #666; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px;">
            Este es un mensaje automático enviado desde el formulario de contacto de FG Servicios Integrales.
          </p>
        </div>
      `,
    });

    if (error) {
      throw error;
    }

    console.log("Email enviado exitosamente:", data);
    
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
    const { createServer: createViteServer } = await import("vite");
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