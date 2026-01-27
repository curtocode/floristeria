'use client';

import { useEffect, useState } from 'react';
import { productsService } from '@/services/products.service';
import type { Product } from '@/types/product.types';
import { ProductCard } from './components/ProductCard';
import { SearchBar } from './components/SearchBar';

export default function CatalogView() {
  // ESTADOS
  const [products, setProducts] = useState<Product[]>([]);         // Copia maestra
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Copia visible
  const [isLoading, setIsLoading] = useState(true);

  // 2. CARGA INICIAL
  useEffect(() => {
    productsService.getAllProducts()
      .then((data) => {
        setProducts(data);         // Guardamos todos
        setFilteredProducts(data); // Al inicio, mostramos todos
      })
      .finally(() => setIsLoading(false));
  }, []);

    //FUNCIÓN DE FILTRADO
  const handleSearch = (text: string) => {
    // Si el buscador está vacío, restauramos la lista completa
    if (!text) {
      setFilteredProducts(products);
      return;
    }
    const lowerText = text.toLowerCase();

    // Filtramos
    const filtered = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(lowerText)
      );
    });

    setFilteredProducts(filtered);
  };

  if (isLoading) return <div className="text-center py-20 font-nunito text-xl">Cargando catálogo...</div>;

  return (
    <div className="flex flex-col items-center gap-[48px] w-full max-w-[1200px] mx-auto px-4 py-8">
      
      {}
      {/* Le pasamos la función handleSearch al hijo */}
      <SearchBar onSearch={handleSearch} />

      {/*LISTA FILTRADA*/}
      <div className="
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-[24px]
        w-full justify-items-center
      ">
        {filteredProducts.length === 0 ? (
          <p className="col-span-full text-gray-500 mt-10">No hemos encontrado flores con ese nombre.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}