export const isWhatsAppConfigured=()=>Boolean(import.meta.env.WHATSAPP_ACCESS_TOKEN&&import.meta.env.WHATSAPP_PHONE_NUMBER_ID);
export async function sendWhatsAppDemo(message:string){ return {mode:'DEMO', status:'Enviado', message}; }
// Las llamadas a Meta deben realizarse desde una Edge Function o servidor: nunca exponga el access token en el navegador.
