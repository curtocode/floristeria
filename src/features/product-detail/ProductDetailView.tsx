'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { productsService } from '@/services/products.service';
import type { Product } from '@/types/product.types';

interface Props {
  productId: string;
}

export const ProductDetailView = ({ productId }: Props) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productsService.getProductById(productId)
      .then(setProduct)
      .finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading) return <div className="p-20 text-center font-nunito">Cargando detalles...</div>;
  if (!product) return <div className="p-20 text-center font-nunito">Producto no encontrado</div>;

  return (
    <main className="relative min-h-screen bg-white">
      {/* Contenedor Principal: Top 114px, Max-Width 1200px, Gap 48px */}
      <div className="
        mx-auto flex flex-col items-start p-0 gap-[48px]
        w-full max-w-[1200px] mt-[114px] mb-20 px-4 md:px-0
      ">
        
        {/* Breadcrumbs: Inicio > Nombre de la flor */}
        <nav className="flex flex-row items-center p-0 gap-[4px] w-full h-[24px]">
          <Link href="/" className="font-sans text-[14px] text-[#606060] hover:text-black">
            Inicio
          </Link>
          <span className="text-[#606060] text-[14px]">&gt;</span>
          <span className="font-sans text-[14px] text-[#606060] font-medium">
            {product.name}
          </span>
        </nav>

        {/* Grid de Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[48px] w-full items-start">
          
          {/* Imagen del Producto */}
          <div className="w-full aspect-square rounded-[32px] overflow-hidden">
            <img 
              src={product.imgUrl} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Columna de Información */}
          <div className="flex flex-col items-start p-0 gap-[24px] w-full">
            
            {/* Título y Nombre Binomial */}
            <div className="flex flex-col items-start p-0 gap-1 flex-none grow-0">
              <h1 className="
                font-nunito font-bold text-[48px] leading-[72px] text-[#111111]
                flex-none order-0 grow-0 h-auto
              ">
                {product.name}
              </h1>
              <p className="
                font-sans font-normal text-[16px] leading-[24px] text-[#606060]
                flex-none order-1 grow-0 h-auto
              ">
                {product.binomialName}
              </p>
            </div>

            {/* Precio */}
            <div className="font-nunito font-bold text-[32px] text-[#111111]">
              €{product.price.toFixed(2)}
            </div>

            {/* Listado de Cuidados */}
            <div className="flex flex-col gap-4">
              <ul className="list-none p-0 m-0 flex flex-col gap-2">
                <li className="font-sans text-[16px] text-[#404040]">
                  • Regar {product.wateringsPerWeek} vez por semana
                </li>
                <li className="font-sans text-[16px] text-[#404040]">
                  • Fertilizar con {product.fertilizerType}
                </li>
              </ul>
            </div>

            {/* Botón Añadir al carrito (Configuración Figma) */}
            <button className="
              flex flex-row justify-center items-center 
              px-[16px] py-[8px] gap-[10px]
              w-[136px] h-[44px]
              bg-[#771E42] rounded-[1000px]
              flex-none order-3 grow-0
              hover:opacity-90 transition-all active:scale-95
            ">
              <span className="
                w-[104px] h-[21px]
                font-sans font-normal text-[14px] leading-[21px]
                text-white text-center
                flex-none order-0 grow-0
              ">
                Añadir al carrito
              </span>
            </button>

          </div>
        </div>
      </div>
    </main>
  );
};