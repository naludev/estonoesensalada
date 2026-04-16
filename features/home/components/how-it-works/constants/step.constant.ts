import { StepProps } from "../types";

/**
 * Steps - Flujo real: Carrito → Confirmar → WhatsApp
 */
export const STEPS: StepProps[] = [
    {
        number: "01",
        title: "Agregá al carrito",
        description: "Elegí lo que más te guste y sumalo a tu pedido. Sin vueltas, sin registros.",
    },
    {
        number: "02",
        title: "Confirmá tu pedido",
        description: "Revisá lo que elegiste y dale a 'Terminar compra'. Generamos tu número de pedido al instante.",
    },
    {
        number: "03",
        title: "Coordinamos por WhatsApp",
        description: "Te llevamos directo a WhatsApp con tu número de pedido. Ahí coordinamos pago y entrega. Simple, rápido y sin comisiones.",
    },
];