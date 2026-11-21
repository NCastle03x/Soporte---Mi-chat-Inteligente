# Soporte Chat - Interfaz de Asistente Web

Este proyecto consiste en el desarrollo de la interfaz de usuario para un asistente virtual orientado al soporte técnico o comercial. En esta etapa inicial, el sistema no cuenta con integración de Inteligencia Artificial real; en su lugar, utiliza datos simulados (mock data) para demostrar el flujo de la interfaz y la arquitectura cliente-servidor.

## Caso de Uso

El caso de uso seleccionado es un **Asistente de Soporte al Cliente**. La aplicación está diseñada para simular un entorno donde los usuarios pueden enviar consultas sobre productos, servicios o problemas técnicos, y recibir respuestas en una interfaz de chat estructurada y amigable.

## Tecnologías Utilizadas

El proyecto fue construido utilizando las siguientes herramientas:
- **Next.js 16**: Framework de React configurado con el App Router.
- **TypeScript**: Para garantizar un tipado estricto y seguro en el código.
- **Tailwind CSS**: Para la implementación del diseño y la adaptabilidad (responsive).
- **shadcn/ui**: Biblioteca de componentes de interfaz de usuario accesibles y reutilizables.

## Características y Requisitos Implementados

La aplicación cumple con los siguientes criterios técnicos:
- **Layout de chat**: Interfaz dividida en una barra lateral (historial de tickets o conversaciones), un área central de mensajes y un campo de entrada de texto.
- **Componentes reutilizables**: Se desarrollaron tres componentes principales con props tipadas mediante TypeScript:
  - `Sidebar`: Gestiona la navegación entre los diferentes hilos de soporte.
  - `MessageBubble`: Renderiza los mensajes y adapta su diseño según el rol (cliente o agente de soporte).
  - `ChatInput`: Formulario encargado de la captura y envío de nuevos mensajes.
- **Formulario con Server Action**: El envío de mensajes se procesa a través de la Server Action `sendMessage` (ubicada en `src/app/actions.ts`), demostrando la comunicación entre el cliente y el servidor de Next.js.
- **Diseño Responsive y Accesible**: La interfaz se adapta a dispositivos móviles (ocultando la barra lateral mediante clases de Tailwind) e incluye atributos de accesibilidad como `aria-label` y roles semánticos de HTML.

## Instrucciones de Ejecución

Para ejecutar el proyecto de forma local, siga estos pasos:

1. Instale las dependencias del proyecto:
   ```bash
   npm install
2. npm run dev
3. http://localhost:3000