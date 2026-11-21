'use server';

import { revalidatePath } from 'next/cache';

export async function sendMessage(formData: FormData) {
  const message = formData.get('message') as string;

  if (!message?.trim()) {
    return; // Retorna vacío, NO devuelvas un objeto { error: ... }
  }

  console.log('Mensaje guardado en el servidor:', message);

  revalidatePath('/');
  // Asegúrate de NO tener un return { success: true } aquí abajo
}