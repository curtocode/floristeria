import CatalogView from '@/features/catalog/CatalogView';

export default function Home() {
  return (
    <main className="p-8">
      <h1>Dulces Pétalos - Catálogo</h1>
      { <CatalogView /> }
    </main>
  );
}