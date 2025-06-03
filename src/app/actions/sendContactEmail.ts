
'use server';

import { z } from 'zod';
import { Resend } from 'resend';

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
    const errorMessages = parsedData.error.errors.map(err => `${err.path.join('.')}: ${err.message}`).join(', ');
    console.error('Datos de formulario inválidos:', errorMessages);
    return { success: false, error: `Datos de formulario inválidos: ${errorMessages}` };
  }

  const { email, projectDetails, contactPreference } = parsedData.data;

  // Verifica que la clave API de Resend esté disponible
  if (!process.env.RESEND_API_KEY) {
    console.error('Error: La variable de entorno RESEND_API_KEY no está configurada.');
    return { success: false, error: 'Error de configuración del servidor. No se pudo enviar el correo.' };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const mailOptions = {
      from: 'onboarding@resend.dev', // O, por ejemplo, 'contacto@tu-dominio-verificado.com'
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

    const { data, error } = await resend.emails.send(mailOptions);

    if (error) {
      console.error('Error al enviar el correo con Resend:', error);
      return { success: false, error: `Hubo un problema al enviar tu solicitud: ${error.message}` };
    }

    console.log('Correo enviado exitosamente a comercial@hepha-code.com. ID:', data?.id);
    return { success: true };

  } catch (error: any) {
    console.error('Error inesperado al intentar enviar el correo:', error);
    let errorMessage = 'Hubo un problema inesperado al procesar tu solicitud.';
    if (error.message) {
        errorMessage = `Error: ${error.message}`;
    }
    return { success: false, error: errorMessage };
  }
}
