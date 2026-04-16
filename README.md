# 🌿 Esto No Es Ensalada (ENEE)

> **"Comida vegana que rompe estereotipos. Porque comer rico también puede ser a base de plantas."**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

![Banner Principal](public/website.png)

## 📌 Visión General

**Esto No Es Ensalada** es una solución de e-commerce gastronómico de alto rendimiento diseñada específicamente para el mercado de viandas y comida plant-based. El proyecto trasciende la simple muestra de un menú, implementando un embudo de conversión optimizado que culmina en una integración fluida con **WhatsApp Business**.

## 🏗️ Arquitectura del Software

El proyecto sigue los principios de **Feature-Sliced Design (FSD)**, lo que garantiza escalabilidad y una separación de responsabilidades clara:

- **App**: Configuración global, proveedores y routing.
- **Features**: Unidades de negocio lógicas (Cart, Checkout, Menu, Home).
- **Components**: UI Components reutilizables (Shadcn/UI base).
- **Lib**: Servicios compartidos (WhatsApp Bridge, API helpers).

## 🚀 Soluciones Técnicas Implementadas

### 1. El Puente de WhatsApp (Ordering System)
En lugar de un checkout complejo con pasarelas de pago que pueden generar fricción, implementamos un sistema de **"Order Bridge"**:
- **Generación de ID de Orden**: Basado en un contador secuencial para trazabilidad.
- **Background Notification**: Integración con **CallMeBot** para notificar al administrador en tiempo real mediante una API de webhook oculta al usuario.
- **Deeplinking Directo**: Una vez confirmado el pedido, se genera una URL de WhatsApp pre-formateada con el detalle técnico de la orden, minimizando errores de comunicación.

### 2. Design System Neo-Brutalista
La estética de la web refleja el carácter de la marca:
- **Neo-Brutalismo / Comic-Style**: Uso de bordes gruesos (`border-3`), sombras rígidas (`comic-shadow`) y colores de alta saturación (`#53f921`, `#f633cc`).
- **Responsive-First**: Layouts adaptativos que resuelven problemas de superposición en Viewports móviles (especialmente en la sección Hero).
- **Micro-interacciones**: Animaciones basadas en Framer Motion y CSS Transitions para feedback instantáneo en el carrito y filtros.

### 3. Estrategia de SEO Local (Montevideo, UY)
Implementación de un esquema de SEO de "Estado del Arte":
- **Metainformación Dinámica**: Configuración de `Metadata` de Next.js con soporte nativo para OpenGraph y Twitter Cards.
- **JSON-LD Structured Data**: Inyección de esquemas `Restaurant` y `WebSite` de Schema.org, incluyendo geolocalización precisa para la Ciudad Vieja de Montevideo.
- **Sitemap & Robots**: Generación dinámica de rutas para garantizar la indexación total por parte del GoogleBot.

## 🛠️ Stack Tecnológico

| Herramienta | Uso |
| :--- | :--- |
| **Next.js 16** | SSR, SSG y App Router para optimización de Core Web Vitals. |
| **Context API** | Gestión de estado global del carrito de compras. |
| **Lucide React** | Librería de iconografía consistente. |
| **Radix UI** | Primitivas accesibles para drawers y diálogos. |
| **Tailwind 4** | Motores de estilos con arquitectura de JIT. |

## ⚙️ Configuración del Entorno

Debes clonar el proyecto y configurar tu archivo `.env.local`:

```bash
# Credentials for WhatsApp Notification Bridge
NEXT_PUBLIC_CALLMEBOT_API_KEY=tu_key_aqui
NEXT_PUBLIC_MERCHANT_PHONE=598xxxxxxx
NEXT_PUBLIC_APP_URL=https://estonoesensalada.com
```

---

Desarrollado bajo los estándares de **Clean Code** y **Modern Web Design**.
