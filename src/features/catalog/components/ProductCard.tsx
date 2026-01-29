import Link from 'next/link';
import type { Product } from '@/types/product.types';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="
      /* Layout y Espaciado - Figma: padding 16px, gap 16px */
      flex flex-col p-4 gap-4 
      /* Estilos de la Tarjeta (Figma) */
      bg-white 
      rounded-[32px] 
      shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.1),0px_4px_4px_-1px_rgba(12,12,13,0.05)]
      /* Comportamiento extra */
      transition-transform hover:-translate-y-1 duration-300
      /* Mobile: width 100%, max 361px. Desktop: max 384px */
      h-[422px] w-full max-w-[361px] md:max-w-[384px]
      relative /* Necesario para posicionar elementos absolutos */
      isolate /* Figma: isolation: isolate */
    ">
      
      {/* (Heading  */}
      <div className="flex flex-col gap-2">
        <h3 className="font-nunito font-bold text-[28px] leading-[42px] text-[#111111] line-clamp-1">
          {product.name}
        </h3>
        
        <p className="
          font-sans          /* Fuente: 'DM Sans' (configurada en tailwind.config) */
          font-normal        /* font-weight: 400 */
          text-[16px]        /* font-size: 16px */
          leading-[24px]     /* line-height: 24px */
          text-[#606060]     /* color: #606060 */
          truncate           /* Para que no se rompa si es muy largo */
        ">
          {product.binomialName}
        </p>
      </div>

      {/* IMAGEN Y BOTONES (Image - Order 1) */}
      <div className="relative w-full h-[300px] flex-none self-stretch z-[1]">
        <img 
          src={product.imgUrl} 
          alt={product.name}
          className="w-full h-full object-cover rounded-[24px]"
        />

        {/* Precio (Pastilla izquierda) - Mobile: left 8px (dentro del padding 16px del card = 24px desde borde) */}
        <div className="
          absolute bottom-[24px] left-[8px] /* Ajustado: 8px desde imagen = 24px desde borde card */
          flex items-center justify-center 
          px-4 py-2.5 
          bg-white rounded-full 
          shadow-sm
        ">
          <span className="font-nunito font-medium text-[20px] leading-[30px] text-black">
            € {product.price.toFixed(2)} 
          </span>
        </div>

        {/* Botón GO TO */}
        <Link 
          href={`/product/${product.id}`}
          className="
            /* Posicionamiento - Mobile: right 8px (dentro del padding del card) */
            absolute 
            bottom-[24px] 
            right-[8px] 
            z-[3]

            /* Dimensiones */
            w-[40px] 
            h-[40px] 

            /* Fondo y Sombra (Gestionado por CSS para permitir hover) */
            bg-white 
            rounded-full 
            shadow-[0px_4px_4px_rgba(0,0,0,0.25)] /* Sombra ligera para destacar sobre foto */

            /* Centrado del SVG */
            flex 
            items-center 
            justify-center 

            /* Efecto Hover */
            hover:bg-gray-100 transition-colors
          "
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* La flecha diagonal */}
            <path 
              d="M25 15L15 25" 
              stroke="black" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            {/* La punta de la flecha */}
            <path 
              d="M16 15H25V24" 
              stroke="black" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};