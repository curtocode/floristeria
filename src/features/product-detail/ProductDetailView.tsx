'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { productsService } from '@/services/products.service';
import type { Product } from '@/types/product.types';
import { ChevronRightIcon } from '@/components/ChevronRightIcon';
import { translateFertilizer } from '@/utils/translations';

interface Props {
  productId: string;
}

export const ProductDetailView = ({ productId }: Props) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll al top cuando se carga la vista
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    productsService.getProductById(productId)
      .then(setProduct)
      .finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading) return <div className="p-20 text-center font-nunito">Cargando detalles...</div>;
  if (!product) return <div className="p-20 text-center font-nunito">Producto no encontrado</div>;

  return (
    <main className="relative min-h-screen">
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '48px',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '48px',
          paddingLeft: '16px',
          paddingRight: '16px',
          boxSizing: 'border-box',
        }}
      >
        <nav 
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0px',
            gap: '4px',
            height: '24px',
          }}
        >
          {/* Inicio */}
          <Link 
            href="/" 
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#606060',
              textDecoration: 'none',
            }}
          >
            Inicio
          </Link> 
          {/* Chevron Icon - 24x24 container */}
          <ChevronRightIcon />
          
          {/* Nombre del producto */}
          <span 
            style={{
              fontFamily: 'var(--font-dm-sans), sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              color: '#606060',
            }}
          >
            {product.name}
          </span>
        </nav>

        {/* Detail: flex column en mobile, row en desktop. Gap 40px */}
        <div 
          className="flex flex-col md:flex-row items-start gap-[40px] w-full"
        >
          
          {/* Image: 250px altura en móvil, 50% width en desktop */}
          <div 
            className="w-full h-[250px] md:h-auto md:w-1/2 md:min-w-[300px] md:aspect-[600/905] rounded-[32px] overflow-hidden flex-shrink-0"
          >
            <img 
              src={product.imgUrl} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div 
            className="flex flex-col items-start gap-[24px] flex-1 w-full"
          >
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '4px',
              }}
            >
              <h1 
                className="font-nunito font-bold text-[48px] leading-[72px] text-[#111111] m-0"
              >
                {product.name}
              </h1>
              <p 
                className="font-dmsans text-[16px] leading-[24px] text-[#606060] m-0"
              >
                {product.binomialName}
              </p>
            </div>
            <span 
              className="font-nunito font-bold text-[28px] leading-[42px] text-[#111111]"
            >
              €{product.price.toFixed(2)}
            </span>
            <div 
              className="flex flex-col items-start pl-4 gap-2"
            >
              <span 
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '21px',
                  color: '#111111',
                }}
              >
                · Regar {product.wateringsPerWeek} {product.wateringsPerWeek === 1 ? 'vez' : 'veces'} por semana
              </span>
              <span 
                style={{
                  fontFamily: 'var(--font-dm-sans), sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '21px',
                  color: '#111111',
                }}
              >
                · Fertilizar con {translateFertilizer(product.fertilizerType)}
              </span>
            </div>

            {/* Button: ancho completo en móvil, 136px en desktop */}
            <button 
              className="flex flex-row justify-center items-center py-2 px-4 gap-2.5 w-full md:w-[136px] h-[44px] bg-[#771E42] rounded-[1000px] border-none cursor-pointer hover:opacity-90 transition-all active:scale-95"
            >
              <span 
                className="font-dmsans text-[14px] leading-[21px] text-white"
              >
                Añadir al carrito
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};