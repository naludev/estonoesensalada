'use client'
import { useState, useCallback } from 'react';
import { UseCTALogicProps } from '../types';
/**
 * Use CTA Logic
 * @param discountCode - Discount code
 * @param onSuccess - Success handler
 * @returns {object} - CTA logic
 */
export function useCTALogic({ discountCode, onSuccess }: UseCTALogicProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCTAClick = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Aquí puedes agregar lógica como:
            // - Copiar código al portapapeles
            // - Redirigir a checkout con descuento aplicado
            // - Guardar en localStorage
            // - Enviar analytics

            await navigator.clipboard.writeText(discountCode);

            if (onSuccess) {
                onSuccess();
            }
        } catch (err) {
            setError('Error al procesar la acción');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [discountCode, onSuccess]);

    return {
        isLoading,
        error,
        handleCTAClick
    };
}