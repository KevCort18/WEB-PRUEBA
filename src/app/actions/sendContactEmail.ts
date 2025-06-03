
'use server';

import { z } from 'zod';

// Define un esquema para la validación de los datos del formulario.
const ContactFormSchema = z.object({
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
  projectDetails: z.string().optional(),
  contactPreference: z.string(),
});

interface SendContactResult {
  success: boolean;
  error?: string;
}

export async function sendContactRequest(formData: unknown) : Promise<SendContactResult> {
  const parsedData = ContactFormSchema.safeParse(formData);

  if (!parsedData.success) {
    // Extraer y formatear los errores de Zod para una mejor presentación
    const errorMessages = parsedData.error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', ');
    console.error('Datos de formulario inválidos:', errorMessages);
    return { success: false, error: `Datos de formulario inválidos: ${errorMessages}` };
  }

  const { email, projectDetails, contactPreference } = parsedData.data;

  // Aquí es donde integrarías tu servicio de envío de correo.
  // Por ejemplo, usando Resend, SendGrid, AWS SES, o Nodemailer con un proveedor SMTP.
  // Necesitarás instalar el SDK correspondiente (ej: `npm install resend`) y configurar
  // las variables de entorno con tus claves API.

  // ---- INICIO: Lógica de envío de email (EJEMPLO CONCEPTUAL - NO FUNCIONAL SIN CONFIGURACIÓN) ----
  /*
  // Ejemplo con Resend (necesitas instalar `resend` y configurar RESEND_API_KEY en .env)
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const mailOptions = {
      from: 'tu_email_verificado@tudominio.com', // Reemplaza con tu email verificado
      to: 'comercial@hepha-code.com',
      subject: 'Nueva Solicitud de Contacto desde HephaCode.com',
      html: `
        <h1>Nueva Solicitud de Contacto</h1>
        <p><strong>Correo Electrónico:</strong> ${email}</p>
        <p><strong>Detalles del Proyecto:</strong></p>
        <p>${projectDetails || 'No proporcionados.'}</p>
        <p><strong>Preferencia de Contacto:</strong> ${contactPreference}</p>
      `,
    };

    // Descomenta la siguiente línea para enviar realmente el email con Resend:
    // await resend.emails.send(mailOptions);

    console.log('=== Solicitud de Contacto (Simulación de Envío) ===');
    console.log('Destinatario: comercial@hepha-code.com');
    console.log('Asunto: Nueva Solicitud de Contacto desde HephaCode.com');
    console.log('Email:', email);
    console.log('Detalles del Proyecto:', projectDetails || 'No proporcionados');
    console.log('Preferencia de Contacto:', contactPreference);
    console.log('=================================================');
    
    // Simulación de demora de red
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Simulación: Correo enviado exitosamente.');

    return { success: true };

  } catch (error) {
    console.error('Error al intentar enviar el correo (simulación o real):', error);
    return { success: false, error: 'Hubo un problema al procesar tu solicitud.' };
  }
  */
  // ---- FIN: Lógica de envío de email ----
  
  // Por ahora, solo simulamos el envío y registramos en consola:
  console.log('=== Solicitud de Contacto Recibida (Simulación) ===');
  console.log('Destinatario: comercial@hepha-code.com');
  console.log('Asunto: Nueva Solicitud de Contacto desde HephaCode.com');
  console.log('Email:', email);
  console.log('Detalles del Proyecto:', projectDetails || 'No proporcionados');
  console.log('Preferencia de Contacto:', contactPreference);
  console.log('=================================================');
  
  // Simulación de demora de red
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log('Simulación: Correo "enviado" a comercial@hepha-code.com');

  return { success: true };
}
